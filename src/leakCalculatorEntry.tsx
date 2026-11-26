import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DiagnosticForm } from './components/DiagnosticForm';
import { SITE_META } from './data/siteContent';
import './index.css';

function LeakCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2.5 text-base font-bold tracking-tight text-ink">
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
          <div className="flex items-center gap-6">
            <a
              href="/automated-operational-reporting"
              className="hidden text-sm font-medium text-slate-700 hover:text-ink sm:inline"
            >
              Operational Reporting
            </a>
            <a href="/" className="text-sm font-semibold text-accent hover:text-accentHover">
              Back to Home
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">
              Operational Cost Check
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Calculate the annual cost of repetitive admin in your business
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Complete the four questions below to estimate your annual payroll leak and request a
              20 minute discovery call with Craig Reeves.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <DiagnosticForm />
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl justify-between px-4 text-xs text-slate-600 sm:px-6 lg:px-8">
          <p>© 2026 {SITE_META.brandName}. {SITE_META.locationNote}</p>
          <a href="/" className="font-semibold text-ink hover:text-accent">
            Home
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LeakCalculatorPage />
  </StrictMode>
);
