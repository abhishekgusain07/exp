'use client';

import { useAuth } from './context/auth-context';
import LockScreen from './components/lock-screen';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const { isUnlocked } = useAuth();

  // If the app is locked, show the lock screen
  if (!isUnlocked) {
    return <LockScreen />;
  }

  // Otherwise, show the children
  return <>{children}</>;
} 