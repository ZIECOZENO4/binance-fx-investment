"use client"
import React, { useState, useEffect } from 'react';

const BalanceShow = () => {
  const [currentView, setCurrentView] = useState('account');
  const [investmentIndex, setInvestmentIndex] = useState(0);
  const investments = [
    { balance: '   0.000', symbol: 'ETH' },
    { balance: '   100.000', symbol: 'BTC' },
    { balance: '   200.000', symbol: 'LTC' },
    // Add more investments as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setInvestmentIndex((prevIndex) => (prevIndex +   1) % investments.length);
    },   3000); // Change every   3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, [investments.length]);



  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-200 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 md:px-3 px-10">
      <div className={`absolute w-full transition-transform duration-500 ease-in-out transform ${currentView === 'account' ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="div">
          <div className="flex flex-row justify-between gap-5 md:gap-10">
            <p className="font-bold md:text-2xl text-xl sm:text-md font-sono gap-3">ACCOUNT BALANCE</p>
            <p className="font-bold md:text-xl text-md font-sono gap-3">$   0.000</p>
          </div>
        </div>
      </div>
      <div className={`absolute w-full transition-transform duration-500 ease-in-out transform ${currentView === 'investment' ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="div">
          <div className="flex flex-row justify-between gap-8">
            <p className="font-bold md:text-2xl sm:text-md text-xl font-sono gap-3">INVESTMENT BALANCE</p>
            <p className="font-bold text-md md:text-xl font-sono gap-3">
              {investments[investmentIndex].balance} {investments[investmentIndex].symbol}
            </p>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default BalanceShow;