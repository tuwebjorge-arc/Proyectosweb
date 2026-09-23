import { ContactFormData } from "@/types";

export async function sendContactNotificationEmail(data: ContactFormData) {
  // Placeholder para la integración con Resend
  console.log("Mock email sent for:", data.email);
  return { success: true, id: "mock-id" };
}
