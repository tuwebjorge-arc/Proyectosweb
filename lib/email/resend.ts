import { Resend } from "resend";
import { ContactFormData } from "@/types";
import { siteConfig } from "@/lib/config/site";

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.EMAIL_FROM || "AMW100 CARPENTRY <contacto@resend.dev>";
const contactEmail = process.env.CONTACT_EMAIL || siteConfig.business.email;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

/**
 * Envía un correo de notificación de contacto mediante Resend si la API key está configurada.
 * Si no está configurada, registra el intento de forma segura para desarrollo.
 */
export async function sendContactNotificationEmail(data: ContactFormData) {
  if (!resend) {
    // Modo desarrollo / sin configurar
    return {
      sent: false,
      reason: "RESEND_API_KEY_NOT_CONFIGURED",
    };
  }

  if (!contactEmail) {
    return {
      sent: false,
      reason: "CONTACT_EMAIL_NOT_CONFIGURED",
    };
  }

  try {
    const { data: responseData, error } = await resend.emails.send({
      from: emailFrom,
      to: [contactEmail],
      replyTo: data.email,
      subject: `Nueva solicitud de proyecto: ${data.projectType} — ${data.name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1C1917; background-color: #FAF8F5; border-radius: 8px;">
          <h2 style="color: #8C5835; margin-bottom: 20px; font-size: 22px; border-bottom: 2px solid #E5DED5; padding-bottom: 12px;">
            AMW100 CARPENTRY — Nueva Solicitud de Contacto
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="border-bottom: 1px solid #E5DED5;">
              <td style="padding: 10px 0; font-weight: bold; width: 140px; color: #78716C;">Nombre:</td>
              <td style="padding: 10px 0;">${escapeHtml(data.name)} ${escapeHtml(data.lastName || "")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5DED5;">
              <td style="padding: 10px 0; font-weight: bold; color: #78716C;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #8C5835; text-decoration: none;">${escapeHtml(data.email)}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #E5DED5;">
              <td style="padding: 10px 0; font-weight: bold; color: #78716C;">Teléfono:</td>
              <td style="padding: 10px 0;">${escapeHtml(data.phone || "No facilitado")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5DED5;">
              <td style="padding: 10px 0; font-weight: bold; color: #78716C;">Tipo de proyecto:</td>
              <td style="padding: 10px 0;"><strong>${escapeHtml(data.projectType)}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #E5DED5;">
              <td style="padding: 10px 0; font-weight: bold; color: #78716C;">Ubicación:</td>
              <td style="padding: 10px 0;">${escapeHtml(data.location || "No facilitada")}</td>
            </tr>
          </table>

          <div style="background-color: #FFFFFF; padding: 18px; border-radius: 6px; border-left: 4px solid #8C5835; margin-bottom: 24px;">
            <h4 style="margin: 0 0 8px 0; color: #1C1917; font-size: 15px;">Mensaje / Descripción del proyecto:</h4>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; color: #44403C;">${escapeHtml(data.message)}</p>
          </div>

          <p style="font-size: 12px; color: #A8A29E; text-align: center; margin-top: 30px;">
            Este correo ha sido generado automáticamente por el formulario web de AMW100 CARPENTRY.
          </p>
        </div>
      `,
    });

    if (error) {
      return { sent: false, error: error.message };
    }

    return { sent: true, id: responseData?.id };
  } catch (err) {
    return {
      sent: false,
      error: err instanceof Error ? err.message : "UNKNOWN_EMAIL_ERROR",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
