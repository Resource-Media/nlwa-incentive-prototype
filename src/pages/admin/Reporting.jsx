import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'
import ChartPlaceholder from '../../components/ChartPlaceholder'

const modulePerformance = [
  { module: 'January - Introduction to NLWA', registrations: '847', started: '312', videoComplete: '298', quizAttempted: '291', quizPassed: '245', passRate: '84%', drawEntries: '245' },
  { module: 'February - Reducing Household Waste', registrations: '963', started: '401', videoComplete: '389', quizAttempted: '372', quizPassed: '294', passRate: '79%', drawEntries: '294' },
  { module: 'March - Recycling Right: What Goes Where', registrations: '1,089', started: '456', videoComplete: '423', quizAttempted: '411', quizPassed: '312', passRate: '76%', drawEntries: '312' },
  { module: 'April - Food Waste: Kitchen to Compost', registrations: '1,247', started: '342', videoComplete: '187', quizAttempted: '178', quizPassed: '144', passRate: '81%', drawEntries: '144' },
]

export default function Reporting() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Reports &amp; Analytics</h1>
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-500">Period:</label>
          <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
            <option>January 2026 - April 2026</option>
          </select>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500 mb-1">Total Registrations</p>
          <p className="text-3xl font-bold text-slate-800">1,247</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500 mb-1">Active Users (this month)</p>
          <p className="text-3xl font-bold text-slate-800">342</p>
          <p className="text-xs text-slate-400 mt-1">27% of registered</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500 mb-1">Average Quiz Score</p>
          <p className="text-3xl font-bold text-slate-800">3.8 / 5</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500 mb-1">Prize Draws Completed</p>
          <p className="text-3xl font-bold text-slate-800">3</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <ChartPlaceholder title="Registrations & Participation by Month" type="bar" />
        <ChartPlaceholder title="Content Completion Funnel: Started > Video Complete > Quiz Pass > Draw Entry" type="funnel" />
        <ChartPlaceholder title="Device Breakdown (Desktop / Mobile / Tablet)" type="pie" />
        <ChartPlaceholder title="Registrations by Borough" type="bar" />
      </div>

      {/* Module Performance Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="px-4 py-3 border-b border-slate-200">
          <h2 className="text-sm font-bold text-slate-700">Module Performance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-3 py-3 font-semibold text-slate-600">Module</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Registrations</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Started</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Video Complete</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Quiz Attempted</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Quiz Passed</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Pass Rate</th>
                <th className="px-3 py-3 font-semibold text-slate-600 text-right">Draw Entries</th>
              </tr>
            </thead>
            <tbody>
              {modulePerformance.map((m, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-3 py-3 font-medium text-slate-800">{m.module}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{m.registrations}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{m.started}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{m.videoComplete}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{m.quizAttempted}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{m.quizPassed}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{m.passRate}</td>
                  <td className="px-3 py-3 text-slate-600 text-right">{m.drawEntries}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
          Download Report (CSV)
        </button>
        <button className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg border border-slate-300 transition-colors text-sm">
          Download Report (PDF)
        </button>
      </div>

      {/* Annotations */}
      <Annotation title="Key Metrics (Agreed)">
        Focus on a small set of key metrics for the pilot: registrations, active users, quiz pass rate,
        module completion rates, and per-question performance (to identify ambiguous questions or topics
        that trip users up). Top-line numbers are the most important thing initially.
      </Annotation>

      <Annotation title="Video Analytics via Vimeo (Agreed)">
        Video drop-off analytics (where users stop watching) are valuable but disproportionate to
        rebuild in the platform. Vimeo likely offers native viewer retention data. When selecting
        the video hosting platform, this should be a core required feature rather than a custom build.
      </Annotation>

      <Annotation title="Downloadable Reports (Agreed)">
        Download option confirmed as useful for reporting to senior management over time. TBC whether
        CSV or PDF (or both) will be sufficient. Borough-level data: include a borough field in the
        database in preparation for potential expansion, even though all pilot users are Hackney residents.
      </Annotation>

      <DevNote title="Analytics Implementation">
        Custom analytics dashboard for key platform metrics (charts via Recharts/Chart.js). Video
        analytics from Vimeo native API rather than rebuilt. Per-question performance reporting
        needed. Borough field in database for future expansion reporting.
      </DevNote>
    </div>
  )
}
