// contexts/CountdownContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type CountdownContextType = {
  isBasicActive: boolean;
  isAdvanceActive: boolean;
  isProActive: boolean;
  isPremiumActive: boolean;
  startBasic: () => void;
  startAdvance: () => void;
  startPro: () => void;
  startPremium: () => void;
  stop: () => void;
};

const CountdownContext = createContext<CountdownContextType | undefined>(
  undefined
);

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isAdvanceActive, setIsAdvanceActive] = useState(false);
  const [isProActive, setIsProActive] = useState(false);
  const [isPremiumActive, setIsPremiumActive] = useState(false);

  const startBasic = () => setIsBasicActive(true);
  const startAdvance = () => setIsAdvanceActive(true);
  const startPro = () => setIsProActive(true);
  const startPremium = () => setIsPremiumActive(true);
  const stop = () => {
    setIsBasicActive(false);
    setIsAdvanceActive(false);
    setIsProActive(false);
    setIsPremiumActive(false);
  };

  return (
    <CountdownContext.Provider value={{ isBasicActive, isAdvanceActive, isProActive, isPremiumActive, startBasic, startAdvance, startPro, startPremium, stop }}>
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
