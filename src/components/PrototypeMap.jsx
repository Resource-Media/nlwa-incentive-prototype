import { Link } from 'react-router-dom'

const publicPages = [
  { code: 'A1', title: 'Landing Page', path: '/public/home' },
  { code: 'A2', title: 'Registration', path: '/public/register' },
  { code: 'A3', title: 'Email Confirmation', path: '/public/email-confirm' },
  { code: 'A4', title: 'Dashboard', path: '/public/dashboard' },
  { code: 'A5', title: 'Module (Video)', path: '/public/module-video' },
  { code: 'A6', title: 'Module (Video In Progress)', path: '/public/module-video-progress' },
  { code: 'A7', title: 'Module (Video Complete)', path: '/public/module-video-complete' },
  { code: 'A8', title: 'Module (Text Alternative)', path: '/public/module-text' },
  { code: 'A9', title: 'Quiz', path: '/public/quiz' },
  { code: 'A10', title: 'Quiz Pass', path: '/public/quiz-pass' },
  { code: 'A11', title: 'Quiz Fail', path: '/public/quiz-fail' },
  { code: 'A12', title: 'Prize Draw Entry', path: '/public/prize-draw' },
  { code: 'A13', title: 'Winner Notification', path: '/public/winner-email' },
]

const adminPages = [
  { code: 'B1', title: 'Admin Dashboard', path: '/admin/dashboard' },
  { code: 'B2', title: 'Module List', path: '/admin/modules' },
  { code: 'B3', title: 'Module Editor', path: '/admin/modules/editor' },
  { code: 'B4', title: 'Quiz Editor', path: '/admin/quizzes/editor' },
  { code: 'B5', title: 'User Management', path: '/admin/users' },
  { code: 'B6', title: 'Prize Draw Admin', path: '/admin/prize-draw' },
  { code: 'B7', title: 'Reporting', path: '/admin/reporting' },
  { code: 'B8', title: 'Content Calendar', path: '/admin/calendar' },
]

const emailPages = [
  { code: 'C1-C6', title: 'Email Previews', path: '/emails' },
]

function PageList({ pages, accentColour }) {
  const borderClass = {
    green: 'border-l-green-500',
    blue: 'border-l-blue-500',
    purple: 'border-l-purple-500',
  }[accentColour]

  return (
    <div className={`border-l-4 ${borderClass} pl-4`}>
      <div className="space-y-1">
        {pages.map((page, i) => (
          <div key={page.code} className="flex items-center gap-2">
            <Link
              to={page.path}
              className="flex items-center gap-2 text-sm text-slate-700 hover:text-teal-700 hover:bg-slate-100 rounded px-2 py-1.5 transition-colors w-full"
            >
              <span className="inline-block bg-slate-200 text-slate-600 text-xs font-mono font-bold rounded px-1.5 py-0.5 min-w-[2.5rem] text-center">
                {page.code}
              </span>
              <span>{page.title}</span>
            </Link>
            {i < pages.length - 1 && (
              <span className="text-slate-300 text-xs">&rarr;</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PrototypeMap() {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">NLWA Incentive Scheme - Discovery Prototype</h1>
        <p className="text-lg text-teal-700 font-medium mb-4">Workshop - 10 April 2026</p>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
          This prototype illustrates the proposed user journey for the NLWA recycling education and incentive platform. Click through the screens below to explore the experience. Toggle discovery annotations on/off using the button in the bottom-right corner.
        </p>
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        <section>
          <h2 className="text-lg font-bold text-slate-700 mb-3">A. Public User Journey</h2>
          <PageList pages={publicPages} accentColour="green" />
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-700 mb-3">B. Admin Interface</h2>
          <PageList pages={adminPages} accentColour="blue" />
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-700 mb-3">C. Transactional Emails</h2>
          <PageList pages={emailPages} accentColour="purple" />
        </section>
      </div>
    </div>
  )
}
