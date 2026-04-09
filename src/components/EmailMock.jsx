export default function EmailMock({ subject, from, children }) {
  return (
    <div className="email-mock">
      <div className="email-mock-header">
        <div><strong>From:</strong> {from}</div>
        <div><strong>Subject:</strong> {subject}</div>
        <div><strong>To:</strong> resident@example.com</div>
      </div>
      <div className="email-mock-body">
        {children}
      </div>
    </div>
  )
}
