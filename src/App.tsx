import { useState } from 'react';
import { DiagnosticForm } from './components/DiagnosticForm';
import {
  COMMERCIAL_TERMS,
  FAQ_ITEMS,
  HERO_CONTENT,
  OFFER_PILLARS,
  PAIN_POINTS,
  PROCESS_STEPS,
  SITE_META,
} from './data/siteContent';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-2.5 text-base font-bold tracking-tight text-ink"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 6h7l3 4"
                stroke="#0F172A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18h7l3-4"
                stroke="#0F172A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M3 12h15" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" />
              <path
                d="M14.5 7.5L19.5 12l-5 4.5"
                stroke="#C2410C"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{SITE_META.brandName}</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
            <a href="#cost-of-inaction" className="text-sm font-medium text-slate-700 hover:text-ink">
              The Cost
            </a>
            <a
              href="/automated-operational-reporting"
              className="text-sm font-medium text-slate-700 hover:text-ink"
            >
              Operational Reporting
            </a>
            <a
              href="/leak-calculator"
              className="text-sm font-medium text-slate-700 hover:text-ink"
            >
              Admin Calculator
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-700 hover:text-ink">
              FAQ
            </a>
            <a
              href="#book-diagnostic"
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accentHover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              {HERO_CONTENT.primaryCta}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-ink md:hidden"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              <a
                href="#cost-of-inaction"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700"
              >
                The Cost
              </a>
              <a
                href="/automated-operational-reporting"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700"
              >
                Operational Reporting
              </a>
              <a
                href="/leak-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700"
              >
                Admin Calculator
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700"
              >
                FAQ
              </a>
              <a
                href="#book-diagnostic"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 rounded-md bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                {HERO_CONTENT.primaryCta}
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" className="flex-1">
        <section id="top" className="border-b border-slate-200 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  {HERO_CONTENT.eyebrow}
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl sm:leading-[1.12]">
                  {HERO_CONTENT.headline}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                  {HERO_CONTENT.subheadline}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href="#book-diagnostic"
                    className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-accentHover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    {HERO_CONTENT.primaryCta}
                  </a>
                  <a
                    href="/leak-calculator"
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-ink hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  >
                    {HERO_CONTENT.calculatorCta}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <img
                  src="/ai-maturity-roadmap.svg"
                  alt={HERO_CONTENT.roadmapAlt}
                  width={560}
                  height={380}
                  className="w-full rounded-xl border border-slate-200 bg-surface shadow-sm"
                />
              </div>
            </div>

            <ul
              aria-label="Key engagement terms"
              className="mt-12 grid grid-cols-1 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {HERO_CONTENT.proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="shrink-0 text-accent"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cost-of-inaction" className="border-b border-slate-200 bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                The Cost of Inaction
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                What manual admin and disconnected spreadsheets cost your business every month
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Most operations teams do not have a software shortage. They have a plumbing problem
                that quietly drains margin every single week.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {PAIN_POINTS.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {item.description}
                    </p>
                  </div>
                  <p className="mt-6 border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wide text-orange-800">
                    {item.costEstimate}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="core-offer" className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">The Core Offer</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                Fixed scope operational reporting and practical AI sprints
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                No open ended day rates, no six month strategy decks, and no bloated software
                licences. One fixed scope sprint designed to fix your biggest operational
                bottleneck and hand your team a system they own outright.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              <div className="space-y-6 lg:col-span-7">
                {OFFER_PILLARS.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-lg border border-slate-200 bg-surface p-6"
                  >
                    <h3 className="text-lg font-bold text-ink">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {pillar.description}
                    </p>
                    {pillar.href && pillar.linkLabel && (
                      <a
                        href={pillar.href}
                        className="mt-4 inline-block text-sm font-semibold text-accent underline hover:text-accentHover"
                      >
                        {pillar.linkLabel}
                      </a>
                    )}
                  </article>
                ))}
              </div>

              <aside
                aria-label="Commercial terms summary"
                className="rounded-lg border-2 border-ink bg-ink p-8 text-white lg:col-span-5"
              >
                <h3 className="text-xl font-bold">Fixed Scope Commercial Terms</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200">
                  {COMMERCIAL_TERMS.map((term) => (
                    <li key={term} className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-orange-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#book-diagnostic"
                  className="mt-8 block w-full rounded-md bg-orange-500 px-5 py-3 text-center text-sm font-bold text-slate-950 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-ink"
                >
                  {HERO_CONTENT.primaryCta}
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-b border-slate-200 bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">How It Works</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                Three clear steps from fragmented data to automated operations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Built around busy directors and lean teams. Your staff spend less than three hours
                total on project calls across the entire month.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {PROCESS_STEPS.map((step) => (
                <article
                  key={step.stepNumber}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">
                    {step.stepNumber}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                Practical FAQ
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                Commercial and security answers before we speak
              </h2>
            </div>

            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {FAQ_ITEMS.map((item) => (
                <article key={item.question} className="py-6">
                  <h3 className="text-lg font-bold text-ink">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="book-diagnostic" className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Start Here</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                {HERO_CONTENT.primaryCta}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Complete the short readiness check below to share your current setup and request a
                call slot. No sales script, no obligation, and you will leave the call with a clear
                recommendation regardless of whether we work together.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <DiagnosticForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-semibold text-ink">{SITE_META.brandName}</p>
            <p className="mt-1 text-xs">
              © 2026 {SITE_META.brandName}. {SITE_META.locationNote}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs">
            <a href="/" className="hover:text-ink">
              Home
            </a>
            <a href="/automated-operational-reporting" className="hover:text-ink">
              Automated Operational Reporting
            </a>
            <a href="/leak-calculator" className="hover:text-ink">
              Admin Cost Calculator
            </a>
            <span>Zero tracking cookies.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
