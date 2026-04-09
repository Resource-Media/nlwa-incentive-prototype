import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const modules = [
  {
    title: 'April 2026 - Food Waste: Kitchen to Compost',
    status: 'Published',
    statusColour: 'bg-green-100 text-green-700',
    publishDate: '1 Apr 2026',
    completions: '187',
    passRate: '81%',
    action: 'Edit',
    actionLink: '/admin/modules/editor',
  },
  {
    title: 'March 2026 - Recycling Right: What Goes Where',
    status: 'Archived',
    statusColour: 'bg-slate-100 text-slate-600',
    publishDate: '1 Mar 2026',
    completions: '423',
    passRate: '76%',
    action: 'View',
    actionLink: '#',
  },
  {
    title: 'February 2026 - Reducing Household Waste',
    status: 'Archived',
    statusColour: 'bg-slate-100 text-slate-600',
    publishDate: '1 Feb 2026',
    completions: '389',
    passRate: '79%',
    action: 'View',
    actionLink: '#',
  },
  {
    title: 'January 2026 - Introduction to NLWA',
    status: 'Archived',
    statusColour: 'bg-slate-100 text-slate-600',
    publishDate: '5 Jan 2026',
    completions: '298',
    passRate: '84%',
    action: 'View',
    actionLink: '#',
  },
  {
    title: 'May 2026 - Textiles and Clothing',
    status: 'Draft',
    statusColour: 'bg-amber-100 text-amber-700',
    publishDate: 'Not set',
    completions: '-',
    passRate: '-',
    action: 'Edit',
    actionLink: '/admin/modules/editor',
  },
]

export default function ModuleList() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Modules</h1>
        <Link
          to="/admin/modules/editor"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          Create New Module
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 font-semibold text-slate-600">Module</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Status</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Publish Date</th>
                <th className="px-4 py-3 font-semibold text-slate-600 text-right">Completions</th>
                <th className="px-4 py-3 font-semibold text-slate-600 text-right">Pass Rate</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((mod, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-slate-800">{mod.title}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${mod.statusColour}`}>
                      {mod.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{mod.publishDate}</td>
                  <td className="px-4 py-3 text-slate-600 text-right">{mod.completions}</td>
                  <td className="px-4 py-3 text-slate-600 text-right">{mod.passRate}</td>
                  <td className="px-4 py-3">
                    <Link to={mod.actionLink} className="text-teal-600 hover:text-teal-800 font-medium">
                      {mod.action}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Annotations */}
      <Annotation title="Publishing Workflow">
        What's the content lifecycle? Draft, Review, Scheduled, Published, Archived? Who approves content before it goes live? Is there a preview/staging step? Does NLWA want scheduled publishing (auto-publish on a set date) or manual?
      </Annotation>

      <Annotation title="Module Archiving">
        When a new module is published, does the previous one automatically archive? Can archived modules be re-published or edited? What about deleting a module entirely?
      </Annotation>

      <DevNote title="CMS Integration">
        Headless CMS (e.g. Sanity) for content storage, or custom database? CMS approach gives NLWA a familiar editing experience. Custom DB gives more control over the publishing workflow.
      </DevNote>
    </div>
  )
}
