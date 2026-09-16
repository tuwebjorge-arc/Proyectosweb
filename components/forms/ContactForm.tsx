"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ContactFormData, ContactResponse } from "@/types";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: "",
    privacyAccepted: false,
    _website_url: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Por favor, introduce tu nombre.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Introduce una dirección de correo válida.";
    }

    if (!formData.projectType) {
      errors.projectType = "Selecciona el tipo de proyecto.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Por favor, describe brevemente tu proyecto (mínimo 10 caracteres).";
    }

    if (!formData.privacyAccepted) {
      errors.privacyAccepted = "Debes aceptar la política de privacidad para continuar.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Limpiar error del campo editado
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");
    setServerMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ContactResponse = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setServerMessage(data.message);
        // Reset form
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          projectType: "",
          location: "",
          message: "",
          privacyAccepted: false,
          _website_url: "",
        });
      } else {
        setStatus("error");
        setServerMessage(
          data.error || "No se ha podido enviar la solicitud. Por favor, inténtalo de nuevo."
        );
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Error de conexión con el servidor. Por favor, revisa tu conexión e inténtalo nuevamente."
      );
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 border border-brand-border shadow-sm">
      {status === "success" ? (
        <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
          <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-light text-brand-charcoal">
            Solicitud enviada correctamente
          </h3>
          <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
            {serverMessage ||
              "Gracias. Hemos recibido tu solicitud y nos pondremos en contacto contigo a la mayor brevedad posible para valorar tu proyecto."}
          </p>
          <div className="pt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStatus("idle")}
            >
              Enviar otra consulta
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot anti-spam invisible */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="_website_url">No rellenar este campo</label>
            <input
              type="text"
              id="_website_url"
              name="_website_url"
              tabIndex={-1}
              autoComplete="off"
              value={formData._website_url}
              onChange={handleChange}
            />
          </div>

          {status === "error" && serverMessage && (
            <div
              role="alert"
              className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Ha ocurrido un problema al enviar</p>
                <p className="text-xs text-red-700 mt-0.5">{serverMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
              >
                Nombre <span className="text-brand-wood">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Carlos"
                className="w-full bg-brand-cream/50 border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-stone-400 focus:bg-white focus:border-brand-wood focus:outline-none transition-colors"
              />
              {fieldErrors.name && (
                <p className="text-xs text-red-600 mt-1">{fieldErrors.name}</p>
              )}
            </div>

            {/* Apellidos */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
              >
                Apellidos <span className="text-stone-400 text-[10px] font-normal">(Opcional)</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Ej. Martínez"
                className="w-full bg-brand-cream/50 border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-stone-400 focus:bg-white focus:border-brand-wood focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
              >
                Email de contacto <span className="text-brand-wood">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nombre@ejemplo.com"
                className="w-full bg-brand-cream/50 border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-stone-400 focus:bg-white focus:border-brand-wood focus:outline-none transition-colors"
              />
              {fieldErrors.email && (
                <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
              >
                Teléfono <span className="text-stone-400 text-[10px] font-normal">(Opcional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 600 000 000"
                className="w-full bg-brand-cream/50 border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-stone-400 focus:bg-white focus:border-brand-wood focus:outline-none transition-colors"
              />
              {fieldErrors.phone && (
                <p className="text-xs text-red-600 mt-1">{fieldErrors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Tipo de proyecto */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
              >
                Tipo de proyecto <span className="text-brand-wood">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-brand-cream/50 border border-brand-border px-4 py-3 text-sm text-brand-charcoal focus:bg-white focus:border-brand-wood focus:outline-none transition-colors"
              >
                <option value="">Selecciona una opción</option>
                <option value="Carpintería a medida">Carpintería a medida</option>
                <option value="Reforma integral / parcial">Reforma integral / parcial</option>
                <option value="Cocina de diseño">Cocina de diseño</option>
                <option value="Mobiliario de baño">Mobiliario de baño</option>
                <option value="Revestimientos y panelados">Revestimientos y panelados</option>
                <option value="Mobiliario singular de autor">Mobiliario singular de autor</option>
                <option value="Otro proyecto especial">Otro proyecto especial</option>
              </select>
              {fieldErrors.projectType && (
                <p className="text-xs text-red-600 mt-1">
                  {fieldErrors.projectType}
                </p>
              )}
            </div>

            {/* Ubicación del proyecto */}
            <div>
              <label
                htmlFor="location"
                className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
              >
                Ubicación del inmueble <span className="text-stone-400 text-[10px] font-normal">(Ciudad o zona)</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ej. Madrid, Barcelona o municipio"
                className="w-full bg-brand-cream/50 border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-stone-400 focus:bg-white focus:border-brand-wood focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
            >
              Descripción del proyecto o requerimientos <span className="text-brand-wood">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos las características del espacio, dimensiones aproximadas, ideas de materiales, o plazos estimados..."
              className="w-full bg-brand-cream/50 border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-stone-400 focus:bg-white focus:border-brand-wood focus:outline-none transition-colors resize-y"
            />
            {fieldErrors.message && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.message}</p>
            )}
          </div>

          {/* Checkbox de privacidad */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer text-xs text-stone-600 select-none">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded-none border-brand-border text-brand-wood focus:ring-brand-wood"
              />
              <span>
                He leído y acepto la{" "}
                <Link
                  href="/privacidad"
                  target="_blank"
                  className="text-brand-wood underline hover:text-brand-wood-dark"
                >
                  Política de Privacidad
                </Link>{" "}
                para el tratamiento de mis datos con la finalidad exclusiva de responder a mi consulta.
              </span>
            </label>
            {fieldErrors.privacyAccepted && (
              <p className="text-xs text-red-600 mt-1">
                {fieldErrors.privacyAccepted}
              </p>
            )}
          </div>

          {/* Botón de envío */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "loading"}
              className="w-full sm:w-auto min-w-[220px] gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Enviando solicitud...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Solicitar presupuesto</span>
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
