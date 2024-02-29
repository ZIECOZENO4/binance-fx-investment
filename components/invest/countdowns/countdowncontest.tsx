"use client"
// CountdownManagerContext.js
import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface CountdownManagerContextValue {
 activeCountdowns: Record<string, Date>;
 startCountdown: (id: string, endDate: Date) => void;
 stopCountdown: (id: string) => void;
}

// Provide a default value for the context
const CountdownManagerContext = createContext<CountdownManagerContextValue>({
 activeCountdowns: {},
 startCountdown: () => {},
 stopCountdown: () => {},
});

export const CountdownManagerProvider = ({ children }: { children: ReactNode }) => {
 const [activeCountdowns, setActiveCountdowns] = useState<Record<string, Date>>({});

 const startCountdown = (id: string, endDate: Date) => {
      setActiveCountdowns(prev => ({ ...prev, [id]: endDate }));
 };

 const stopCountdown = (id: string) => {
      setActiveCountdowns(prev => {
        const newActiveCountdowns = { ...prev };
        delete newActiveCountdowns[id];
        return newActiveCountdowns;
      });
 };

 return (
      <CountdownManagerContext.Provider value={{ activeCountdowns, startCountdown, stopCountdown }}>
        {children}
      </CountdownManagerContext.Provider>
 );
};

export const useCountdownManager = () => React.useContext(CountdownManagerContext);