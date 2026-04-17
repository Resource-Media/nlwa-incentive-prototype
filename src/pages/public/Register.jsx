import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

export default function Register() {
  return (
    <div>
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Create Your Account</h1>
        <p className="text-slate-500">Join the NLWA Learning & Incentive Scheme</p>
      </div>

      {/* Registration Form */}
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 mb-6">
          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">First name</label>
            <input
              type="text"
              placeholder="Sarah"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              readOnly
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
            <input
              type="email"
              placeholder="sarah.t@example.com"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              readOnly
            />
          </div>

          {/* Consent checkboxes */}
          <div className="mb-6 space-y-3">
            <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-teal-600" defaultChecked readOnly />
              <span>I live in the London Borough of Hackney</span>
            </label>
            <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-teal-600" defaultChecked readOnly />
              <span>I am 18 years of age or over</span>
            </label>
            <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-teal-600" defaultChecked readOnly />
              <span>I agree to the <a href="#" className="text-teal-600 underline">Terms and Conditions</a></span>
            </label>
            <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-teal-600" defaultChecked readOnly />
              <span>I consent to NLWA processing my data for this scheme (<a href="#" className="text-teal-600 underline">Privacy Policy</a>)</span>
            </label>
          </div>

          {/* Sign-in link button */}
          <Link
            to="/public/email-confirm"
            className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors text-center mb-2"
          >
            Send me a one-time sign-in link
          </Link>
          <p className="text-xs text-slate-500 text-center">We'll email you a link to sign in - no password needed</p>
        </div>

        {/* Sign-in link */}
        <p className="text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link to="/public/dashboard" className="text-teal-600 hover:text-teal-800 underline">Sign in</Link>
        </p>
      </div>

      {/* Annotations */}
      <div className="mt-10">
        <Annotation title="Registration Approach (Agreed)">
          Magic links agreed as the sign-in method. No passwords. Messaging should avoid the term
          "magic link" and use plain language instead (e.g. "send me a one-time sign-in link"). Fields:
          name and email only. No postcode collected at sign-up - verified only when contacting a
          prize draw winner.
        </Annotation>

        <Annotation title="Hackney-only Access (Agreed)">
          A self-declaration tick box ("I live in the borough of Hackney") will be included at
          registration. Non-Hackney residents will be blocked from registering. This avoids skewing
          participation data and keeps the trial focused.
        </Annotation>

        <Annotation title="Age Restriction (Agreed)">
          Entrants must be 18 or over for the prize draw. A confirmation will be added to the
          registration process.
        </Annotation>

        <Annotation title="Email as Long-term Asset (Note)">
          A successful scheme could build a substantial email list of engaged Hackney residents -
          valuable for future campaigns beyond the trial. NLWA should consider what the sign-up consent
          covers in terms of future communications.
        </Annotation>

        <DevNote title="Authentication System">
          Magic link provider only (no password/credentials). Plain language on buttons and emails.
          Transactional email via simple SMTP service (separate from NLWA's Campaign Monitor).
          Session management via encrypted cookies or JWT.
        </DevNote>

        <DevNote title="Eligibility Checks">
          No postcode at sign-up. Self-declaration tick box for Hackney residency. Age confirmation
          (18+) checkbox. Postcode verified offline by NLWA only when contacting a prize draw winner.
        </DevNote>
      </div>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/email-confirm" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Email Confirmation →
        </Link>
      </div>
    </div>
  )
}
