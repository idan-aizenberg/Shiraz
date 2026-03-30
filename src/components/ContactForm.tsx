"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { isValidEmail } from "@/lib/utils";
import type { Dictionary } from "@/i18n/types";

interface ContactFormProps {
  dict: Dictionary;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm({ dict }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const t = dict.contact.form;

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = t.errors.nameRequired;
    if (!email.trim()) {
      errs.email = t.errors.emailRequired;
    } else if (!isValidEmail(email)) {
      errs.email = t.errors.emailInvalid;
    }
    if (!message.trim()) errs.message = t.errors.messageRequired;
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!res.ok) throw new Error("Request failed");

      setIsSuccess(true);
    } catch {
      setServerError(t.errors.serverError);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({});
    setServerError("");
    setIsSuccess(false);
  }

  const inputClasses =
    "w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200";

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center py-12"
        >
          {/* Animated checkmark */}
          <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-6">
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.path
                d="M6 14L12 20L22 8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.svg>
          </div>
          <h3 className="font-heading text-2xl text-text mb-3">
            {t.successTitle}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            {t.successMessage}
          </p>
          <Button onClick={handleReset} variant="outline">
            {t.sendAnother}
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm text-muted mb-2"
            >
              {t.name}
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className={`${inputClasses} ${
                errors.name ? "border-red-400" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm text-muted mb-2"
            >
              {t.email}
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className={`${inputClasses} ${
                errors.email ? "border-red-400" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm text-muted mb-2"
            >
              {t.phone}
            </label>
            <input
              id="contact-phone"
              type="text"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.phonePlaceholder}
              className={inputClasses}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm text-muted mb-2"
            >
              {t.message}
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              rows={5}
              className={`${inputClasses} resize-none ${
                errors.message ? "border-red-400" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? t.sending : t.submit}
          </Button>

          {serverError && (
            <p className="text-red-500 text-sm mt-3">{serverError}</p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
