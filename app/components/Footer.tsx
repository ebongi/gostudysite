import Link from "next/link";
import { GraduationCap } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/237682397481";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 md:grid-cols-4">
        <div className="space-y-3 sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-cta text-cta-foreground">
              <GraduationCap size={16} />
            </span>
            GO Study
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            A study app built for university students in Cameroon, starting
            at the University of Buea. English &amp; French supported.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Legal
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/privacy" className="hover:text-brand-blue">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand-blue">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Support
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/support" className="hover:text-brand-blue">
                Help &amp; Contact
              </Link>
            </li>
            <li>
              <Link href="/install" className="hover:text-brand-blue">
                How to Install
              </Link>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Your data
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            You can delete your account and all of your data at any time
            from within the app&rsquo;s settings.
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-subtle sm:px-8">
          &copy; {new Date().getFullYear()} GO Study. Made for students in
          Cameroon.
        </div>
      </div>
    </footer>
  );
}
