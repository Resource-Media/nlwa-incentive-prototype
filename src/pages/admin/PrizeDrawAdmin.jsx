import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const eligibleParticipants = [
  { name: 'Sarah T.', email: 'sarah.t@example.com', postcode: 'N17 9LJ', quizDate: '2 Apr 2026', score: '5/5' },
  { name: 'Priya M.', email: 'priya.m@example.com', postcode: 'EN1 3CD', quizDate: '3 Apr 2026', score: '4/5' },
  { name: 'David L.', email: 'david.l@example.com', postcode: 'NW3 4EF', quizDate: '4 Apr 2026', score: '4/5' },
  { name: 'Fatima A.', email: 'fatima.a@example.com', postcode: 'E8 1GH', quizDate: '5 Apr 2026', score: '5/5' },
  { name: 'Aisha P.', email: 'aisha.p@example.com', postcode: 'N4 2RS', quizDate: '6 Apr 2026', score: '4/5' },
  { name: 'Ben C.', email: 'ben.c@example.com', postcode: 'N22 7TU', quizDate: '8 Apr 2026', score: '5/5' },
]

const drawHistory = [
  { month: 'March 2026', winner: 'James K.', postcode: 'N1 2AB', verified: true, fulfilled: true },
  { month: 'February 2026', winner: 'Amira H.', postcode: 'NW1 5XY', verified: true, fulfilled: true },
  { month: 'January 2026', winner: 'Chris D.', postcode: 'N4 3PQ', verified: true, fulfilled: true },
]

export default function PrizeDrawAdmin() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Prize Draw Administration</h1>
        <div>
          <label className="text-sm text-slate-500 mr-2">Month:</label>
          <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
            <option>April 2026</option>
            <option>March 2026</option>
            <option>February 2026</option>
            <option>January 2026</option>
          </select>
        </div>
      </div>

      {/* Current Draw Status */}
      <div className="bg-white rounded-lg shadow-sm border-2 border-teal-200 p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">April 2026 Draw</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Status</p>
            <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded">Open - entries being collected</span>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Draw Date</p>
            <p className="text-sm font-medium text-slate-800">5 May 2026</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Eligible Entries</p>
            <p className="text-sm font-medium text-slate-800">187 participants have passed the April quiz</p>
          </div>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
          Close Entries and Select Winner
        </button>
      </div>

      {/* Eligible Participants */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-700">Eligible Participants (showing 6 of 187)</h2>
          <button className="text-teal-600 hover:text-teal-800 text-sm font-medium">Export Eligible Entries (CSV)</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 font-semibold text-slate-600">Name</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Email</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Postcode</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Quiz Passed Date</th>
                <th className="px-4 py-3 font-semibold text-slate-600 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {eligibleParticipants.map((p, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-slate-800">{p.name}</td>
                  <td className="px-4 py-3 text-slate-600">{p.email}</td>
                  <td className="px-4 py-3 text-slate-600">{p.postcode}</td>
                  <td className="px-4 py-3 text-slate-600">{p.quizDate}</td>
                  <td className="px-4 py-3 text-slate-600 text-right">{p.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Winner Selection - March (completed example) */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">March 2026 Draw - Completed</h2>
        <p className="text-sm text-slate-500 mb-3">Winner selected on 3 April 2026</p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
          <p className="text-sm font-medium text-green-800">
            Winner: James K. - N1 2AB - Verified &#10003;
          </p>
          <p className="text-sm text-green-700">Postcode verified within NLWA area</p>
          <p className="text-sm text-green-700">Prize: £250 grocery voucher - Fulfilled &#10003;</p>
        </div>
      </div>

      {/* Draw History */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-10">
        <div className="px-4 py-3 border-b border-slate-200">
          <h2 className="text-sm font-bold text-slate-700">Draw History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 font-semibold text-slate-600">Month</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Winner</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Postcode</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Verified</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Fulfilled</th>
              </tr>
            </thead>
            <tbody>
              {drawHistory.map((d, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-slate-800">{d.month}</td>
                  <td className="px-4 py-3 text-slate-600">{d.winner}</td>
                  <td className="px-4 py-3 text-slate-600">{d.postcode}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Verified</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Fulfilled</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Annotations */}
      <Annotation title="Draw Method">
        Does NLWA want the platform to select the winner (random selection in the system), or do they prefer to export the CSV and run the draw independently? If in-system: do they need an auditable, tamper-evident record of the selection process?
      </Annotation>

      <Annotation title="Winner Verification Workflow">
        Current flow: select winner, email notification, winner replies with address, staff verify postcode, fulfil prize. Is this the right workflow? What if the winner doesn't respond? Automatic fallback to next random selection after 14 days?
      </Annotation>

      <Annotation title="Multiple Winners">
        Is it always one winner per month? Could NLWA want to award multiple smaller prizes in future? The system should be flexible enough to accommodate this.
      </Annotation>

      <DevNote title="Random Selection">
        Cryptographically secure random selection (crypto.getRandomValues). Store: selection timestamp, method, seed/proof for audit. Re-selection logic if winner fails verification.
      </DevNote>
    </div>
  )
}
