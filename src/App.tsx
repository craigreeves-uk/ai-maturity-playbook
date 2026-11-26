import { Fragment, useState } from 'react';
import { DiagnosticForm } from './components/DiagnosticForm';
import { ThemeToggle } from './components/ThemeToggle';
import {
  COMMERCIAL_TERMS,
  DELIVERY_PRINCIPLES,
  FAQ_ITEMS,
  FOUNDER_BIO,
  HERO_CONTENT,
  OFFER_PILLARS,
  PAIN_POINTS,
  PIPELINE_STAGES,
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

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-surface/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-2.5 text-base font-bold tracking-tight text-ink dark:text-white"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 6h7l3 4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ink dark:text-slate-200"
              />
              <path
                d="M3 18h7l3-4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ink dark:text-slate-200"
              />
              <path
                d="M3 12h15"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                className="text-accent dark:text-orange-500"
              />
              <path
                d="M14.5 7.5L19.5 12l-5 4.5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent dark:text-orange-500"
              />
            </svg>
            <span>{SITE_META.brandName}</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-5 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-700 hover:text-ink dark:text-slate-300 dark:hover:text-white"
            >
              How It Works
            </a>
            <a
              href="/automated-operational-reporting"
              className="text-sm font-medium text-slate-700 hover:text-ink dark:text-slate-300 dark:hover:text-white"
            >
              Operational Reporting
            </a>
            <a
              href="/leak-calculator"
              className="text-sm font-medium text-slate-700 hover:text-ink dark:text-slate-300 dark:hover:text-white"
            >
              Admin Calculator
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-700 hover:text-ink dark:text-slate-300 dark:hover:text-white"
            >
              About
            </a>
            <ThemeToggle />
            <a
              href="#book-diagnostic"
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accentHover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              {HERO_CONTENT.primaryCta}
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-ink dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900 md:hidden"
          >
            <div className="flex flex-col gap-3">
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                How It Works
              </a>
              <a
                href="/automated-operational-reporting"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Operational Reporting
              </a>
              <a
                href="/leak-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Admin Calculator
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                About
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
        <section id="top" className="border-b border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-900 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                  {HERO_CONTENT.eyebrow}
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-5xl sm:leading-[1.12]">
                  {HERO_CONTENT.headline}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
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
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-ink hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
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
                  className="w-full rounded-xl border border-slate-200 bg-surface shadow-sm dark:border-slate-700"
                />
              </div>
            </div>

            <ul
              aria-label="Key engagement terms"
              className="mt-12 grid grid-cols-1 gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:grid-cols-2 lg:grid-cols-4"
            >
              {HERO_CONTENT.proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-ink dark:text-slate-200">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="shrink-0 text-accent dark:text-orange-400"
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

        <section id="cost-of-inaction" className="border-b border-slate-200 bg-surface py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                The Cost of Inaction
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                What manual admin and disconnected spreadsheets cost your business every month
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Most operations teams do not have a software shortage. They have a plumbing problem
                that quietly drains margin every single week.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {PAIN_POINTS.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div>
                    <h3 className="text-lg font-bold text-ink dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                  <p className="mt-6 border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wide text-orange-800 dark:border-slate-800 dark:text-orange-400">
                    {item.costEstimate}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="core-offer" className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                The Core Offer
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                Fixed scope operational reporting and practical AI sprints
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
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
                    className="rounded-lg border border-slate-200 bg-surface p-6 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <h3 className="text-lg font-bold text-ink dark:text-white">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {pillar.description}
                    </p>
                    {pillar.href && pillar.linkLabel && (
                      <a
                        href={pillar.href}
                        className="mt-4 inline-block text-sm font-semibold text-accent underline hover:text-accentHover dark:text-orange-400 dark:hover:text-orange-300"
                      >
                        {pillar.linkLabel}
                      </a>
                    )}
                  </article>
                ))}
              </div>

              <aside
                aria-label="Commercial terms summary"
                className="rounded-lg border-2 border-ink bg-ink p-8 text-white dark:border-orange-500/60 dark:bg-slate-950 lg:col-span-5"
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

        <section id="how-it-works" className="border-b border-slate-200 bg-surface py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                How It Works
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                Three clear steps from fragmented data to automated operations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Built around busy directors and lean teams. Your staff spend less than three hours
                total on project calls across the entire four week sprint.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {PROCESS_STEPS.map((step) => (
                <article
                  key={step.stepNumber}
                  className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                      {step.stepNumber}
                    </p>
                    <span className="rounded bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-900 dark:bg-orange-950/60 dark:text-orange-300">
                      {step.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-ink dark:text-white">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {step.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-700 dark:border-slate-800 dark:text-slate-300">
                    {step.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-accent dark:text-orange-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <figure
              aria-labelledby="pipeline-heading"
              className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                    Typical Architecture
                  </p>
                  <h3 id="pipeline-heading" className="mt-1 text-xl font-bold text-ink dark:text-white">
                    How a live reporting and AI pipeline moves your data safely
                  </h3>
                </div>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Hosted inside your own UK or EU cloud account
                </p>
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
                {PIPELINE_STAGES.map((stage, index) => (
                  <Fragment key={stage.title}>
                    <div
                      className={
                        stage.highlighted
                          ? 'flex-1 rounded-lg border-2 border-accent bg-orange-50/40 p-5 dark:border-orange-500 dark:bg-orange-950/25'
                          : 'flex-1 rounded-lg border border-slate-200 bg-surface p-5 dark:border-slate-700 dark:bg-slate-800/70'
                      }
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                        {stage.stageLabel}
                      </p>
                      <h4 className="mt-1 text-base font-bold text-ink dark:text-white">
                        {stage.title}
                      </h4>
                      <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                        {stage.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-orange-400"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {index < PIPELINE_STAGES.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="flex items-center justify-center py-1 text-accent dark:text-orange-400 lg:px-1"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="rotate-90 lg:rotate-0"
                        >
                          <path
                            d="M5 12h14m0 0l-5-5m5 5l-5 5"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>

              <figcaption className="mt-4 text-xs text-slate-600 dark:text-slate-400">
                Source systems feed cleaned records into your private cloud reporting layer, with
                manager approval before any automated AI output reaches customers or ledgers.
              </figcaption>
            </figure>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-ink dark:text-white">
                Non negotiable engineering principles on every sprint
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {DELIVERY_PRINCIPLES.map((principle) => (
                  <article
                    key={principle.title}
                    className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <h4 className="text-sm font-bold text-ink dark:text-white">
                      {principle.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                  {FOUNDER_BIO.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                  {FOUNDER_BIO.heading}
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {FOUNDER_BIO.role}
                </p>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {FOUNDER_BIO.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-4 lg:col-span-6">
                {FOUNDER_BIO.credentials.map((credential) => (
                  <article
                    key={credential.title}
                    className="rounded-lg border border-slate-200 bg-surface p-5 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <h3 className="text-base font-bold text-ink dark:text-white">
                      {credential.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {credential.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-slate-200 bg-surface py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                Practical FAQ
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                Commercial and security answers before we speak
              </h2>
            </div>

            <div className="mt-10 divide-y divide-slate-200 rounded-lg border-y border-slate-200 bg-white px-6 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
              {FAQ_ITEMS.map((item) => (
                <article key={item.question} className="py-6">
                  <h3 className="text-lg font-bold text-ink dark:text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="book-diagnostic" className="bg-white py-16 dark:bg-slate-900 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
                Start Here
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                {HERO_CONTENT.primaryCta}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Complete the short readiness check below to share your current setup and request a
                call slot. No sales script, no obligation, and you will leave the call with a clear
                recommendation regardless of whether we work together.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-slate-200 bg-surface p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-10">
              <DiagnosticForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-surface py-10 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-semibold text-ink dark:text-white">{SITE_META.brandName}</p>
            <p className="mt-1 text-xs">
              © 2026 {SITE_META.brandName}. {SITE_META.locationNote}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs">
            <a href="/" className="hover:text-ink dark:hover:text-white">
              Home
            </a>
            <a href="/automated-operational-reporting" className="hover:text-ink dark:hover:text-white">
              Automated Operational Reporting
            </a>
            <a href="/leak-calculator" className="hover:text-ink dark:hover:text-white">
              Admin Cost Calculator
            </a>
            <span>Zero tracking cookies.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
