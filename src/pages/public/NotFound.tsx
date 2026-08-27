export const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-7xl font-bold text-blue-600">
              404
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Page not found
            </h1>

            <p className="text-sm text-slate-500">
              Sorry, the page you are looking for doesn't exist or
              may have been moved.
            </p>
          </div>

          <a
            href="/"
            className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 cursor-pointer"
          >
            Back to dashboard
          </a>

          <p className="text-xs text-slate-400">
            Product Management System
          </p>
        </div>
      </div>
    </div>
  )
}
