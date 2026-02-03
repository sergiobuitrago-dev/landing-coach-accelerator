const CHECKOUT_URL = "https://whop.com/checkout/plan_PGgPby3Msd1w8";

export default function CTA() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-black border-t border-stone-900">
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 text-center text-stone-200 text-[0.7rem] sm:text-xs">
          <div className="flex flex-wrap items-center justify-center gap-2 text-stone-200/80">
            <a
              href="#"
              className="hover:text-stone-100 transition-colors">
              Privacy Policy
            </a>
            <span className="text-stone-400">|</span>
            <a
              href="#"
              className="hover:text-stone-100 transition-colors">
              Terms & Conditions
            </a>
          </div>
          <p className="mt-3 mb-3 leading-relaxed text-stone-200/70 max-w-3xl mx-auto">
            This site is not a part of the Facebook website or
            Facebook Inc. Additionally, this site is NOT endorsed by
            Facebook in any way. FACEBOOK is a trademark of FACEBOOK,
            Inc.
          </p>
          <p className="mt-2 mb-2 text-stone-200/70">
            ©2026 Coach Factory. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
