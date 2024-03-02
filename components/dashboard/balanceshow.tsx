"use client"
import React, { useState, useEffect } from 'react';
import { prisma } from '../../prisma/db/db'; 
import Eye from './eye';
import Noeye from './noeye';

type ViewType = 'account' | 'investment';

interface BalanceShowProps {
 userId: string; // Define the type for userId
}

const BalanceShow: React.FC<BalanceShowProps> = ({ userId }) => { // Add type annotation for props
 const [currentView, setCurrentView] = useState<ViewType>('account');
 const [investmentIndex, setInvestmentIndex] = useState(0);
 const [isBalanceHidden, setIsBalanceHidden] = useState(false);
 const [balance, setBalance] = useState<number | null>(null); // Specify that balance can be a number or null
 const investments = [
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

    const fetchBalance = async () => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: userId },
          select: { balance: true },
        });
        setBalance(user?.balance ?? null); // Use null if balance is undefined
      } catch (error) {
        console.error('Failed to fetch balance:', error);
      }
    };

    fetchBalance();

    return () => {
      if (timer) clearInterval(timer); // Clean up on component unmount
    };
 }, [currentView, userId]); // Add userId to the dependency array

 const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
 };

 return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-200 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 h-40 md:px-3 px-10">
      {currentView === 'account' && (
        <div className="w-full transition-transform duration-500 ease-in-out transform">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col justify-start gap-5 md:gap-10">
              <p className="font-bold md:text-2xl text-xl sm:text-md font-sono gap-3">ACCOUNT BALANCE</p>
              <p className="font-bold md:text-4xl text-3xl font-serif gap-3">
                {isBalanceHidden ? '*****' : balance !== null ? `$${balance.toFixed(2)}` : 'Loading...'}
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
      <div className="flex justify-center mt-4">
        {/* ... */}
      </div>
    </div>
  );
};

export default BalanceShow;