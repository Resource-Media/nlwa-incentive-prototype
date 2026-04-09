export default function DevNote({ title, children }) {
  return (
    <div className="dev-note">
      <div className="dev-note-title">
        <span className="inline-block mr-1">&#x1F527;</span> {title}
      </div>
      <div className="text-blue-900">{children}</div>
    </div>
  )
}
