import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DiagnosticForm } from './components/DiagnosticForm';
import { ThemeToggle } from './components/ThemeToggle';
import { SITE_META } from './data/siteContent';
import './index.css';

function AutomatedReportingPage() {
  return (
    <div className="min-h-screen flex flex-col">
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

          <div className="flex items-center gap-4">
            <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
              <a
                href="/"
                className="text-sm font-medium text-slate-700 hover:text-ink dark:text-slate-300 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="/leak-calculator"
                className="text-sm font-medium text-slate-700 hover:text-ink dark:text-slate-300 dark:hover:text-white"
              >
                Admin Calculator
              </a>
              <a
                href="#book-reporting-call"
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accentHover"
              >
                Book an AI Operations Discovery Call
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-orange-400">
              UK Operational Data Engineering
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-5xl sm:leading-[1.12]">
              Automated Operational Reporting for UK Businesses
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Stop waiting until Friday afternoon to see Monday morning numbers. I connect your
              finance ledger, CRM, and warehouse or job management tools so Managing Directors and
              Operations Directors receive accurate daily margin, cash, and capacity figures
              automatically.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#book-reporting-call"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-accentHover"
              >
                Book an AI Operations Discovery Call
              </a>
              <a
                href="/leak-calculator"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-ink hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                Calculate the annual cost of repetitive admin in your business
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-surface py-16 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-3xl">
              What gets replaced inside four weeks
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-bold text-ink dark:text-white">
                  Manual CSV exports and VLOOKUP fixes
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Direct read only connectors pull live records from systems such as Xero, Sage,
                  HubSpot, Unleashed, or Cin7 into one clean reporting model overnight.
                </p>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-bold text-ink dark:text-white">
                  Conflicting figures across departments
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Sales, finance, and operations work from one agreed definition of gross margin,
                  overdue invoices, stock turn, and team utilisation every morning.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="book-reporting-call" className="bg-white py-16 dark:bg-slate-900 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-3xl">
                Book an AI Operations Discovery Call
              </h2>
              <p className="mt-3 text-base text-slate-700 dark:text-slate-300">
                Share the systems you use today and I will tell you plainly whether automated
                reporting will pay back inside 60 to 90 days.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-slate-200 bg-surface p-6 dark:border-slate-800 dark:bg-slate-950 sm:p-10">
              <DiagnosticForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-surface py-8 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 text-xs text-slate-600 dark:text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © 2026 {SITE_META.brandName}. {SITE_META.locationNote}
          </p>
          <a href="/" className="font-semibold text-ink hover:text-accent dark:text-white dark:hover:text-orange-400">
            Back to homepage
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AutomatedReportingPage />
  </StrictMode>
);
