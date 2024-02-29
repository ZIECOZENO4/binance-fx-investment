"use client"
// CountdownManagerContext.js
import React, { createContext, useState } from 'react';

const CountdownManagerContext = createContext();

export const CountdownManagerProvider = ({ children }) => {
 const [activeCountdowns, setActiveCountdowns] = useState({});

 const startCountdown = (id, endDate) => {
    setActiveCountdowns(prev => ({ ...prev, [id]: endDate }));
 };

 const stopCountdown = (id) => {
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
