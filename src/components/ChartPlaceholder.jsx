export default function ChartPlaceholder({ title, type = 'bar' }) {
  return (
    <div className="w-full border-2 border-dashed border-slate-300 rounded-lg bg-slate-100 flex flex-col items-center justify-center text-slate-500" style={{ height: '200px' }}>
      <span className="text-sm font-semibold mb-1">{title}</span>
      <span className="text-xs uppercase tracking-wide text-slate-400">[{type} chart]</span>
    </div>
  )
}
