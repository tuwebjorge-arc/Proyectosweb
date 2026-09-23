"use client";

import React, { useState } from "react";
import { ContactFormData } from "@/types";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageContext";

export function ContactForm() {
  const { t } = useLang();
  const f = t.form;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = f.errors.name;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = f.errors.email;
    }

    if (!formData.projectType) {
      errors.projectType = f.errors.projectType;
    }

    if (!formData.message.trim()) {
      errors.message = f.errors.message;
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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

    // Simulate API call for presentation
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
          <div className="inline-flex p-3 rounded-full bg-brand-wood/20 text-brand-wood">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-serif text-white">{f.successTitle}</h3>
          <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed">{f.successBody}</p>
          <div className="pt-6">
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition-colors uppercase text-sm tracking-wider"
            >
              {f.sendAnother}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                {f.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder={f.namePlaceholder}
              />
              {fieldErrors.name && <p className="text-xs text-red-400 mt-1">{fieldErrors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                {f.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
              {fieldErrors.email && <p className="text-xs text-red-400 mt-1">{fieldErrors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                {f.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="+34..."
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                {f.projectTypeLabel}
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-brand-black border-b border-white/20 py-3 text-white focus:border-white focus:outline-none transition-colors appearance-none"
              >
                <option value="" disabled className="text-white/30">
                  {f.projectTypePlaceholder}
                </option>
                {f.projectTypes.map((type: string) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {fieldErrors.projectType && (
                <p className="text-xs text-red-400 mt-1">{fieldErrors.projectType}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/70 mb-2">
              {f.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors resize-y"
              placeholder={f.messagePlaceholder}
            />
            {fieldErrors.message && (
              <p className="text-xs text-red-400 mt-1">{fieldErrors.message}</p>
            )}
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-10 py-4 bg-white text-brand-black font-medium hover:bg-brand-ivory transition-colors uppercase text-sm tracking-wider disabled:opacity-70 flex items-center justify-center gap-3"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{f.sending}</span>
                </>
              ) : (
                <span>{f.submit}</span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
