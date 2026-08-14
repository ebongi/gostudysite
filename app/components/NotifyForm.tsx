"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("error");
      return;
    }

    // TODO: wire this up to a real subscription endpoint (an API route or a
    // mailing-list provider) once one exists — this only simulates success.
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-sm items-center justify-center gap-2 rounded-full border border-brand-green-tint bg-brand-green-tint px-5 py-3 text-sm font-semibold text-brand-green">
        <CheckCircle2 size={18} />
        You&rsquo;re on the list — we&rsquo;ll email you at launch.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
    >
      <div className="flex-1 text-left">
        <label htmlFor="notify-email" className="sr-only">
          Email address
        </label>
        <div className="relative">
          <Mail
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-subtle"
          />
          <input
            id="notify-email"
            type="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@example.com"
            aria-invalid={status === "error"}
            className={`w-full rounded-full border bg-surface py-3.5 pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-brand-blue ${
              status === "error" ? "border-brand-red" : "border-line"
            }`}
          />
        </div>
        {status === "error" && (
          <p className="mt-2 pl-4 text-xs font-medium text-brand-red">
            Enter a valid email address.
          </p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover"
      >
        Notify me
      </button>
    </form>
  );
}
