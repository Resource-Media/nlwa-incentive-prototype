export default function Annotation({ title, children }) {
  return (
    <div className="annotation">
      <div className="annotation-title">
        <span className="inline-block mr-1">&#x2753;</span> {title}
      </div>
      <div className="text-amber-900">{children}</div>
    </div>
  )
}
