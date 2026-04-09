import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children, section = 'map' }) {
  const [notesVisible, setNotesVisible] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const toggleNotes = () => {
    setNotesVisible((prev) => {
      const next = !prev
      if (next) {
        document.body.classList.remove('annotation-hidden')
      } else {
        document.body.classList.add('annotation-hidden')
      }
      return next
    })
  }

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      if (next) {
        document.body.classList.add('dark-mode')
        document.documentElement.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
        document.documentElement.classList.remove('dark-mode')
      }
      return next
    })
  }

  const maxWidth = section === 'admin' ? 'max-w-6xl' : 'max-w-4xl'

  return (
    <div className="min-h-screen pb-12 bg-slate-50 text-slate-800">
      {/* Top banner */}
      <div className="bg-slate-800 text-slate-300 text-center py-2 text-xs tracking-widest uppercase font-semibold">
        Discovery Prototype - Not Final Design
      </div>

      {/* Navigation */}
      {section !== 'map' && (
        <nav className="bg-white border-b border-slate-200 shadow-sm">
          <div className={`${maxWidth} mx-auto px-4 flex items-center justify-between h-12`}>
            <div className="flex items-center gap-4 text-sm overflow-x-auto">
              {section === 'public' && (
                <>
                  <Link to="/public/home" className="text-teal-700 hover:text-teal-900 font-medium whitespace-nowrap">Home</Link>
                  <Link to="/public/dashboard" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">My Progress</Link>
                  <Link to="/public/module-video" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">Current Module</Link>
                  <Link to="/public/dashboard" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">Archive</Link>
                  <span className="text-slate-400 cursor-default whitespace-nowrap">Help / FAQ</span>
                </>
              )}
              {section === 'admin' && (
                <>
                  <Link to="/admin/dashboard" className="text-teal-700 hover:text-teal-900 font-medium whitespace-nowrap">Dashboard</Link>
                  <Link to="/admin/modules" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">Modules</Link>
                  <Link to="/admin/quizzes/editor" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">Quizzes</Link>
                  <Link to="/admin/users" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">Users</Link>
                  <Link to="/admin/prize-draw" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">Prize Draw</Link>
                  <Link to="/admin/reporting" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">Reports</Link>
                  <Link to="/admin/calendar" className="text-slate-600 hover:text-slate-900 whitespace-nowrap">Calendar</Link>
                  <span className="text-slate-400 cursor-default whitespace-nowrap">Settings</span>
                </>
              )}
              {section === 'emails' && (
                <Link to="/" className="text-teal-700 hover:text-teal-900 font-medium whitespace-nowrap">&larr; Prototype Map</Link>
              )}
            </div>
            <Link to="/" className="text-xs text-slate-500 hover:text-slate-800 border border-slate-300 rounded px-2 py-1 ml-4 whitespace-nowrap">
              Prototype Map
            </Link>
          </div>
        </nav>
      )}

      {/* Content area */}
      <main className={`${maxWidth} mx-auto px-4 py-8`}>
        {children}
      </main>

      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-12 right-32 z-50 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold px-3 py-2 rounded shadow-lg cursor-pointer transition-colors"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Annotation toggle button */}
      <button
        onClick={toggleNotes}
        className="fixed bottom-12 right-4 z-50 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3 py-2 rounded shadow-lg cursor-pointer transition-colors"
      >
        {notesVisible ? 'Hide Notes' : 'Show Notes'}
      </button>

      {/* Watermark */}
      <div className="watermark">
        NLWA Incentive Scheme - Discovery Prototype - Not for Distribution
      </div>
    </div>
  )
}
