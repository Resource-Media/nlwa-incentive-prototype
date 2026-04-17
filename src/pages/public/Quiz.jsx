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
      <Annotation title="Quiz Design (Agreed)">
        Five fixed multiple-choice questions per module. Pass mark TBC. Question order and answer order
        are both randomised every attempt. Questions are fixed per module (not drawn from a pool).
        Sophia confirmed five questions will be kept consistent to simplify the briefing to content
        creators. Quiz questions should be written before filming the video.
      </Annotation>

      <Annotation title="Correct Answers Not Shown (Agreed)">
        Correct answers will not be shown on failure. The team agreed this prevents users from simply
        memorising answers and retrying immediately. Users must re-engage with the content to improve.
      </Annotation>

      <Annotation title="Immediate Retry Allowed (Agreed)">
        Users can retake the quiz immediately without re-watching the video. Unlimited retries.
        Combined with hidden correct answers, this still encourages genuine learning.
      </Annotation>

      <DevNote title="Quiz Engine">
        Server-side quiz evaluation. Questions and correct answers stored in CMS, never sent to the
        client before submission. Randomise both question order and answer order on each attempt.
        Optional image field per question (Sophia would like the option to include images, e.g.
        referencing something from the video).
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
