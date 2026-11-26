import { FormEvent, useState } from 'react';
import { SITE_META } from '../data/siteContent';

interface AssessmentFormState {
  bottleneck: string;
  weeklyHours: string;
  currentTools: string;
  name: string;
  email: string;
  company: string;
  callWindow: string;
}

const INITIAL_FORM_STATE: AssessmentFormState = {
  bottleneck: 'Manual spreadsheet reporting',
  weeklyHours: '10 to 20 hours per week',
  currentTools: '',
  name: '',
  email: '',
  company: '',
  callWindow: 'Morning, 9:00am to 12:00pm',
};

function getAnnualEstimate(weeklyHours: string): string {
  switch (weeklyHours) {
    case '5 to 10 hours per week':
      return '£9,000 to £18,000 in annual staff time';
    case '20 hours or more per week':
      return '£36,000 or more in annual staff time';
    default:
      return '£18,000 to £36,000 in annual staff time';
  }
}

export function DiagnosticForm() {
  const [formState, setFormState] = useState<AssessmentFormState>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.company.trim()) {
      setValidationError('Please enter your name, work email, and company name to continue.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      setValidationError('Please enter a valid work email address.');
      return;
    }

    setValidationError('');
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${SITE_META.email}?subject=${encodeURIComponent(
    `Diagnostic Call Request: ${formState.company || 'UK SME Enquiry'}`
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nCompany: ${formState.company}\nPrimary bottleneck: ${formState.bottleneck}\nWeekly hours lost: ${formState.weeklyHours}\nTools in use: ${formState.currentTools || 'Not specified'}\nPreferred call window: ${formState.callWindow}`
  )}`;

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="space-y-6">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="text-lg font-bold text-emerald-950">
            Diagnostic request prepared for {formState.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-emerald-900">
            Based on your estimate of{' '}
            <span className="font-semibold">{formState.weeklyHours}</span> spent on{' '}
            <span className="font-semibold lowercase">{formState.bottleneck}</span>, your business
            is likely losing{' '}
            <span className="font-semibold">{getAnnualEstimate(formState.weeklyHours)}</span> to
            avoidable manual admin.
          </p>
        </div>

        <p className="text-sm leading-relaxed text-slate-700">
          Click below to send your readiness summary straight to{' '}
          <span className="font-semibold text-ink">{SITE_META.brandName}</span> and confirm your
          preferred call slot ({formState.callWindow}).
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accentHover"
          >
            Send Summary and Confirm Call via Email
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-slate-50"
          >
            Edit Your Answers
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-ink">
          Part 1: Quick Operational Readiness Check
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="bottleneck" className="block text-sm font-semibold text-ink">
              Primary operational bottleneck
            </label>
            <select
              id="bottleneck"
              name="bottleneck"
              value={formState.bottleneck}
              onChange={(e) => setFormState({ ...formState, bottleneck: e.target.value })}
              className="mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="Manual spreadsheet reporting">Manual spreadsheet reporting</option>
              <option value="Slow quoting or order entry">Slow quoting or order entry</option>
              <option value="Disconnected CRM, finance, and stock data">
                Disconnected CRM, finance, and stock data
              </option>
              <option value="High volume inbox or document triage">
                High volume inbox or document triage
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="weeklyHours" className="block text-sm font-semibold text-ink">
              Weekly hours lost to manual data handling
            </label>
            <select
              id="weeklyHours"
              name="weeklyHours"
              value={formState.weeklyHours}
              onChange={(e) => setFormState({ ...formState, weeklyHours: e.target.value })}
              className="mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="5 to 10 hours per week">5 to 10 hours per week</option>
              <option value="10 to 20 hours per week">10 to 20 hours per week</option>
              <option value="20 hours or more per week">20 hours or more per week</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="currentTools" className="block text-sm font-semibold text-ink">
            Core tools in use today (optional)
          </label>
          <input
            id="currentTools"
            name="currentTools"
            type="text"
            placeholder="Xero, HubSpot, Excel, Sage"
            value={formState.currentTools}
            onChange={(e) => setFormState({ ...formState, currentTools: e.target.value })}
            className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-base font-bold text-ink">
          Part 2: Where Should I Send Your Call Invite?
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-ink">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Sarah Jenkins"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-ink">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="sarah@company.co.uk"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-ink">
              Company name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Midlands Precision Engineering Ltd"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="callWindow" className="block text-sm font-semibold text-ink">
              Preferred call window
            </label>
            <select
              id="callWindow"
              name="callWindow"
              value={formState.callWindow}
              onChange={(e) => setFormState({ ...formState, callWindow: e.target.value })}
              className="mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="Morning, 9:00am to 12:00pm">Morning, 9:00am to 12:00pm</option>
              <option value="Afternoon, 1:00pm to 5:00pm">Afternoon, 1:00pm to 5:00pm</option>
            </select>
          </div>
        </div>
      </div>

      {validationError && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {validationError}
        </p>
      )}

      <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="w-full rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accentHover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-auto"
        >
          Request Diagnostic Call
        </button>
        <p className="text-xs text-slate-600">
          Prefer direct email? Write to{' '}
          <a
            href={`mailto:${SITE_META.email}`}
            className="font-semibold text-ink underline hover:text-accent"
          >
            {SITE_META.email}
          </a>
        </p>
      </div>
    </form>
  );
}
