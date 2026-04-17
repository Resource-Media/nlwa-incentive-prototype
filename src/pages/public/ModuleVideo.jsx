import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'
import VideoPlaceholder from '../../components/VideoPlaceholder'

export default function ModuleVideo() {
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
        <p className="text-sm text-slate-500 mb-3">April 2026 Learning Module</p>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Learn how your food waste is collected, processed and turned into compost and energy.
          Discover what you can and can't put in your food waste caddy, and find out where your
          waste goes after collection.
        </p>
      </div>

      {/* Video section */}
      <div className="mb-8">
        <VideoPlaceholder progress={0} />
        <div className="mt-3 bg-slate-100 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600">
          Watch the full video to unlock the quiz
        </div>
      </div>

      {/* Locked quiz section */}
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

      {/* Text alternative link */}
      <div className="mb-10 text-center">
        <Link to="/public/module-text" className="text-teal-600 hover:text-teal-800 text-sm underline">
          Prefer to read? Switch to the text version
        </Link>
      </div>

      {/* Annotations */}
      <Annotation title="Video Gating (Agreed)">
        Video pauses if the user navigates to another tab. Sophia and Miriam are comfortable with this
        level of enforcement and are not concerned about the small number of users who might use browser
        extensions to bypass it. After completing the first full viewing, users should ideally be able to
        scrub to specific segments rather than re-watching from the start (stretch goal - not essential).
      </Annotation>

      <Annotation title="Video Length (Agreed)">
        Revised down from 15 minutes to around 3-5 minutes, informed by NLWA's Together We Recycle
        campaign where videos ran to roughly two and a half minutes. Landscape format preferred. Some
        portrait footage exists but can be letterboxed in post-production.
      </Annotation>

      <Annotation title="Captions and Accessibility (Agreed)">
        Captions will be embedded in the video files by NLWA as part of their production process.
        No toggle needed on the platform. For the pilot, users who cannot watch video will be offered
        a "contact us" option, with NLWA providing information in an alternative format on request -
        rather than building a full parallel text content path.
      </Annotation>

      <Annotation title="Feedback Mechanism (Agreed)">
        A lightweight "report a problem" button should appear on this page and the quiz page. Not a
        satisfaction survey - just a way for users to flag technical issues, ambiguous content, or
        confusion. Only build if development effort is modest; defer if complex.
      </Annotation>

      <DevNote title="Video Player">
        Custom React component wrapping Vimeo player (most likely platform - Chloe investigating,
        Miriam to ask Federico for recommendations). Must: disable seeking on first watch, track
        progress server-side, detect tab-away via Page Visibility API. Allow scrubbing after first
        completion (stretch goal).
      </DevNote>

      <DevNote title="Video Analytics (Stretch)">
        Video drop-off points, most-replayed segments, completion rates - valuable for content
        improvement but agreed as a stretch goal. Vimeo likely offers native viewer retention data.
        The group agreed it would be disproportionate to rebuild video analytics in the platform.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/module-video-progress" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Video In Progress →
        </Link>
      </div>
    </div>
  )
}
