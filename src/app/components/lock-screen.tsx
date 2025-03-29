'use client';

import { useState } from 'react';
import { useAuth } from '../context/auth-context';

export default function LockScreen() {
  const { unlock } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = unlock(password);
    if (!success) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-black">
      <div className="w-full max-w-sm px-8 py-10 mx-4 backdrop-blur-sm bg-white/80 dark:bg-black/40 rounded-2xl shadow-xl dark:shadow-gray-900/30">
        <div className="text-center">
          <h2 className="text-2xl font-medium tracking-tight text-gray-800 dark:text-white">
            Money<span className="font-bold text-blue-600 dark:text-blue-400">Whisper</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3.5 text-sm ${
                error ? 'border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-400'
              } bg-white/60 dark:bg-gray-900/60 text-gray-900 dark:text-white rounded-lg outline-none transition-all border ${
                error ? 'animate-shake' : ''
              }`}
              placeholder="Enter password"
              required
              autoFocus
            />
            {error && (
              <p className="mt-2 text-xs font-medium text-red-500">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-3 mt-6 text-sm font-medium text-white transition-all bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
} 