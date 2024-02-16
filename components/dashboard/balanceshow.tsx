"use client"

import React, { useState, useEffect } from 'react';

const BalanceShow = () => {
  const [showInvestment, setShowInvestment] = useState(false);
  const [investmentIndex, setInvestmentIndex] = useState(0);
  const investments = [
    { balance: '$  0.000', symbol: 'ETH' },
    { balance: '$  100.000', symbol: 'BTC' },
    { balance: '$  200.000', symbol: 'LTC' },
    // Add more investments as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setInvestmentIndex((prevIndex) => (prevIndex +  1) % investments.length);
    },  3000); // Change every  3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, [investments.length]);

  const handlePrev = () => {
    setInvestmentIndex((prevIndex) => (prevIndex -  1 + investments.length) % investments.length);
  };

  const handleNext = () => {
    setInvestmentIndex((prevIndex) => (prevIndex +  1) % investments.length);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-sky-200 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 md:px-3 px-10">
      <div className="div">
        <div className="flex flex-row justify-between gap-5 md:gap-10">
          <p className="font-bold md:text-2xl text-xl sm:text-md font-sono gap-3">ACCOUNT BALANCE</p>
          <p className="font-bold md:text-xl text-md font-sono gap-3">$  0.000</p>
        </div>
      </div>

      {showInvestment && (
        <div className="div">
          <div className="flex flex-row justify-between gap-8">
            <p className="font-bold md:text-2xl sm:text-md text-xl font-sono gap-3">INVESTMENT BALANCE</p>
            <p className="font-bold text-md md:text-xl font-sono gap-3">
              {investments[investmentIndex].balance} {investments[investmentIndex].symbol}
            </p>
          </div>
          <div className="flex justify-between">
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      <button onClick={() => setShowInvestment(!showInvestment)}>
        {showInvestment ? 'Hide Investment' : 'Show Investment'}
      </button>
    </div>
  );
};

export default BalanceShow;