import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

export default function ModuleEditor() {
  return (
    <div>
      {/* Header and Breadcrumb */}
      <div className="mb-8">
        <p className="text-sm text-slate-500 mb-1">
          <Link to="/admin/modules" className="text-teal-600 hover:text-teal-800">Modules</Link>
          {' / '}
          Edit: May 2026 - Textiles and Clothing
        </p>
        <h1 className="text-3xl font-bold text-slate-800">Edit Module</h1>
      </div>

      {/* Basic Details */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Basic Details</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Module Title</label>
            <input
              type="text"
              readOnly
              defaultValue="Textiles and Clothing"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Month / Year</label>
              <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
                <option>May 2026</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
              <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
                <option>Draft</option>
                <option>Ready for Review</option>
                <option>Scheduled</option>
                <option>Published</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea
              readOnly
              rows={3}
              defaultValue="Discover what happens to your old clothes and textiles. Learn about donation, recycling and the environmental impact of fast fashion."
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Video Content */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Video Content</h2>
        <p className="text-sm text-slate-500 mb-4">Upload video or paste URL</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload zone */}
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50">
            <div className="text-3xl text-slate-400 mb-2">&#128193;</div>
            <p className="text-sm font-medium text-slate-600 mb-1">Drag and drop video file here, or click to browse</p>
            <p className="text-xs text-slate-400">Max 500MB, MP4/MOV format</p>
          </div>

          {/* URL paste */}
          <div>
            <p className="text-sm font-medium text-slate-600 mb-2">Or paste video URL</p>
            <input
              type="text"
              readOnly
              placeholder="https://vimeo.com/..."
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-400"
            />
            <p className="text-xs text-slate-400 mt-1">Vimeo or YouTube URL</p>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-4 italic">Current: empty (this is a draft)</p>
      </div>

      {/* Text Alternative */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-2">Text Alternative</h2>
        <p className="text-sm text-amber-600 mb-4">This module needs a text alternative for accessibility</p>

        {/* Mock rich text toolbar */}
        <div className="border border-slate-300 rounded-lg overflow-hidden">
          <div className="bg-slate-100 border-b border-slate-300 px-3 py-2 flex items-center gap-3 text-sm text-slate-500">
            <button className="font-bold px-1 hover:text-slate-700">B</button>
            <button className="italic px-1 hover:text-slate-700">I</button>
            <button className="px-1 hover:text-slate-700">H</button>
            <span className="text-slate-300">|</span>
            <button className="px-1 hover:text-slate-700">&#128247; Image</button>
            <button className="px-1 hover:text-slate-700">&#8226; List</button>
          </div>
          <div className="bg-white p-4 min-h-[120px] text-sm text-slate-400 italic">
            Start writing the text alternative content here...
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-2">Structure the content as 4-6 readable sections with headings and images</p>
      </div>

      {/* Quiz Link */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-2">Quiz</h2>
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-600">Quiz for this module: <span className="text-amber-600 font-medium">Not created yet</span></p>
          <Link
            to="/admin/quizzes/editor"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Create Quiz
          </Link>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
          Save Draft
        </button>
        <button className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg border border-slate-300 transition-colors text-sm">
          Schedule Publication
        </button>
        <button className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg border border-slate-300 transition-colors text-sm">
          Preview
        </button>
      </div>

      {/* Annotations */}
      <Annotation title="Video Source (Agreed)">
        NLWA uploads videos to their hosting platform (most likely Vimeo) and provides the URL to the
        module editor. The editor supports pasting a Vimeo or similar URL. Scoping is still to be done
        on video delivery and player integration.
      </Annotation>

      <Annotation title="Thumbnail Image (Agreed)">
        Miriam requested a thumbnail upload field on the module editor for use on the landing page
        and dashboard module cards.
      </Annotation>

      <Annotation title="Text Alternative Deferred for Pilot (Agreed)">
        For the pilot, users who cannot watch video will be offered a "contact us" option rather than
        a full parallel text content path. NLWA provides information in an alternative format on
        request. This significantly reduces the editor and build scope. WCAG implications of
        video-gated content still need investigation (action: Miriam/Sophia).
      </Annotation>

      <Annotation title="Content Creation Guidance (Agreed)">
        Video creators should write the quiz questions (or at least identify the key learning points)
        before filming, to ensure the video content supports the quiz. Sophia and Miriam agreed this
        is important guidance for their team.
      </Annotation>

      <DevNote title="Module Editor Fields">
        Title, description, month/year, status, start date, end date, Vimeo URL, thumbnail image
        upload, quiz link. No rich text editor needed for pilot (text alternative deferred). Thumbnail
        requires image upload and storage.
      </DevNote>
    </div>
  )
}
