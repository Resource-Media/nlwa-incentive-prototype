import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PrototypeMap from './components/PrototypeMap'

// Public pages
import Home from './pages/public/Home'
import Register from './pages/public/Register'
import EmailConfirm from './pages/public/EmailConfirm'
import Dashboard from './pages/public/Dashboard'
import ModuleVideo from './pages/public/ModuleVideo'
import ModuleVideoProgress from './pages/public/ModuleVideoProgress'
import ModuleVideoComplete from './pages/public/ModuleVideoComplete'
import ModuleText from './pages/public/ModuleText'
import Quiz from './pages/public/Quiz'
import QuizPass from './pages/public/QuizPass'
import QuizFail from './pages/public/QuizFail'
import PrizeDrawEntry from './pages/public/PrizeDrawEntry'
import WinnerEmail from './pages/public/WinnerEmail'

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard'
import ModuleList from './pages/admin/ModuleList'
import ModuleEditor from './pages/admin/ModuleEditor'
import QuizEditor from './pages/admin/QuizEditor'
import UserManagement from './pages/admin/UserManagement'
import PrizeDrawAdmin from './pages/admin/PrizeDrawAdmin'
import Reporting from './pages/admin/Reporting'
import ContentCalendar from './pages/admin/ContentCalendar'

// Email pages
import Emails from './pages/emails/Emails'

function PublicPage({ children }) {
  return <Layout section="public">{children}</Layout>
}

function AdminPage({ children }) {
  return <Layout section="admin">{children}</Layout>
}

function EmailPage({ children }) {
  return <Layout section="emails">{children}</Layout>
}

function MapPage({ children }) {
  return <Layout section="map">{children}</Layout>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Prototype Map */}
        <Route path="/" element={<MapPage><PrototypeMap /></MapPage>} />

        {/* Public User Journey */}
        <Route path="/public/home" element={<PublicPage><Home /></PublicPage>} />
        <Route path="/public/register" element={<PublicPage><Register /></PublicPage>} />
        <Route path="/public/email-confirm" element={<PublicPage><EmailConfirm /></PublicPage>} />
        <Route path="/public/dashboard" element={<PublicPage><Dashboard /></PublicPage>} />
        <Route path="/public/module-video" element={<PublicPage><ModuleVideo /></PublicPage>} />
        <Route path="/public/module-video-progress" element={<PublicPage><ModuleVideoProgress /></PublicPage>} />
        <Route path="/public/module-video-complete" element={<PublicPage><ModuleVideoComplete /></PublicPage>} />
        <Route path="/public/module-text" element={<PublicPage><ModuleText /></PublicPage>} />
        <Route path="/public/quiz" element={<PublicPage><Quiz /></PublicPage>} />
        <Route path="/public/quiz-pass" element={<PublicPage><QuizPass /></PublicPage>} />
        <Route path="/public/quiz-fail" element={<PublicPage><QuizFail /></PublicPage>} />
        <Route path="/public/prize-draw" element={<PublicPage><PrizeDrawEntry /></PublicPage>} />
        <Route path="/public/winner-email" element={<PublicPage><WinnerEmail /></PublicPage>} />

        {/* Admin Interface */}
        <Route path="/admin/dashboard" element={<AdminPage><AdminDashboard /></AdminPage>} />
        <Route path="/admin/modules" element={<AdminPage><ModuleList /></AdminPage>} />
        <Route path="/admin/modules/editor" element={<AdminPage><ModuleEditor /></AdminPage>} />
        <Route path="/admin/quizzes/editor" element={<AdminPage><QuizEditor /></AdminPage>} />
        <Route path="/admin/users" element={<AdminPage><UserManagement /></AdminPage>} />
        <Route path="/admin/prize-draw" element={<AdminPage><PrizeDrawAdmin /></AdminPage>} />
        <Route path="/admin/reporting" element={<AdminPage><Reporting /></AdminPage>} />
        <Route path="/admin/calendar" element={<AdminPage><ContentCalendar /></AdminPage>} />

        {/* Transactional Emails */}
        <Route path="/emails" element={<EmailPage><Emails /></EmailPage>} />
      </Routes>
    </BrowserRouter>
  )
}
