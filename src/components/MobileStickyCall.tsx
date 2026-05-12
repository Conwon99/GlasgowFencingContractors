import { CANONICAL_PHONE, CANONICAL_PHONE_TEL } from "@/utils/phoneTracking";

/** Bottom fixed click-to-call bar — mobile only (Prompt 3 / technical SEO). */
export const MobileStickyCall = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[1000] pb-[env(safe-area-inset-bottom)] bg-[#787e59]/95 backdrop-blur-sm border-t border-white/20 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]">
      <a
        href={`tel:${CANONICAL_PHONE_TEL}`}
        className="flex items-center justify-center gap-3 min-h-[52px] text-white font-bold text-lg tracking-wide"
      >
        <span aria-hidden="true">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
        Call now · {CANONICAL_PHONE}
      </a>
    </div>
  );
};
