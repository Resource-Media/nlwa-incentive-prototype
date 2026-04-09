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
      <Annotation title="Reporting Requirements">
        These are suggested metrics based on the specification. Which reports does NLWA actually need? Who sees them - just the comms team, or also senior management and councillors? Are there specific KPIs or targets the scheme needs to hit?
      </Annotation>

      <Annotation title="Borough-Level Data">
        Reporting by borough requires accurate postcode-to-borough mapping. Is borough-level participation data important for NLWA? If yes, this strengthens the case for the address verification stretch goal.
      </Annotation>

      <Annotation title="Reporting Frequency">
        Real-time dashboard, or periodic exports? Monthly reports to stakeholders? Consider: automated email reports to senior management?
      </Annotation>

      <DevNote title="Analytics Implementation">
        Options: custom analytics dashboard (charts via Recharts/Chart.js), or integrate with existing analytics tools (Google Analytics, Plausible). Custom gives full control; third-party reduces build effort. Data warehouse for complex queries.
      </DevNote>
    </div>
  )
}
