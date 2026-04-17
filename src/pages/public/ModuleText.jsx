import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

export default function ModuleText() {
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link to="/public/dashboard" className="text-teal-600 hover:text-teal-800 underline">Dashboard</Link>
        <span className="mx-2">/</span>
        <Link to="/public/module-video" className="text-teal-600 hover:text-teal-800 underline">April 2026 Module</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Text Version</span>
      </nav>

      {/* Module header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Food Waste: From Kitchen to Compost</h1>
        <p className="text-sm text-slate-500 mb-4">April 2026 - Text Version</p>

        {/* Video switch banner */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg px-4 py-3 text-sm text-teal-800">
          <span className="mr-1">&#x1F4D6;</span> You're reading the text alternative.{' '}
          <Link to="/public/module-video" className="text-teal-600 hover:text-teal-800 font-semibold underline">
            Prefer video? Switch to video version
          </Link>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
          <span className="font-medium">Section 3 of 6</span>
          <span className="text-slate-400">50%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal-500 rounded-full" style={{ width: '50%' }} />
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-3 mb-10">

        {/* Section 1 - Collapsed, read */}
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-green-500 font-bold">&#x2713;</span>
              <h3 className="font-semibold text-slate-700">1. What is food waste?</h3>
            </div>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded font-medium">Read</span>
          </div>
        </div>

        {/* Section 2 - Collapsed, read */}
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-green-500 font-bold">&#x2713;</span>
              <h3 className="font-semibold text-slate-700">2. How is food waste collected?</h3>
            </div>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded font-medium">Read</span>
          </div>
        </div>

        {/* Section 3 - Expanded (current) */}
        <div className="bg-white border-2 border-teal-400 rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <h3 className="font-semibold text-slate-800">3. What happens to your food waste?</h3>
            </div>
            <span className="text-xs text-teal-600 bg-teal-50 px-2 py-0.5 rounded font-medium">Reading</span>
          </div>
          <div className="px-5 pb-6 pt-2 border-t border-teal-100">
            <p className="text-slate-700 leading-relaxed mb-5">
              Once collected from your doorstep, food waste from across North London is taken to a
              specialist processing facility. Here it undergoes a process called anaerobic digestion.
            </p>

            {/* Image placeholder */}
            <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg p-10 text-center mb-5">
              <p className="text-slate-400 text-sm">[Image: Diagram showing the anaerobic digestion process]</p>
            </div>

            <p className="text-slate-700 leading-relaxed mb-5">
              Anaerobic digestion breaks down food waste in sealed tanks without oxygen. This produces
              two valuable outputs: biogas, which is used to generate renewable energy, and digestate,
              a nutrient-rich material used as fertiliser on farmland.
            </p>

            <p className="text-slate-700 leading-relaxed">
              This means your banana peel and leftover pasta aren't just being thrown away - they're
              generating electricity and helping grow new food.
            </p>
          </div>
        </div>

        {/* Section 4 - Collapsed */}
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-slate-300 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
              <h3 className="font-semibold text-slate-500">4. What can go in your food caddy?</h3>
            </div>
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Section 5 - Collapsed */}
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-slate-300 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
              <h3 className="font-semibold text-slate-500">5. Common mistakes</h3>
            </div>
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Section 6 - Collapsed */}
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-slate-300 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
              <h3 className="font-semibold text-slate-500">6. Making a difference</h3>
            </div>
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between mb-10">
        <button className="text-teal-600 hover:text-teal-800 font-medium text-sm transition-colors">
          &#x2190; Previous Section
        </button>
        <button className="text-teal-600 hover:text-teal-800 font-medium text-sm transition-colors">
          Next Section &#x2192;
        </button>
      </div>

      <div className="text-center mb-10">
        <span className="inline-block bg-teal-600 text-white font-bold px-6 py-3 rounded-lg opacity-50 cursor-not-allowed text-sm">
          Complete all sections to take the quiz
        </span>
        <p className="text-xs text-slate-400 mt-2">3 of 6 sections remaining</p>
      </div>

      {/* Annotations */}
      <Annotation title="Pilot Accessibility Approach (Agreed)">
        For the pilot, the platform will not build a full parallel text content path. Instead, users
        who cannot watch video will be offered a "contact us" option, with NLWA providing the
        information in an alternative format on request. NLWA's existing website relies on subtitles
        and audio description for video accessibility. The WCAG implications of gating the quiz behind
        video need further investigation (action: Miriam/Sophia before wireframe phase).
      </Annotation>

      <DevNote title="Text Path Deferred">
        Full text alternative path deferred for pilot. This page represents a potential future feature.
        For launch, the video page will include a "contact us" link for users who need an alternative
        format. This significantly reduces the build scope.
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
