import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const calendarData = [
  { month: 'January', module: 'Introduction to NLWA', status: 'Archived', statusColour: 'bg-slate-100 text-slate-600', contentDeadline: '-', publishDate: '5 Jan' },
  { month: 'February', module: 'Reducing Household Waste', status: 'Archived', statusColour: 'bg-slate-100 text-slate-600', contentDeadline: '-', publishDate: '1 Feb' },
  { month: 'March', module: 'Recycling Right: What Goes Where', status: 'Archived', statusColour: 'bg-slate-100 text-slate-600', contentDeadline: '-', publishDate: '1 Mar' },
  { month: 'April', module: 'Food Waste: Kitchen to Compost', status: 'Published', statusColour: 'bg-green-100 text-green-700', contentDeadline: '25 Mar', publishDate: '1 Apr' },
  { month: 'May', module: 'Textiles and Clothing', status: 'Draft', statusColour: 'bg-amber-100 text-amber-700', contentDeadline: '20 Apr', publishDate: '1 May' },
  { month: 'June', module: 'Garden Waste and Composting', status: 'Planned', statusColour: 'bg-blue-100 text-blue-700', contentDeadline: '18 May', publishDate: '1 Jun' },
  { month: 'July', module: 'Electrical Waste and Batteries', status: 'Planned', statusColour: 'bg-blue-100 text-blue-700', contentDeadline: '15 Jun', publishDate: '1 Jul' },
  { month: 'August', module: 'Reducing Plastic Use', status: 'Not started', statusColour: 'bg-slate-50 text-slate-400', contentDeadline: '13 Jul', publishDate: '1 Aug' },
]

export default function ContentCalendar() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Content Calendar</h1>
        <div>
          <label className="text-sm text-slate-500 mr-2">Year:</label>
          <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
            <option>2026</option>
          </select>
        </div>
      </div>

      {/* Calendar Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 font-semibold text-slate-600">Month</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Module</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Status</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Content Deadline</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Publish Date</th>
              </tr>
            </thead>
            <tbody>
              {calendarData.map((row, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 1 ? 'bg-slate-50' : 'bg-white'} ${
                    row.month === 'April' ? 'ring-2 ring-inset ring-teal-300' : ''
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-slate-800">
                    {row.month}
                    {row.month === 'April' && (
                      <span className="ml-2 text-xs text-teal-600 font-normal">current</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{row.module}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${row.statusColour}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.contentDeadline}</td>
                  <td className="px-4 py-3 text-slate-600">{row.publishDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Upcoming Deadlines</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm">
            <span className="text-amber-500 text-lg leading-none">&#9888;</span>
            <div>
              <p className="font-medium text-slate-800">May module content due: 20 April 2026 <span className="text-amber-600 font-bold">(11 days)</span></p>
              <p className="text-xs text-slate-500">Textiles and Clothing - currently in Draft status</p>
            </div>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="text-slate-400 text-lg leading-none">&#128197;</span>
            <div>
              <p className="font-medium text-slate-700">June module content due: 18 May 2026</p>
              <p className="text-xs text-slate-500">Garden Waste and Composting - Planned</p>
            </div>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="text-amber-500 text-lg leading-none">&#9888;</span>
            <div>
              <p className="font-medium text-slate-800">Quiz for May module: <span className="text-amber-600">Not yet created</span></p>
              <Link to="/admin/quizzes/editor" className="text-xs text-teal-600 hover:text-teal-800">Create quiz</Link>
            </div>
          </li>
        </ul>
      </div>

      {/* Annotations */}
      <Annotation title="Content Planning Horizon">
        How far ahead does NLWA plan module topics? Is there a fixed annual calendar aligned with recycling campaigns, or ad-hoc month by month? Who decides the topics? Aligning with existing NLWA campaigns (e.g. Recycle Week, food waste action week) could amplify impact.
      </Annotation>

      <Annotation title="Content Production Timeline">
        What lead time does NLWA need to produce a video and text content for each module? The calendar assumes a 2-week deadline before publication. Is this realistic? Who is responsible for tracking these deadlines?
      </Annotation>

      <Annotation title="Seasonal Considerations">
        Some months may have more relevant topics (garden waste in summer, heating/energy in winter). Should the calendar be flexible, or is there value in a predictable schedule that users expect?
      </Annotation>

      <DevNote title="Calendar/Scheduling System">
        Module scheduling with auto-publish on set date. Email reminders to admin team when content deadlines approach. Integration with CMS status workflow (Draft, Ready, Scheduled, Published).
      </DevNote>
    </div>
  )
}
