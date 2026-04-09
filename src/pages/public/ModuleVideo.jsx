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
      <Annotation title="Video Gating Strategy">
        How strictly do we enforce video completion? Options: (1) Track to 90%+ watched, (2) Require
        reaching the final frame, (3) Just require they press play and wait the duration. Determined
        users could bypass any client-side control with dev tools. What level of enforcement is acceptable?
      </Annotation>

      <Annotation title="Video Length and Format">
        Current scope: maximum 15 minutes per module. Sophia mentioned repurposing existing NLWA videos
        - what aspect ratios do these come in? Landscape, portrait, square? The player needs to handle
        all formats gracefully.
      </Annotation>

      <Annotation title="Content Accessibility">
        WCAG 2.2 AA requires captions/subtitles on video content. Who provides these? Auto-generated,
        or professionally captioned? This is a legal requirement for public sector bodies.
      </Annotation>

      <DevNote title="Video Player">
        Custom React component wrapping Mux or Vimeo player. Must: disable seeking, track progress
        server-side, detect tab-away via Page Visibility API. Most complex frontend component in the build.
      </DevNote>

      <DevNote title="Video Streaming">
        Mux or Vimeo Pro for adaptive bitrate delivery. API costs borne by NLWA. Choice affects player
        implementation significantly.
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
