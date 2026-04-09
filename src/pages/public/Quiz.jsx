import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

export default function Quiz() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Food Waste Knowledge Check</h1>
        <p className="text-slate-500">Question 1 of 5</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">Question 1 of 5</span>
          <span className="text-sm text-slate-400">20%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 mb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-6">
          Which of these items should <span className="underline">NOT</span> go in your food waste caddy?
        </h2>

        <div className="space-y-3">
          {/* Option A */}
          <div className="border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0"></div>
              <span className="text-slate-700">(a) Tea bags</span>
            </div>
          </div>

          {/* Option B */}
          <div className="border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0"></div>
              <span className="text-slate-700">(b) Cooked pasta</span>
            </div>
          </div>

          {/* Option C - Selected */}
          <div className="border-2 border-teal-500 bg-teal-50 rounded-lg p-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex-shrink-0 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div>
              </div>
              <span className="text-teal-800 font-medium">(c) Plastic food packaging</span>
            </div>
          </div>

          {/* Option D */}
          <div className="border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0"></div>
              <span className="text-slate-700">(d) Egg shells</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-end mb-10">
        <Link
          to="/public/quiz-pass"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Next Question &rarr;
        </Link>
        <p className="text-xs text-slate-400 mt-2">You cannot go back to previous questions</p>
      </div>

      {/* Annotations */}
      <Annotation title="Quiz Navigation">
        Can users go back and change previous answers? Allowing it is more user-friendly but adds UI
        complexity. Is there a time limit per question or for the whole quiz?
      </Annotation>

      <Annotation title="Question Randomisation">
        Are questions fixed (same 5 every time) or drawn randomly from a larger pool? Fixed is simpler
        to author. Random prevents users sharing answers but requires more content creation per module.
      </Annotation>

      <Annotation title="Quiz Attempt Tracking">
        If a user fails and retries, do they get the same questions or different ones? Does the system
        track attempts?
      </Annotation>

      <DevNote title="Quiz Engine">
        Server-side quiz evaluation. Questions and correct answers stored in CMS, never sent to the
        client before submission. Prevents answer inspection via dev tools.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/quiz-pass" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Quiz Pass Result &rarr;
        </Link>
      </div>
    </div>
  )
}
