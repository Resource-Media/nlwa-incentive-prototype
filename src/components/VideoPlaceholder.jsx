export default function VideoPlaceholder({ progress = 0, completed = false }) {
  return (
    <div className="relative w-full bg-slate-200 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
      {/* Centre icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {completed ? (
          <>
            <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="mt-2 text-green-700 font-semibold text-sm">Completed</span>
          </>
        ) : (
          <>
            <svg className="w-16 h-16 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="mt-2 text-slate-500 text-sm font-medium">15:00</span>
          </>
        )}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-300">
        <div
          className={`h-full transition-all ${completed ? 'bg-green-500' : 'bg-teal-500'}`}
          style={{ width: `${completed ? 100 : progress}%` }}
        />
      </div>
    </div>
  )
}
