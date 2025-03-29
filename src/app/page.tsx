import NavBar from './components/nav-bar';

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-white dark:bg-gray-900">
      <NavBar />
      
      <header className="py-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          MoneyWhisper
        </h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          Track your expenses with voice commands
        </p>
      </header>

      <main className="max-w-md mx-auto mt-10">
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md">
          <div className="mb-6 text-center">
            <button
              className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Record Expense
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Recent Expenses
            </h2>
            <div className="mt-4 space-y-3">
              {/* Placeholder for expenses list */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No expenses recorded yet. Click the button above to start tracking your expenses.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
