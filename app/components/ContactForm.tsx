"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

// FormSubmit needs no signup — it emails submissions to this address. The
// destination is necessarily visible in the page source; FormSubmit sends a
// one-time confirmation link here the first time it's really used.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/sumeebong7@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-brand-blue";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 rounded-2xl border border-brand-green-tint bg-brand-green-tint px-5 py-6 text-center text-sm font-semibold text-brand-green">
        <CheckCircle2 size={18} />
        Message sent — we&rsquo;ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input type="hidden" name="_subject" value="New message from gostudy.app" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="Your email"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="sr-only">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder="Subject"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Message"
          className={`resize-none ${inputClasses}`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-brand-red">
          Something went wrong — please try again, or message us on
          WhatsApp instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover disabled:opacity-60"
      >
        {status === "submitting" ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
