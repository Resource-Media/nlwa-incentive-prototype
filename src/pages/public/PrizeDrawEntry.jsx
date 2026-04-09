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
      <Annotation title="Gambling Act Compliance">
        Does this qualify as a "free prize draw" under the Gambling Act 2005? Key test: there must be a
        genuine free entry route (no purchase required). Since participation only requires watching free
        content and passing a quiz, this likely qualifies - but NLWA should obtain legal confirmation.
        Where are T&amp;Cs published?
      </Annotation>

      <Annotation title="Draw Transparency">
        How much transparency about the draw process? Do users see how many people entered? Is the winner
        announced publicly (first name and borough) or kept private? Past draws section - show winner
        names or just "winner drawn"?
      </Annotation>

      <Annotation title="Prize Fulfilment">
        The SoW says prize fulfilment is managed offline by NLWA. What does "offline" mean in practice?
        Email the winner? Post a voucher? In-person collection? How quickly after the draw?
      </Annotation>

      <DevNote title="Draw Administration">
        Platform stores eligible entries per month. Admin interface provides: list of eligible
        participants, random selection tool, winner history. Export to CSV for offline processing. Audit
        trail for the selection.
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
