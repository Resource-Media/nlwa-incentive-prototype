import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'
import ChartPlaceholder from '../../components/ChartPlaceholder'

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
        <span className="text-sm text-slate-500">9 April 2026</span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500 mb-1">Total Registered Users</p>
          <p className="text-3xl font-bold text-slate-800">1,247</p>
          <p className="text-sm text-green-600 mt-1">&#8593; 12% vs last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500 mb-1">Active This Month</p>
          <p className="text-3xl font-bold text-slate-800">342</p>
          <p className="text-xs text-slate-400 mt-1">Users who have started April's module</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500 mb-1">Quiz Pass Rate</p>
          <p className="text-3xl font-bold text-slate-800">78%</p>
          <p className="text-xs text-slate-400 mt-1">Across all modules</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500 mb-1">Modules Published</p>
          <p className="text-3xl font-bold text-slate-800">4</p>
          <p className="text-xs text-slate-400 mt-1">Jan - Apr 2026</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Link
          to="/admin/modules/editor"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          Create New Module
        </Link>
        <Link
          to="/admin/prize-draw"
          className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg border border-slate-300 transition-colors text-sm"
        >
          View April Entries
        </Link>
      </div>

      {/* Chart */}
      <div className="mb-8">
        <ChartPlaceholder title="Monthly Participation Trend (Jan-Apr 2026)" type="line" />
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <span className="text-slate-400 shrink-0">9 Apr</span>
            <span>Sarah T. (N17) passed April quiz</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 shrink-0">9 Apr</span>
            <span>12 new registrations today</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 shrink-0">8 Apr</span>
            <span>April module published</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 shrink-0">5 Apr</span>
            <span>March prize draw completed - winner: James K. (N1)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 shrink-0">1 Apr</span>
            <span>March module archived</span>
          </li>
        </ul>
      </div>

      {/* Annotations */}
      <Annotation title="Admin Access (Agreed)">
        Only the NLWA comms team (four to five people) need staff access. No requirement for separate
        permission levels or SSO integration with existing NLWA systems. No dedicated admin user
        management screen needed - admin accounts can be managed directly in the database/auth tools.
      </Annotation>

      <Annotation title="Dashboard Content (Note)">
        The "Run Prize Draw" button should be removed - the draw happens offline from a CSV export
        of eligible participants (agreed Session 1). Dashboard metrics shown (registrations, active
        users, quiz pass rate, modules published) to be confirmed with NLWA.
      </Annotation>

      <DevNote title="Admin Auth Implementation">
        Simple admin authentication separate from the public site. No RBAC, no SSO. Four to five
        static admin accounts managed directly in database/auth tooling. Minimal build effort.
      </DevNote>
    </div>
  )
}
