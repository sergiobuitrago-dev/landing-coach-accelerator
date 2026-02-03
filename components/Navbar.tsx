const CHECKOUT_URL = "https://whop.com/checkout/plan_PGgPby3Msd1w8";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-stone-800/60 bg-black/40 px-4 py-2 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <img
              src="/images/IsotipoNoBG.svg"
              alt="Coach Factory"
              className="h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary cta-primary--compact">
            obtener acceso
          </a>
        </div>
      </div>
    </header>
  );
}
