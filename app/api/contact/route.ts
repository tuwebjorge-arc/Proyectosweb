import { NextRequest, NextResponse } from "next/server";
import { ContactFormData } from "@/types";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { sendContactNotificationEmail } from "@/lib/email/resend";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;

    // Validación de campos obligatorios
    const fieldErrors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      fieldErrors.name = "Por favor, introduce tu nombre (mínimo 2 caracteres).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      fieldErrors.email = "Por favor, introduce una dirección de correo electrónico válida.";
    }

    if (!body.projectType || body.projectType.trim() === "") {
      fieldErrors.projectType = "Por favor, selecciona el tipo de proyecto.";
    }

    if (!body.message || body.message.trim().length < 10) {
      fieldErrors.message = "Por favor, describe brevemente tu proyecto (mínimo 10 caracteres).";
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

    const sanitizedData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone ? body.phone.trim() : undefined,
      projectType: body.projectType.trim(),
      message: body.message.trim(),
    };

    let supabasePersisted = false;
    let emailSent = false;
    let devMode = false;

    const supabase = getSupabaseServerClient();
    if (supabase) {
      try {
        const { error: dbError } = await supabase.from("contact_requests").insert([
          {
            name: sanitizedData.name,
            email: sanitizedData.email,
            phone: sanitizedData.phone || null,
            project_type: sanitizedData.projectType,
            message: sanitizedData.message,
            status: "NEW",
          },
        ]);

        if (!dbError) {
          supabasePersisted = true;
        } else {
          console.warn("[Contact API] Supabase insert warning:", dbError.message);
        }
      } catch (dbErr) {
        console.warn("[Contact API] Supabase connection error:", dbErr);
      }
    }

    const emailResult = await sendContactNotificationEmail(sanitizedData);
    if (emailResult.success) {
      emailSent = true;
    }

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
