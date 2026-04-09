import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const questions = [
  { num: 1, correct: true, label: 'What should NOT go in your food waste caddy?', userAnswer: 'Plastic food packaging', correctAnswer: 'Plastic food packaging' },
  { num: 2, correct: false, label: 'How often is food waste collected in NLWA boroughs?', userAnswer: 'Fortnightly', correctAnswer: 'Weekly' },
  { num: 3, correct: false, label: 'What is food waste processed into?', userAnswer: 'Only compost', correctAnswer: 'Compost and biogas for energy' },
  { num: 4, correct: false, label: 'What percentage of household waste is food waste?', userAnswer: '50%', correctAnswer: '30%' },
  { num: 5, correct: true, label: 'What should you line your caddy with?', userAnswer: 'Newspaper or compostable liners', correctAnswer: 'Newspaper or compostable liners' },
]

export default function QuizFail() {
  return (
    <div>
      {/* Fail State */}
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">&#128218;</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Not quite there yet!</h1>
        <p className="text-lg text-slate-500">You didn't pass the Food Waste quiz this time</p>
      </div>

      {/* Score Display */}
      <div className="bg-white rounded-lg shadow-sm border-l-4 border-amber-400 p-6 text-center mb-8">
        <p className="text-sm uppercase tracking-wider text-slate-400 font-medium mb-1">Your score</p>
        <p className="text-4xl font-bold text-amber-500">2 <span className="text-xl text-slate-400 font-normal">out of</span> 5</p>
      </div>

      {/* Encouragement Message */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-teal-800">
          Don't worry - you can review the content and try again. The more you learn, the better your
          chances of entering the prize draw!
        </p>
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
                <p className={q.correct ? 'text-green-700' : 'text-red-600'}>
                  <span className="font-medium">Your answer:</span> {q.userAnswer}
                </p>
                {!q.correct && (
                  <p className="text-green-700 mt-1"><span className="font-medium">Correct answer:</span> {q.correctAnswer}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Retry Options */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">What would you like to do?</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/public/module-video"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Review the Video
          </Link>
          <Link
            to="/public/module-text"
            className="text-teal-600 hover:text-teal-800 border border-teal-200 hover:border-teal-300 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Review the Text Version
          </Link>
          <Link
            to="/public/quiz"
            className="text-teal-600 hover:text-teal-800 border border-teal-200 hover:border-teal-300 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Try the Quiz Again
          </Link>
        </div>
        <p className="text-xs text-slate-400 mt-3">
          Note: availability of immediate retry may depend on platform policy (see annotation below)
        </p>
      </div>

      {/* Annotations */}
      <Annotation title="Retry Policy">
        Can users retry immediately, or must they re-watch/re-read the content first? Immediate retry is
        more convenient but users might just memorise answers. Requiring content review reinforces
        learning but adds friction. Unlimited retries, or a maximum number of attempts?
      </Annotation>

      <Annotation title="Showing Correct Answers on Fail">
        If correct answers are shown, users can memorise them and pass on the next attempt without
        engaging with the content. If hidden, users must actually re-learn. Which serves the educational
        goal better?
      </Annotation>

      <Annotation title="Fail Notifications">
        Do we send an email when a user fails? Could be encouraging ("almost there!") or could feel like
        nagging. Recommendation: only email on pass/draw entry.
      </Annotation>

      <DevNote title="Retry Logic">
        Track attempt count per user per module. If requiring content re-view before retry, reset the
        video/text completion flag on quiz failure. Business rule: define max retries (or unlimited).
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/prize-draw" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Prize Draw Entry &rarr;
        </Link>
      </div>
    </div>
  )
}
