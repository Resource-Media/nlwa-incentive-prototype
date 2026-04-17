import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const questions = [
  { num: 1, correct: true, label: 'What should NOT go in your food waste caddy?', userAnswer: 'Plastic food packaging', correctAnswer: 'Plastic food packaging' },
  { num: 2, correct: true, label: 'How often is food waste collected in NLWA boroughs?', userAnswer: 'Weekly', correctAnswer: 'Weekly' },
  { num: 3, correct: true, label: 'What is food waste processed into?', userAnswer: 'Compost and biogas for energy', correctAnswer: 'Compost and biogas for energy' },
  { num: 4, correct: false, label: 'What percentage of household waste is food waste?', userAnswer: '20%', correctAnswer: '30%' },
  { num: 5, correct: true, label: 'What should you line your caddy with?', userAnswer: 'Newspaper or compostable liners', correctAnswer: 'Newspaper or compostable liners' },
]

export default function QuizPass() {
  return (
    <div>
      {/* Success State */}
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">&#127881;</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Congratulations, Sarah!</h1>
        <p className="text-lg text-slate-500">You passed the Food Waste quiz</p>
      </div>

      {/* Score Display */}
      <div className="bg-white rounded-lg shadow-sm border-l-4 border-green-500 p-6 text-center mb-8">
        <p className="text-sm uppercase tracking-wider text-slate-400 font-medium mb-1">Your score</p>
        <p className="text-4xl font-bold text-green-600">4 <span className="text-xl text-slate-400 font-normal">out of</span> 5</p>
      </div>

      {/* Prize Draw Confirmation */}
      <div className="bg-white rounded-lg shadow-sm border-2 border-teal-300 p-6 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-teal-600 text-xl">&#10003;</span>
          <h2 className="text-lg font-bold text-teal-700">You've been entered into the April 2026 prize draw!</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
          <div><span className="font-medium text-slate-700">Prize:</span> &pound;250 grocery voucher</div>
          <div><span className="font-medium text-slate-700">Draw date:</span> 5 May 2026</div>
          <div className="sm:col-span-2"><span className="font-medium text-slate-700">Notification:</span> We'll notify you by email if you win</div>
        </div>
      </div>

      {/* Question Review */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Question Review</h2>
        <div className="space-y-3">
          {questions.map((q) => (
            <details key={q.num} className="bg-white rounded-lg shadow-sm border border-slate-200 group">
              <summary className="p-4 cursor-pointer flex items-center gap-3 list-none [&::-webkit-details-marker]:hidden">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white ${q.correct ? 'bg-green-500' : 'bg-red-400'}`}>
                  {q.correct ? '\u2713' : '\u2717'}
                </span>
                <span className="font-medium text-slate-700">Q{q.num}: {q.correct ? 'Correct' : 'Incorrect'}</span>
                <span className="ml-auto text-slate-400 text-xs group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <div className="px-4 pb-4 border-t border-slate-100 pt-3 text-sm">
                <p className="text-slate-600 mb-2">{q.label}</p>
                <p className="text-slate-700"><span className="font-medium">Your answer:</span> {q.userAnswer}</p>
                {!q.correct && (
                  <p className="text-green-700 mt-1"><span className="font-medium">Correct answer:</span> {q.correctAnswer}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 mb-10">
        <Link
          to="/public/dashboard"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
        >
          View Your Dashboard
        </Link>
        <Link
          to="/public/prize-draw"
          className="text-teal-600 hover:text-teal-800 border border-teal-200 hover:border-teal-300 font-medium px-6 py-3 rounded-lg transition-colors"
        >
          See Prize Draw Details
        </Link>
      </div>

      {/* Annotations */}
      <Annotation title="Pass Mark (TBC)">
        Pass mark to be confirmed. On passing, users are automatically entered into the monthly
        prize draw. Entry is automatic - no separate opt-in step.
      </Annotation>

      <Annotation title="Grand Prize Draw Eligibility (Agreed)">
        Users who complete all 12 modules across the year will be eligible for an end-of-year grand
        prize draw with a larger incentive. This gives late joiners a reason to go back and complete
        earlier modules. Completing an archived module contributes to grand prize eligibility but does
        not enter the user into that month's expired monthly draw.
      </Annotation>

      <DevNote title="Prize Draw Entry">
        Server-side: on quiz pass, create a draw entry record linking user, module, and timestamp. Must
        be idempotent - passing the same quiz twice shouldn't create duplicate entries. Track total
        modules completed per user for grand prize draw eligibility.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/quiz-fail" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: See what happens if you fail &rarr;
        </Link>
      </div>
    </div>
  )
}
