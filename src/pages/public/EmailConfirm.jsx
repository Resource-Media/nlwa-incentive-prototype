import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'
import EmailMock from '../../components/EmailMock'

export default function EmailConfirm() {
  return (
    <div>
      {/* Main Message */}
      <div className="text-center mb-12 pt-4">
        <div className="text-6xl mb-4">✉️</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-3">Check Your Inbox</h1>
        <p className="text-slate-500 max-w-md mx-auto">
          We've sent a confirmation link to <strong className="text-slate-700">sarah.t@example.com</strong>.
          Click the link in the email to complete your registration.
        </p>
      </div>

      {/* Help Text */}
      <div className="text-center mb-12">
        <p className="text-sm text-slate-500 mb-3">
          Didn't receive it? Check your spam folder, or request a new link.
        </p>
        <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium text-sm px-5 py-2 rounded-lg transition-colors cursor-default">
          Resend email
        </button>
      </div>

      {/* Mock Email Preview */}
      <div className="mb-10">
        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold text-center mb-3">
          Email preview (for workshop purposes)
        </p>
        <EmailMock subject="Confirm your NLWA Learning account" from="NLWA Learning <noreply@recycle.nlwa.gov.uk>">
          <p className="mb-3">Hi Sarah,</p>
          <p className="mb-3">Thanks for signing up to the NLWA Learning & Incentive Scheme!</p>
          <p className="mb-4">
            Click the button below to confirm your email address and get started with this month's learning module.
          </p>
          <div className="text-center my-6">
            <span className="inline-block bg-teal-600 text-white px-6 py-3 rounded font-bold">
              Confirm My Email
            </span>
          </div>
          <p className="mb-3 text-sm text-slate-500">This link expires in 24 hours.</p>
          <p className="mb-3 text-sm text-slate-500">If you didn't create this account, you can safely ignore this email.</p>
          <p className="text-sm text-slate-600 font-medium">NLWA Learning Team</p>
        </EmailMock>
      </div>

      {/* Annotations */}
      <Annotation title="Email Sender Identity">
        What sender name and email address? "NLWA Learning" from recycle.nlwa.gov.uk? This needs to be
        set up with the email provider and DNS records. Also - what does the welcome experience include?
        Any onboarding content or tips?
      </Annotation>

      <Annotation title="Email Deliverability">
        Transactional emails sometimes land in spam, especially for new domains. Consider: SPF/DKIM/DMARC
        records, warm-up period for new sending domain, and a "check your spam" message on this screen.
      </Annotation>

      <DevNote title="Email Service">
        Transactional email via SendGrid, Postmark, or Mailgun. Templates need to be designed and tested
        across email clients (Gmail, Outlook, Apple Mail). Email service costs are borne by NLWA.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/dashboard" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Your Dashboard →
        </Link>
      </div>
    </div>
  )
}
