export default function PagePlaceholder({ title }) {
  return (
    <div className="text-center py-20 text-slate-400">
      <div className="inline-block border-2 border-dashed border-slate-300 rounded-lg px-12 py-10">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p>Placeholder - content coming soon</p>
      </div>
    </div>
  )
}
