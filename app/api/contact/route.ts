import { NextRequest, NextResponse } from "next/server";
import { ContactFormData } from "@/types";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { sendContactNotificationEmail } from "@/lib/email/resend";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;

    // 1. Honeypot check contra bots de spam
    if (body._website_url && body._website_url.trim() !== "") {
      // Simular éxito para no alertar al bot
      return NextResponse.json(
        { success: true, message: "Solicitud procesada correctamente." },
        { status: 200 }
      );
    }

    // 2. Validación de campos obligatorios
    const fieldErrors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      fieldErrors.name = "Por favor, introduce tu nombre (mínimo 2 caracteres).";
    } else if (body.name.length > 100) {
      fieldErrors.name = "El nombre no puede exceder 100 caracteres.";
    }

    if (body.lastName && body.lastName.length > 100) {
      fieldErrors.lastName = "Los apellidos no pueden exceder 100 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      fieldErrors.email = "Por favor, introduce una dirección de correo electrónico válida.";
    }

    if (body.phone && body.phone.length > 30) {
      fieldErrors.phone = "El número de teléfono es demasiado largo.";
    }

    if (!body.projectType || body.projectType.trim() === "") {
      fieldErrors.projectType = "Por favor, selecciona el tipo de proyecto.";
    }

    if (!body.message || body.message.trim().length < 10) {
      fieldErrors.message = "Por favor, describe brevemente tu proyecto (mínimo 10 caracteres).";
    } else if (body.message.length > 3000) {
      fieldErrors.message = "El mensaje no puede exceder 3000 caracteres.";
    }

    if (!body.privacyAccepted) {
      fieldErrors.privacyAccepted = "Debes aceptar la política de privacidad para enviar el formulario.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Hay errores en los campos del formulario.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    // 3. Sanitización de datos
    const sanitizedData: ContactFormData = {
      name: body.name.trim(),
      lastName: body.lastName ? body.lastName.trim() : undefined,
      email: body.email.trim().toLowerCase(),
      phone: body.phone ? body.phone.trim() : undefined,
      projectType: body.projectType.trim(),
      location: body.location ? body.location.trim() : undefined,
      message: body.message.trim(),
      privacyAccepted: true,
    };

    let supabasePersisted = false;
    let emailSent = false;
    let devMode = false;

    // 4. Persistencia en Supabase si está disponible
    const supabase = getSupabaseServerClient();
    if (supabase) {
      try {
        const { error: dbError } = await supabase.from("contact_requests").insert([
          {
            name: `${sanitizedData.name} ${sanitizedData.lastName || ""}`.trim(),
            email: sanitizedData.email,
            phone: sanitizedData.phone || null,
            project_type: sanitizedData.projectType,
            location: sanitizedData.location || null,
            message: sanitizedData.message,
            status: "NEW",
          },
        ]);

        if (!dbError) {
          supabasePersisted = true;
        } else {
          // Si la tabla no existe en la base de datos aún, registramos el log de servidor
          console.warn("[Contact API] Supabase insert warning:", dbError.message);
        }
      } catch (dbErr) {
        console.warn("[Contact API] Supabase connection error:", dbErr);
      }
    }

    // 5. Envío de correo mediante Resend si está configurado
    const emailResult = await sendContactNotificationEmail(sanitizedData);
    if (emailResult.sent) {
      emailSent = true;
    }

    // Si ni Supabase ni Resend tienen claves configuradas en este entorno (fase inicial de desarrollo)
    if (!supabase && !process.env.RESEND_API_KEY) {
      devMode = true;
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Gracias. Hemos recibido tu solicitud y nos pondremos en contacto contigo a la mayor brevedad.",
        isDevMode: devMode,
        persisted: supabasePersisted,
        emailSent: emailSent,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Se ha producido un error inesperado al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
      },
      { status: 500 }
    );
  }
}
