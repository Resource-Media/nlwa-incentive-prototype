import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'
import VideoPlaceholder from '../../components/VideoPlaceholder'

export default function ModuleVideoComplete() {
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

      {/* Video section - completed */}
      <div className="mb-8">
        <VideoPlaceholder completed={true} />
        <p className="mt-3 text-green-600 font-semibold text-sm">Video completed &#x2713;</p>
      </div>

      {/* Unlocked quiz section */}
      <div className="bg-white border-2 border-teal-400 rounded-lg p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Quiz: Food Waste Knowledge Check</h2>
        <p className="text-slate-600 mb-4">
          Answer 5 multiple-choice questions to test what you've learned. You need to pass to enter
          this month's prize draw.
        </p>
        <ul className="text-sm text-slate-600 space-y-1.5 mb-6">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            5 questions, multiple choice
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            Select one answer per question
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            Pass mark required to enter the draw
          </li>
        </ul>
        <Link
          to="/public/quiz"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Start Quiz
        </Link>
      </div>

      {/* Text alternative link */}
      <div className="mb-10 text-center">
        <Link to="/public/module-text" className="text-teal-600 hover:text-teal-800 text-sm underline">
          You can also review the text version before taking the quiz
        </Link>
      </div>

      {/* Annotations */}
      <Annotation title="Quiz Instructions">
        Should we tell users the exact pass mark before they start? (e.g. "You need 4/5 to pass")
        Or keep it vaguer? Transparency builds trust, but might increase anxiety for less confident users.
      </Annotation>

      <DevNote title="Completion Verification">
        Quiz unlock is verified server-side - the frontend queries the API to check video completion
        status before enabling the quiz. Prevents bypass via URL manipulation.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/quiz" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Take the Quiz →
        </Link>
      </div>
    </div>
  )
}
