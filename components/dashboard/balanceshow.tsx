"use client"
import React, { useState, useEffect } from 'react';
type ViewType = 'account' | 'investment';

const BalanceShow = () => {
  const [currentView, setCurrentView] = useState('account');
  const [investmentIndex, setInvestmentIndex] = useState(0);
  const investments = [
    { balance: '0.000', symbol: 'ETH' },
    { balance: '100.000', symbol: 'BTC' },
    { balance: '200.000', symbol: 'LTC' },
    // Add more investments as needed
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (currentView === 'investment') {
      timer = setInterval(() => {
        setInvestmentIndex((prevIndex) => (prevIndex +   1) % investments.length);
      },   3000); // Change every   3 seconds
    }

    return () => {
      if (timer) clearInterval(timer); // Clean up on component unmount
    };
  }, [currentView, investments.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-200 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 h-40 md:px-3 px-10">
      {currentView === 'account' && (
        <div className="w-full transition-transform duration-500 ease-in-out transform">
          <div  className="flex flex-col justify-between gap-5 md:gap-10">
            <div className="flex flex-col justify-start gap-5 md:gap-10">
              <p className="font-bold md:text-2xl text-xl sm:text-md font-sono gap-3">ACCOUNT BALANCE</p>
              <p className="font-bold md:text-3xl text-2xl font-serif gap-3">$   0.000</p>
            </div>
          </div>
          <button
          className=" text-white font-bold py-2 px-4 underline text=bold"
          onClick={() => setCurrentView('investment')}
        >
          Show Investment
        </button>
        </div>
      )}
      {currentView === 'investment' && (
        <div className="w-full transition-transform duration-500 ease-in-out transform">
          <div>
            <div className="flex flex-col justify-start gap-8">
              <p className="font-bold md:text-2xl sm:text-md text-xl font-sono gap-3">INVESTMENT BALANCE</p>
              <p className="font-bold md:text-3xl text-2xl font-serif gap-3">
                {investments[investmentIndex].balance} {investments[investmentIndex].symbol}
              </p>
            </div>
          </div>
          <button
          className="text-white font-bold py-2 px-4 underline text=bold"
          onClick={() => setCurrentView('account')}
        >
          Show Account
        </button>
        </div>
      )}
      <div className="flex justify-center mt-4">


      </div>
    </div>
  );
};

export default BalanceShow;