// contexts/CountdownContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type CountdownContextType = {
  isActive: boolean;
  start: () => void;
  stop: () => void;
};

const CountdownContext = createContext<CountdownContextType | undefined>(
  undefined
);

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);

  return (
    <CountdownContext.Provider value={{ isActive, start, stop }}>
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const context = useContext(CountdownContext);
  if (!context) {
    throw new Error('useCountdown must be used within CountdownProvider');
  }
  return context;
}
