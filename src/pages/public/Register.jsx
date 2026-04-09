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

          {/* Postcode */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">Postcode</label>
            <input
              type="text"
              placeholder="N7 8QJ"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              readOnly
            />
            <p className="text-xs text-slate-400 mt-1">We'll use this to confirm you live in the NLWA area</p>
          </div>

          {/* Consent checkboxes */}
          <div className="mb-5 space-y-3">
            <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-teal-600" defaultChecked readOnly />
              <span>I agree to the <a href="#" className="text-teal-600 underline">Terms and Conditions</a></span>
            </label>
            <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-teal-600" defaultChecked readOnly />
              <span>I consent to NLWA processing my data for this scheme (<a href="#" className="text-teal-600 underline">Privacy Policy</a>)</span>
            </label>
          </div>

          {/* Registration Options */}
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Option A - Magic Link */}
              <div className="text-center">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Option A</h3>
                <Link
                  to="/public/email-confirm"
                  className="block bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors mb-2"
                >
                  Send me a magic link
                </Link>
                <p className="text-xs text-slate-500">We'll email you a sign-in link - no password needed</p>
              </div>

              {/* Divider */}
              <div className="hidden md:flex items-center absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
                {/* Vertical divider only visible on md+ handled by the border below */}
              </div>

              {/* Option B - Password */}
              <div className="text-center border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Option B</h3>
                <button
                  className="block w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-bold px-6 py-3 rounded-lg transition-colors mb-3 cursor-default"
                >
                  Create with password
                </button>
                <div className="space-y-2">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none"
                    readOnly
                  />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Or divider for mobile */}
            <div className="flex items-center my-4 md:hidden">
              <div className="flex-1 border-t border-slate-300"></div>
              <span className="px-3 text-xs text-slate-400 font-medium">or</span>
              <div className="flex-1 border-t border-slate-300"></div>
            </div>
          </div>
        </div>

        {/* Sign-in link */}
        <p className="text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link to="/public/dashboard" className="text-teal-600 hover:text-teal-800 underline">Sign in</Link>
        </p>
      </div>

      {/* Annotations */}
      <div className="mt-10">
        <Annotation title="Registration Friction vs Data Collection">
          How much information do we need at registration? Name + email is minimum. Postcode could
          be deferred to prize claim stage. Each additional field reduces conversion rates - what's
          the acceptable trade-off?
        </Annotation>

        <Annotation title="Magic Links vs Passwords">
          Magic links (passwordless) reduce friction for users with low digital confidence - they just
          click a link in their email. But they require a valid, accessible email account. Do we offer
          both options, or choose one? Recommendation: magic links as default, password as fallback.
        </Annotation>

        <Annotation title="Postcode Verification Timing">
          Current thinking: collect postcode at registration for reporting, but only verify residency
          when a user wins the prize draw. This reduces friction. Alternative: verify at registration
          and block non-NLWA residents. Which approach?
        </Annotation>

        <DevNote title="Authentication System">
          Auth.js (NextAuth v5) with magic link provider + optional credentials provider. Requires
          transactional email service (SendGrid/Postmark). Session management via encrypted cookies or JWT.
        </DevNote>

        <DevNote title="Postcode Validation">
          Simple lookup against maintained NLWA postcode list. Stretch goal: full address-to-borough
          API (Ideal Postcodes). Edge cases where postcodes straddle borough boundaries.
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
