import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const pastDraws = [
  { month: 'March 2026', status: 'Winner drawn - congratulations to our March winner!' },
  { month: 'February 2026', status: 'Winner drawn' },
  { month: 'January 2026', status: 'Winner drawn' },
]

export default function PrizeDrawEntry() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Prize Draw - April 2026</h1>
      </div>

      {/* Entry Confirmation Card */}
      <div className="bg-white rounded-lg shadow-sm border-2 border-green-400 p-8 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg">&#10003;</span>
          <h2 className="text-xl font-bold text-green-700">You're entered!</h2>
        </div>
        <p className="text-slate-600 mb-4">
          Your quiz pass on 9 April 2026 has qualified you for this month's prize draw.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-green-50 rounded-lg p-3">
            <span className="font-medium text-slate-700">Prize:</span>
            <span className="text-slate-600"> &pound;250 grocery voucher</span>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <span className="font-medium text-slate-700">Draw date:</span>
            <span className="text-slate-600"> 5 May 2026</span>
          </div>
          <div className="bg-green-50 rounded-lg p-3 sm:col-span-2">
            <span className="font-medium text-slate-700">Winner notification:</span>
            <span className="text-slate-600"> by email</span>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">How It Works</h2>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">1</span>
              <span>Each month, one qualifying participant is selected at random to win a &pound;250 grocery voucher.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">2</span>
              <span>Winners are contacted by email and asked to verify their address.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">3</span>
              <span>The draw is managed by NLWA and results are final.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Past Draws */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Past Draws</h2>
        <div className="space-y-3">
          {pastDraws.map((draw) => (
            <div key={draw.month} className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="font-medium text-slate-700">{draw.month}</span>
              <span className="text-sm text-slate-500">{draw.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Terms Link */}
      <div className="mb-10">
        <a href="#" className="text-sm text-teal-600 hover:text-teal-800 underline">
          Read the full prize draw terms and conditions
        </a>
      </div>

      {/* Annotations */}
      <Annotation title="Prize Draw Process (Agreed)">
        Winner notification and verification handled personally by NLWA rather than automated through
        the platform. NLWA will email the winner personally, verify their Hackney postcode, and arrange
        prize fulfilment offline. This keeps the build simpler and creates an opportunity for in-person
        engagement and PR - in-person prize handovers with photos for local press (winners asked for
        consent on a case-by-case basis).
      </Annotation>

      <Annotation title="Bonus Rounds (Agreed)">
        NLWA wants occasional surprise bonus rounds (e.g. a Christmas special) with a higher prize
        (perhaps &pound;300) and a shorter entry window, running concurrently with the regular monthly draw.
        The platform will need to handle two active modules and draws at once.
      </Annotation>

      <Annotation title="Grand Prize Draw (Agreed)">
        End-of-year grand prize draw for users who complete all 12 modules. Late joiners can go back
        and complete archived modules to qualify. T&amp;Cs need to cover the grace period for winners to
        respond, bonus round rules, and grand prize eligibility.
      </Annotation>

      <DevNote title="Draw Administration">
        Platform stores eligible entries per month. Admin interface provides CSV export of eligible
        participants for NLWA to run the draw offline. No in-platform random selection needed. Track
        per-user module completion for grand prize eligibility. Support concurrent active draws for
        bonus rounds.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/winner-email" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Winner Notification &rarr;
        </Link>
      </div>
    </div>
  )
}
