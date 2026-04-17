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
            <div key={q.num} className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex items-center gap-3">
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white ${q.correct ? 'bg-green-500' : 'bg-red-400'}`}>
                {q.correct ? '\u2713' : '\u2717'}
              </span>
              <span className="font-medium text-slate-700">Q{q.num}: {q.correct ? 'Correct' : 'Incorrect'}</span>
            </div>
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
      <Annotation title="Retry Policy (Agreed)">
        Users can retake the quiz immediately without re-watching the video. Unlimited retries. Combined
        with correct answers being hidden on failure, users are encouraged to re-engage with the content
        to improve rather than simply memorising answers.
      </Annotation>

      <Annotation title="Correct Answers Hidden (Agreed)">
        Correct answers are not shown on failure. The team agreed this prevents users from memorising
        answers and retrying immediately without learning. Users see their score and which questions
        they got wrong, but not the correct answers.
      </Annotation>

      <DevNote title="Retry Logic">
        Unlimited retries allowed. Track attempt count per user per module for reporting purposes.
        No need to reset video completion on quiz failure since immediate retry is permitted.
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
