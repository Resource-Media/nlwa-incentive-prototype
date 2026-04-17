import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'
import VideoPlaceholder from '../../components/VideoPlaceholder'

export default function ModuleVideoProgress() {
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link to="/public/dashboard" className="text-teal-600 hover:text-teal-800 underline">Dashboard</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">April 2026 Module</span>
      </nav>

      {/* Module header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2 py-1 rounded">April 2026</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Food Waste: From Kitchen to Compost</h1>
        <p className="text-sm text-slate-500">April 2026 Learning Module</p>
      </div>

      {/* Video section */}
      <div className="mb-4">
        <VideoPlaceholder progress={62} />
        <div className="mt-3 bg-slate-100 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600">
          Keep watching to unlock the quiz - <strong className="text-teal-700">62% complete</strong>
        </div>
      </div>

      {/* Tab-away warning overlay */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">⚠️</span>
          <div>
            <h2 className="text-lg font-bold text-amber-800 mb-2">It looks like you navigated away</h2>
            <p className="text-amber-900 text-sm mb-4">
              The video has been paused. Please return to watching to continue your progress towards
              unlocking the quiz.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm">
              Resume Watching
            </button>
            <p className="text-xs text-amber-700 mt-3">Your progress has been saved at 2:29 / 4:00</p>
          </div>
        </div>
      </div>

      {/* Still-locked quiz section */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8 opacity-75">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🔒</span>
          <h2 className="text-lg font-bold text-slate-500">Quiz: Food Waste Knowledge Check</h2>
        </div>
        <p className="text-sm text-slate-400 mb-4 ml-10">Complete the video above to unlock this quiz</p>
        <div className="ml-10">
          <span className="inline-block bg-teal-600 text-white font-bold px-6 py-3 rounded-lg opacity-50 cursor-not-allowed">
            Start Quiz
          </span>
        </div>
      </div>

      {/* Annotations */}
      <Annotation title="Tab-Away Behaviour (Agreed)">
        Video pauses immediately when the user switches tab. NLWA is comfortable with this approach
        and is not concerned about the small number of users who might attempt to bypass it. The
        warning message tone should be firm but friendly for users with low digital confidence.
      </Annotation>

      <Annotation title="Progress Saving">
        If a user closes the browser entirely, they should resume where they left off next time. This
        requires server-side progress checkpoints. Recommended: save progress every 30 seconds.
      </Annotation>

      <DevNote title="Page Visibility API">
        document.addEventListener('visibilitychange', handler). Detects tab switches and window minimising.
        Cannot detect screen sharing or picture-in-picture.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/module-video-complete" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Video Complete →
        </Link>
      </div>
    </div>
  )
}
