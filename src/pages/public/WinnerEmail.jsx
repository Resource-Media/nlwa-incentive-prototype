import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'

export default function WinnerEmail() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Winner Notification</h1>
        <p className="text-slate-500">How the prize draw winner is contacted</p>
      </div>

      {/* Offline Process Notice */}
      <div className="bg-teal-50 border-2 border-teal-300 rounded-lg p-8 mb-10 text-center">
        <div className="text-4xl mb-4">&#128233;</div>
        <h2 className="text-xl font-bold text-teal-800 mb-3">Handled offline by NLWA</h2>
        <p className="text-teal-700 max-w-lg mx-auto leading-relaxed mb-4">
          Winner notification and verification is handled personally by NLWA staff, not through the
          platform. NLWA will email the winner directly, verify their Hackney postcode, and arrange
          prize fulfilment offline.
        </p>
        <p className="text-teal-700 max-w-lg mx-auto leading-relaxed">
          This approach keeps the build simpler and creates an opportunity for in-person engagement
          and PR - including prize handovers with photos for local press.
        </p>
      </div>

      {/* Process Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Winner Process</h2>
        <ol className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">1</span>
            <span>NLWA exports CSV of eligible participants from the admin prize draw page</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">2</span>
            <span>NLWA runs the draw offline and selects a winner</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">3</span>
            <span>NLWA contacts the winner personally by email to verify their Hackney postcode</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">4</span>
            <span>Prize fulfilment arranged offline, with option for in-person handover and press photos (consent requested)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">5</span>
            <span>If winner does not respond within the grace period (defined in T&amp;Cs), NLWA selects an alternative winner</span>
          </li>
        </ol>
      </div>

      <Annotation title="No Platform Build Required (Agreed)">
        This screen was part of the original prototype but the group agreed in Session 1 that winner
        notification and verification will be handled personally by NLWA. Miriam noted it is such a
        small monthly task that building automated functionality would be disproportionate. No automated
        winner email, verification form, or deadline tracking is needed in the platform.
      </Annotation>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/admin/dashboard" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: See the Admin Interface &rarr;
        </Link>
      </div>
    </div>
  )
}
