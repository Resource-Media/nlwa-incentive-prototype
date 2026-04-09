import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'
import EmailMock from '../../components/EmailMock'

export default function WinnerEmail() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Winner Notification</h1>
        <p className="text-slate-500">This is what a prize draw winner receives by email</p>
      </div>

      {/* Email Mock */}
      <div className="mb-10">
        <EmailMock subject="You've won the NLWA April Prize Draw!" from="NLWA Learning <noreply@recycle.nlwa.gov.uk>">
          <p className="mb-4">Dear Sarah,</p>

          <p className="mb-4">
            Congratulations! You've been selected as the winner of the April 2026 NLWA Learning Prize Draw!
          </p>

          <p className="mb-4">
            <strong>Your prize:</strong> &pound;250 grocery voucher
          </p>

          <p className="mb-4">
            To claim your prize, we need to verify your address is within the NLWA area. Please reply to
            this email with your full address, or click the button below:
          </p>

          {/* Mock CTA Button */}
          <div className="text-center my-6">
            <span className="inline-block bg-teal-600 text-white font-bold px-8 py-3 rounded-lg cursor-default">
              Verify My Address
            </span>
          </div>

          <p className="mb-4">
            Please respond within 14 days. If we don't hear from you, an alternative winner will be selected.
          </p>

          <p className="mb-4">
            Thank you for taking part in the NLWA Learning scheme. Your engagement helps improve recycling
            across North London.
          </p>

          <p className="mb-6">NLWA Learning Team</p>

          <div className="border-t border-slate-200 pt-4 text-xs text-slate-400">
            North London Waste Authority | Unit 1b, Berol House, 25 Ashley Road, London N17 9LJ
          </div>
        </EmailMock>
      </div>

      {/* Address Verification Section */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Address Verification Step</h2>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="max-w-md">
            <label className="block text-sm font-medium text-slate-700 mb-2">Full address</label>
            <div className="border border-slate-300 rounded-lg p-3 bg-slate-50 text-slate-400 text-sm mb-2">
              e.g. 14 Haringey Road, London, N17 8PQ
            </div>
            <label className="block text-sm font-medium text-slate-700 mb-2 mt-4">Postcode</label>
            <div className="border border-slate-300 rounded-lg p-3 bg-slate-50 text-slate-400 text-sm w-40 mb-4">
              e.g. N17 8PQ
            </div>
            <button className="bg-teal-600 text-white font-bold px-6 py-3 rounded-lg cursor-default">
              Submit Verification
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4">
            If the winner's postcode is not within the NLWA area, an alternative winner will be selected.
          </p>
        </div>
      </section>

      {/* Annotations */}
      <Annotation title="Winner Verification Process">
        How is the winner's address verified? Self-declared postcode check against NLWA list? Or full
        address to local authority boundary lookup? What happens if verification fails - next random
        selection?
      </Annotation>

      <Annotation title="Communication Channel">
        Is email the right channel for winner notification? What if the email goes to spam? Should there
        also be an in-platform notification? A deadline of 14 days to respond - is that enough?
      </Annotation>

      <Annotation title="Privacy Considerations">
        Winner announcements: use first name and borough only? Or fully anonymous ("a resident of
        Haringey")? GDPR: the winner notification email contains personal data - retention policy applies.
      </Annotation>

      <DevNote title="Winner Notification System">
        Automated email triggered by admin "select winner" action, or manual email sent by NLWA staff? If
        automated: email template, verification link, deadline tracking, fallback selection logic.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/admin/dashboard" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: See the Admin Interface &rarr;
        </Link>
      </div>
    </div>
  )
}
