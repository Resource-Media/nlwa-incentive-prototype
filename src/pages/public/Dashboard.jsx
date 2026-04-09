import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

export default function Dashboard() {
  return (
    <div>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Welcome back, Sarah!</h1>
        <p className="text-slate-500">Here's your learning progress</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 text-center">
          <div className="text-3xl font-bold text-teal-600 mb-1">2</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Modules Completed</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 text-center">
          <div className="text-3xl font-bold text-teal-600 mb-1">2</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Quizzes Passed</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 text-center">
          <div className="text-3xl font-bold text-teal-600 mb-1">2</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Prize Draws Entered</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 text-center">
          <div className="text-3xl font-bold text-teal-600 mb-1">2</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Month Streak</div>
        </div>
      </div>

      {/* Current Module Card */}
      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-sm border-2 border-teal-300 p-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2.5 py-1 rounded">April 2026</span>
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded">NEW</span>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Food Waste: From Kitchen to Compost</h2>
          <p className="text-slate-600 mb-6">
            Learn how your food waste is collected, processed and turned into compost and energy.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link
              to="/public/module-video"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Start Learning
            </Link>
            <Link to="/public/module-text" className="text-teal-600 hover:text-teal-800 text-sm underline">
              Or read the text version
            </Link>
          </div>
          <p className="text-xs text-slate-400">Prize draw closes: 30 April 2026</p>
        </div>
      </section>

      {/* Archive Section */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Past Modules</h2>
        <div className="space-y-4">
          {/* March 2026 */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">Completed ✓</span>
                <span className="text-xs text-slate-400">March 2026</span>
              </div>
              <h3 className="font-bold text-slate-700">Recycling Right: What Goes Where</h3>
              <p className="text-sm text-slate-500">You passed the quiz and entered the March draw</p>
            </div>
            <button className="text-sm text-teal-600 hover:text-teal-800 border border-teal-200 hover:border-teal-300 px-4 py-2 rounded-lg transition-colors cursor-default whitespace-nowrap">
              Review
            </button>
          </div>

          {/* February 2026 */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">Completed ✓</span>
                <span className="text-xs text-slate-400">February 2026</span>
              </div>
              <h3 className="font-bold text-slate-700">Reducing Household Waste</h3>
              <p className="text-sm text-slate-500">You passed the quiz and entered the February draw</p>
            </div>
            <button className="text-sm text-teal-600 hover:text-teal-800 border border-teal-200 hover:border-teal-300 px-4 py-2 rounded-lg transition-colors cursor-default whitespace-nowrap">
              Review
            </button>
          </div>
        </div>
      </section>

      {/* Annotations */}
      <Annotation title="Archive Access Policy">
        Can users still complete past modules they missed? If so, can they enter the prize draw for
        archived months, or only the current one? This affects user motivation and the simplicity of
        the prize draw administration.
      </Annotation>

      <Annotation title="Re-engagement Strategy">
        What brings users back each month? Options: monthly email reminder, push notifications
        (requires app/PWA), social media prompts. How prominent should the archive be vs. the current module?
      </Annotation>

      <Annotation title="User Progress Display">
        Is a streak counter motivating for this audience? What about a "learning journey" visualisation?
        Keep it simple for launch or invest in gamification?
      </Annotation>

      <DevNote title="Progress Tracking">
        Server-side progress tracking per user per module. States: not started, video in progress,
        video complete, quiz attempted, quiz passed, draw entered. Database schema needed.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/module-video" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Start the Module →
        </Link>
      </div>
    </div>
  )
}
