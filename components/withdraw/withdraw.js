"use client"
import React from 'react';
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton,  } from "@clerk/nextjs";
import Link from 'next/link';
import  { useState } from 'react';

const WithdrawalPage = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [showPending, setShowPending] = useState(false);
  const [showNoFunds, setShowNoFunds] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return null;
  }
  const handleWithdraw = () => {

    // Assuming you have a function to check balance
    if (checkBalance() ===  0) {
      setShowNoFunds(true);
    } else {
      setShowPending(true);
    }
  };

  const coins = [
    { fullName: 'Bitcoin', symbol: 'BTC' },
    { fullName: 'Ethereum', symbol: 'ETH' },
    // Add other coins as needed
  ];
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            Fast Withdrawal
            </p>

            <div className="mt-5 max-w-2xl">
              <h1 className="block font-bold text-sky-700 text-2xl md:text-4xl lg:text-6xl ">
                WITHDRAW
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-md text-gray-200 ">Always verify the wallet address you&apos;re sending to. A single typo can result in your funds being sent to an unintended address, making them irretrievable</p>
            </div>

            <div className="mt-8 gap-3 flex flex-col justify-center">
          <p className="block font-bold text-white text-xl md:text-2xl  "> Withdrawal Process</p>
          <div className="mt-8 gap-6 flex flex-row justify-center">
  <h1>Withdraw From :</h1>


  <div class="flex max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
    <div class="min-w-0">
      <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">Binance FX</h2>
    </div>
  </div>

</div>
<div>
<div className="p-4">
      <div className="flex justify-between items-center mb-4">
      <SignedIn>
        { isSignedIn &&  <h1 className="text-xl"> { user && user.firstName ? user.firstName  : user ? user.username : "FX User "}</h1> 
}
              </SignedIn>
       
        <p className="text-sm">{new Date().toLocaleTimeString()}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="coinSelect" className="block mb-2">Select Coin</label>
        <select
          id="coinSelect"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setSelectedCoin(coins.find(coin => coin.symbol === e.target.value))}
        >
          <option value="">Select a coin</option>
          {coins.map((coin) => (
            <option key={coin.symbol} value={coin.symbol}>{coin.symbol}</option>
          ))}
        </select>
      </div>

      {selectedCoin && (
        <div className="mb-4">
          <p className="text-lg">{selectedCoin.fullName}</p>
          <p className="text-sm">{selectedCoin.symbol}</p>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="walletAddress" className="block mb-2">Wallet Address</label>
        <input
          type="text"
          id="walletAddress"
          className="w-full p-2 border border-gray-300 rounded"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleWithdraw}
      >
        Withdraw
      </button>

      {showPending && <div>Pending request...</div>}
      {showNoFunds && <div>No available funds. Deposit and invest first.</div>}
    </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalPage;
