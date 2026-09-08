import CornerMarks from "../CornerMarks";
import Reveal from "../Reveal";
import { playStoreUrl } from "../../lib/content";

export default function PricingSection() {
  return (
    <section id="pricing" className="border-b border-accent-light/18 px-6 py-[84px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-3 font-mono text-[11px] tracking-[0.20em] text-accent-light">
          PRICING
        </div>
        <h2 className="mb-4 text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.02em] text-heading">
          Student pricing, student payments
        </h2>
        <p className="mb-12 max-w-[56ch] text-[17px] leading-relaxed text-muted">
          Pay with the money you already have on your phone — MTN Mobile
          Money or Orange Money. No card, no bank visit, no minimum.
        </p>

        <Reveal
          stagger
          className="grid items-stretch gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
        >
          <div
            className="relative flex flex-col px-[30px] pt-[34px] pb-9 transition-transform duration-[260ms] hover:-translate-y-1"
            style={{ border: "1px solid rgba(125,211,252,0.26)" }}
          >
            <CornerMarks color="#38BDF8" />
            <div className="font-mono text-[10px] tracking-[0.16em] text-accent-light">
              PLAN 01
            </div>
            <h3 className="mt-4 text-[22px] font-bold text-heading">Monthly</h3>
            <div className="mt-[18px] mb-1.5 flex items-baseline gap-2">
              <span className="text-[44px] font-extrabold tracking-[-0.03em] text-heading">
                500
              </span>
              <span className="text-[15px] font-semibold text-accent-light">
                XAF / month
              </span>
            </div>
            <p className="mt-2.5 mb-[26px] text-[14.5px] leading-relaxed text-muted-2">
              Full access, renewed month to month. Stop any time — nothing
              auto-charges without you.
            </p>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto py-[13px] text-center text-[15px] font-semibold text-accent-light transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
              style={{ border: "1px solid rgba(125,211,252,0.34)" }}
            >
              Choose monthly
            </a>
          </div>

          <div
            className="relative flex flex-col px-[30px] pt-[34px] pb-9 transition-transform duration-[260ms] hover:-translate-y-1"
            style={{
              border: "1px solid #38BDF8",
              backgroundImage:
                "linear-gradient(rgba(56,189,248,.07),rgba(56,189,248,.02))",
            }}
          >
            <CornerMarks color="#38BDF8" />
            <div className="flex items-center justify-between gap-3">
              <div className="font-mono text-[10px] tracking-[0.16em] text-accent-light">
                PLAN 02
              </div>
              <div className="bg-accent px-[9px] py-1 font-mono text-[10px] font-bold tracking-[0.10em] text-navy">
                BEST VALUE
              </div>
            </div>
            <h3 className="mt-4 text-[22px] font-bold text-heading">Yearly</h3>
            <div className="mt-[18px] mb-1.5 flex items-baseline gap-2">
              <span className="text-[44px] font-extrabold tracking-[-0.03em] text-heading">
                3,500
              </span>
              <span className="text-[15px] font-semibold text-accent-light">
                XAF / year
              </span>
            </div>
            <p className="mt-2.5 mb-[26px] text-[14.5px] leading-relaxed text-muted">
              Roughly 292 XAF a month — you save 2,500 XAF over paying
              monthly. Best if you are here for the full academic year.
            </p>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto border border-blue bg-blue py-[13px] text-center text-[15px] font-semibold text-white transition-colors hover:border-blue-dark hover:bg-blue-dark"
            >
              Choose yearly
            </a>
          </div>

          <div
            className="relative flex flex-col px-[30px] pt-[34px] pb-9"
            style={{ border: "1px solid rgba(125,211,252,0.20)" }}
          >
            <div className="font-mono text-[10px] tracking-[0.16em] text-accent-light">
              PAYMENT
            </div>
            <h3 className="mt-4 text-[22px] font-bold text-heading">
              Mobile money
            </h3>
            <p className="mt-3.5 mb-5 text-[14.5px] leading-relaxed text-muted-2">
              Checkout runs on the mobile money you already use. Approve the
              prompt on your phone and your plan activates immediately.
            </p>
            <div className="mb-5 flex flex-col gap-px bg-accent-light/16">
              <div className="bg-navy px-3.5 py-3 text-sm font-semibold text-ink">
                MTN Mobile Money
              </div>
              <div className="bg-navy px-3.5 py-3 text-sm font-semibold text-ink">
                Orange Money
              </div>
            </div>
            <p className="mt-auto font-mono text-[10.5px] leading-[1.7] tracking-[0.08em] text-muted-3">
              PROCESSED BY FAPSHI. GOSTUDY NEVER SEES OR STORES YOUR MOBILE
              MONEY PIN.
            </p>
          </div>
        </Reveal>

        <p className="mt-[22px] font-mono text-[10.5px] tracking-[0.10em] text-muted-3">
          PRICES SHOWN IN XAF AND MAY BE ADJUSTED — THE APP ALWAYS SHOWS THE
          CURRENT RATE AT CHECKOUT.
        </p>
      </div>
    </section>
  );
}
