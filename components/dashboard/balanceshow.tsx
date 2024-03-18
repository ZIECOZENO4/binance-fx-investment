
"use client"

import React, { useState, useEffect } from 'react';
import Eye from './eye';
import Noeye from './noeye';
import { useUserInfo } from '@/tenstack-hooks/user-info';

type ViewType = 'account' | 'investment';

interface UserBalanceProps {
 userId: string;
}

interface Investment {
 balance: string;
 symbol: string;
}

const BalanceShow: React.FC = () => {
 const { data: userInfo } = useUserInfo();
 const [currentView, setCurrentView] = useState<ViewType>('account');
 const [investmentIndex, setInvestmentIndex] = useState(0);
 const [isBalanceHidden, setIsBalanceHidden] = useState(() => {
  const saved = localStorage.getItem('isBalanceHidden');
  const initialValue = saved ? JSON.parse(saved) : false;
  return initialValue;
});

 const investments: Investment[] = [
    { balance: '0.000', symbol: 'ETH' },
    { balance: '0.000', symbol: 'BTC' },
    { balance: '0.000', symbol: 'LTC' },
 ];

 useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (currentView === 'investment') {
      timer = setInterval(() => {
        setInvestmentIndex((prevIndex) => (prevIndex + 1) % investments.length);
      }, 3000); // Change every 3 seconds
    }

    return () => {
      if (timer) clearInterval(timer); // Clean up on component unmount
    };
 }, [currentView, investments.length]); // Correctly placed dependency array

 const toggleBalanceVisibility = () => {
  const newIsBalanceHidden = !isBalanceHidden;
  setIsBalanceHidden(newIsBalanceHidden);
  // Update localStorage
  localStorage.setItem('isBalanceHidden', JSON.stringify(newIsBalanceHidden));
};

 // Assuming userBalances.balance contains the user's balance
 const userBalance = userInfo.balance;
 console.log("this is the user balance from the backend", userBalance);

 function formatWithCommas(value: number | string): string {
  let strValue = value.toString().replace(/,/g, '');
  let parts = strValue.split('.');
  let wholePart = parts[0];
  let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  wholePart = wholePart.split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1,').split('').reverse().join('');
  return wholePart + decimalPart;
}



 return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-400 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 h-40 md:px-3 px-10">
      {currentView === 'account' && (
        <div className="w-full transition-transform duration-500 ease-in-out transform">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col justify-start gap-5 md:gap-10">
              <p className="font-bold md:text-2xl text-xl sm:text-md font-sono gap-3">ACCOUNT BALANCE</p>
              <p className="font-bold md:text-4xl text-3xl font-serif gap-3">
              {isBalanceHidden ? '*****' : userBalance !== null ? `$${formatWithCommas(userBalance.toFixed(2))}` : '$  0.00 '}
              </p>
            </div>
            <div onClick={toggleBalanceVisibility}>
              {isBalanceHidden ? <Eye /> : <Noeye />}
            </div>
          </div>
          <button
            className="text-white font-bold py-2 px-4 underline text=bold"
            onClick={() => setCurrentView('investment')}
          >
            Show Investment
          </button>
        </div>
      )}
      {currentView === 'investment' && (
        <div className="w-full transition-transform duration-500 ease-in-out transform">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col justify-start gap-8">
              <p className="font-bold md:text-2xl sm:text-md text-xl font-sono gap-3">INVESTMENT BALANCE</p>
              <p className="font-bold md:text-4xl text-3xl font-serif gap-3">
              {isBalanceHidden
                        ? "*****"
                        : `${investments[investmentIndex].balance} ${investments[investmentIndex].symbol}`}
              </p>
            </div>
            <div onClick={toggleBalanceVisibility}>
              {isBalanceHidden ? <Eye /> : <Noeye />}
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
        {/* ... */}
      </div>
    </div>
 );
};

export default BalanceShow;

