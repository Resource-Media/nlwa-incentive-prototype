import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const users = [
  { name: 'Sarah T.', email: 'sarah.t@example.com', registered: '15 Jan 2026', modulesCompleted: 4, lastActive: '9 Apr 2026' },
  { name: 'James K.', email: 'james.k@example.com', registered: '20 Jan 2026', modulesCompleted: 3, lastActive: '5 Apr 2026' },
  { name: 'Priya M.', email: 'priya.m@example.com', registered: '1 Feb 2026', modulesCompleted: 2, lastActive: '2 Apr 2026' },
  { name: 'David L.', email: 'david.l@example.com', registered: '10 Feb 2026', modulesCompleted: 2, lastActive: '8 Apr 2026' },
  { name: 'Fatima A.', email: 'fatima.a@example.com', registered: '15 Feb 2026', modulesCompleted: 2, lastActive: '7 Apr 2026' },
  { name: 'Mark R.', email: 'mark.r@example.com', registered: '1 Mar 2026', modulesCompleted: 1, lastActive: '25 Mar 2026' },
  { name: 'Lisa W.', email: 'lisa.w@example.com', registered: '5 Mar 2026', modulesCompleted: 0, lastActive: '3 Apr 2026' },
  { name: 'Tom S.', email: 'tom.s@example.com', registered: '20 Mar 2026', modulesCompleted: 0, lastActive: '20 Mar 2026' },
]

export default function UserManagement() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-800">User Management</h1>
        <span className="text-sm text-slate-500">1,247 registered users</span>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-4">
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs text-slate-500 mb-1">Search</label>
            <input
              type="text"
              readOnly
              placeholder="Search by name, email or postcode..."
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Status</label>
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Registered</label>
            <input
              type="text"
              readOnly
              placeholder="Date range..."
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-400 w-32"
            />
          </div>
        </div>
      </div>

      {/* Export */}
      <div className="flex justify-end mb-4">
        <div className="relative">
          <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-700 font-medium">
            <option>Export to CSV: All Users</option>
            <option>Export to CSV: Active Users</option>
            <option>Export to CSV: Prize Draw Eligible (April)</option>
          </select>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-3 py-3 font-semibold text-slate-600">Name</th>
                <th className="px-3 py-3 font-semibold text-slate-600">Email</th>
                <th className="px-3 py-3 font-semibold text-slate-600">Registered</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Modules Completed</th>
                <th className="px-3 py-3 font-semibold text-slate-600">Last Active</th>
                <th className="px-3 py-3 font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-3 py-3 font-medium text-slate-800 whitespace-nowrap">{u.name}</td>
                  <td className="px-3 py-3 text-slate-600">{u.email}</td>
                  <td className="px-3 py-3 text-slate-600 whitespace-nowrap">{u.registered}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{u.modulesCompleted}</td>
                  <td className="px-3 py-3 text-slate-600 whitespace-nowrap">{u.lastActive}</td>
                  <td className="px-3 py-3">
                    <span className="text-teal-600 hover:text-teal-800 font-medium cursor-pointer">View</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-slate-500 mb-10">
        <span>Showing 1-8 of 1,247 users</span>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 rounded border border-slate-300 bg-white text-slate-400 text-sm">Prev</button>
          <button className="px-3 py-1 rounded border border-teal-600 bg-teal-600 text-white text-sm font-bold">1</button>
          <button className="px-3 py-1 rounded border border-slate-300 bg-white text-slate-600 text-sm">2</button>
          <button className="px-3 py-1 rounded border border-slate-300 bg-white text-slate-600 text-sm">3</button>
          <span className="px-2 text-slate-400">...</span>
          <button className="px-3 py-1 rounded border border-slate-300 bg-white text-slate-600 text-sm">156</button>
          <button className="px-3 py-1 rounded border border-slate-300 bg-white text-slate-600 text-sm">Next</button>
        </div>
      </div>

      {/* Annotations */}
      <Annotation title="User Data Displayed (Agreed)">
        Remove borough and postcode columns from the user list (this data is not collected at
        registration). Useful fields: name, email, registration date, modules completed, quizzes
        passed (effectively the same number - combine into a single column), and last active date.
      </Annotation>

      <Annotation title="CSV Export (Agreed)">
        CSV export needed for the monthly prize draw (eligible participants) and for potential use as
        a mailing list via Campaign Monitor for future NLWA communications. The export should also
        show whether a user has passed all modules, to support the end-of-year grand prize draw.
      </Annotation>

      <Annotation title="Data Retention (Agreed)">
        NLWA's standard data retention period is three years, after which inactive users should be
        routinely removed. A mechanism is needed for NLWA to delete a user on request (GDPR right
        to deletion).
      </Annotation>

      <DevNote title="User Data Storage">
        Personal data (name, email) encrypted at rest. No postcode or address stored. Borough field
        included in database for future expansion beyond Hackney. Audit log for admin access to user
        data. GDPR: implement CSV export and user deletion endpoints. Auto-deletion after 3-year
        retention period.
      </DevNote>
    </div>
  )
}
