import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const users = [
  { name: 'Sarah T.', email: 'sarah.t@example.com', postcode: 'N17 9LJ', borough: 'Haringey', registered: '15 Jan 2026', modules: 4, quizzes: 4, lastActive: '9 Apr 2026' },
  { name: 'James K.', email: 'james.k@example.com', postcode: 'N1 2AB', borough: 'Islington', registered: '20 Jan 2026', modules: 3, quizzes: 3, lastActive: '5 Apr 2026' },
  { name: 'Priya M.', email: 'priya.m@example.com', postcode: 'EN1 3CD', borough: 'Enfield', registered: '1 Feb 2026', modules: 3, quizzes: 2, lastActive: '2 Apr 2026' },
  { name: 'David L.', email: 'david.l@example.com', postcode: 'NW3 4EF', borough: 'Camden', registered: '10 Feb 2026', modules: 2, quizzes: 2, lastActive: '8 Apr 2026' },
  { name: 'Fatima A.', email: 'fatima.a@example.com', postcode: 'E8 1GH', borough: 'Hackney', registered: '15 Feb 2026', modules: 2, quizzes: 2, lastActive: '7 Apr 2026' },
  { name: 'Mark R.', email: 'mark.r@example.com', postcode: 'N19 5IJ', borough: 'Haringey', registered: '1 Mar 2026', modules: 1, quizzes: 1, lastActive: '25 Mar 2026' },
  { name: 'Lisa W.', email: 'lisa.w@example.com', postcode: 'E17 6KL', borough: 'Waltham Forest', registered: '5 Mar 2026', modules: 1, quizzes: 0, lastActive: '3 Apr 2026' },
  { name: 'Tom S.', email: 'tom.s@example.com', postcode: 'N7 8MN', borough: 'Islington', registered: '20 Mar 2026', modules: 0, quizzes: 0, lastActive: '20 Mar 2026' },
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
            <label className="block text-xs text-slate-500 mb-1">Borough</label>
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
              <option>All</option>
              <option>Barnet</option>
              <option>Camden</option>
              <option>Enfield</option>
              <option>Hackney</option>
              <option>Haringey</option>
              <option>Islington</option>
              <option>Waltham Forest</option>
            </select>
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
                <th className="px-3 py-3 font-semibold text-slate-600">Postcode</th>
                <th className="px-3 py-3 font-semibold text-slate-600">Borough</th>
                <th className="px-3 py-3 font-semibold text-slate-600">Registered</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Modules</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Quizzes Passed</th>
                <th className="px-3 py-3 font-semibold text-slate-600">Last Active</th>
                <th className="px-3 py-3 font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-3 py-3 font-medium text-slate-800 whitespace-nowrap">{u.name}</td>
                  <td className="px-3 py-3 text-slate-600">{u.email}</td>
                  <td className="px-3 py-3 text-slate-600">{u.postcode}</td>
                  <td className="px-3 py-3 text-slate-600">{u.borough}</td>
                  <td className="px-3 py-3 text-slate-600 whitespace-nowrap">{u.registered}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{u.modules}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{u.quizzes}</td>
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
      <Annotation title="Data Export Requirements">
        What data does NLWA need to export and how often? Is this primarily for prize draw admin, or also for reporting to senior management/councillors? Define the exact fields needed in each export type.
      </Annotation>

      <Annotation title="GDPR Compliance">
        Data retention: how long do we keep user data? Right to deletion: what's the process when a user requests their data be removed? Data access requests: can users download their own data? Privacy policy needs to cover all of this.
      </Annotation>

      <Annotation title="Borough Mapping">
        The "Borough" column relies on mapping postcodes to boroughs. Simple postcode-prefix mapping covers most cases, but some postcodes straddle boundaries. How important is accuracy here vs. the prize draw verification step?
      </Annotation>

      <DevNote title="User Data Storage">
        Personal data (name, email, address) encrypted at rest. Audit log for admin access to user data. GDPR: implement data export (JSON/CSV) and deletion endpoints. Consider retention auto-deletion after agreed period.
      </DevNote>
    </div>
  )
}
