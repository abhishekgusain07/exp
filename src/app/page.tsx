import NavBar from './components/nav-bar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container max-w-md px-4 mx-auto">
        <NavBar />
        
        <header className="py-8">
          <h1 className="text-2xl font-medium tracking-tight text-center text-gray-800 dark:text-white">
            Money<span className="font-bold text-blue-600 dark:text-blue-400">Whisper</span>
          </h1>
          <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
            Effortlessly track expenses with voice
          </p>
        </header>

        <main className="py-6">
          <div className="p-6 mb-8 overflow-hidden bg-white dark:bg-gray-900/60 rounded-2xl shadow-sm backdrop-blur-sm ring-1 ring-gray-900/5 dark:ring-white/10">
            <div className="flex items-center justify-center mb-6">
              <button
                className="flex items-center justify-center w-16 h-16 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Tap to record an expense
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Recent Expenses
              </h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Today</span>
            </div>
            
            <div className="space-y-3">
              {/* Empty state for expenses */}
              <div className="flex flex-col items-center justify-center p-6 text-center bg-white/60 dark:bg-gray-900/40 rounded-xl">
                <div className="flex items-center justify-center w-10 h-10 mb-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  No expenses recorded yet
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
