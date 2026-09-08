import Image from "next/image";
import Link from "next/link";
import { playLabel, supportEmail, whatsappUrl } from "../lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-accent-light/18 px-6 pt-14 pb-10">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
        <div>
          <div className="mb-3.5 flex items-end">
            <Image
              src="/logo-mark.png"
              alt="G"
              width={26}
              height={26}
              className="-mb-[3px] block h-[26px] w-auto"
            />
            <span className="ml-px text-xl leading-none font-bold tracking-[-0.015em] text-heading">
              oStudy
            </span>
          </div>
          <p className="max-w-[30ch] text-sm leading-relaxed text-muted-2">
            Your Academic Companion. Built for University of Buea students.
          </p>
        </div>

        <div>
          <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-accent-light">
            PRODUCT
          </div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            <Link href="/#features" className="text-accent-light hover:text-accent">
              Features
            </Link>
            <Link href="/#pricing" className="text-accent-light hover:text-accent">
              Pricing
            </Link>
            <Link href="/#support" className="text-accent-light hover:text-accent">
              Support
            </Link>
            <Link href="/install" className="text-accent-light hover:text-accent">
              Direct APK download
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-accent-light">
            LEGAL
          </div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            <Link href="/privacy" className="text-accent-light hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-accent-light hover:text-accent">
              Terms of Service
            </Link>
            <Link href="/delete-account" className="text-accent-light hover:text-accent">
              Delete My Account
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-accent-light">
            CONTACT
          </div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            <a
              href={`mailto:${supportEmail}`}
              className="text-accent-light break-all hover:text-accent"
            >
              {supportEmail}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent"
            >
              WhatsApp support
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-11 flex max-w-[1160px] flex-wrap justify-between gap-3 border-t border-accent-light/12 pt-[22px] font-mono text-[10.5px] tracking-[0.10em] text-muted-3">
        <span>© {new Date().getFullYear()} GOSTUDY. ALL RIGHTS RESERVED.</span>
        <span>{playLabel}</span>
      </div>
    </footer>
  );
}
