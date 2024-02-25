"use client"
import React from 'react';
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton,  } from "@clerk/nextjs";
import Link from 'next/link';
import  { useState } from 'react';
import {Button} from "@nextui-org/react";
const WithdrawalPage = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
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
    { fullName: 'Binance', symbol: 'BNB' },
    { fullName: 'Tron', symbol: 'TRON' },   
    { fullName: 'Doge', symbol: 'DOGE' },
    { fullName: 'XRP', symbol: 'XRP' },
  ];
  return (
    <div className="relative overflow-hidden">
   

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-black">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-md font-medium bg-clip-text text-sky-700 ">
            Fast Withdrawal
            </p>

            <div className="mt-2 max-w-2xl">
              <h1 className="block font-bold text-blue-600 text-3xl md:text-4xl lg:text-6xl ">
                WITHDRAW
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-md text-gray-200 ">Always verify the wallet address you&apos;re sending to. A single typo can result in your funds being sent to an unintended address, making them irretrievable</p>
            </div>

            <div className="mt-14 gap-3 flex flex-col  text-white font-bold justify-start items-start align-middle">
          <p className="block font-bold text-white text-2xl md:text-2xl justify-center items-center align-middle mr-4"> Withdrawal Process</p>
          <div className="mt-8 gap-6 flex flex-row  justify-start items-start align-middle w-[100vw]">
  <h1 className="font-bold text-white text-xl md:text-2xl w-[50vw] ">Withdraw From :</h1>


  <div class="flex  items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg  w-[50vw] ">
    <div class="min-w-0">
      <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">Binance FX</h2>
    </div>
  </div>

</div>
<div className="mt-8 gap-2 flex flex-row  justify-start items-start align-middle  w-[100vw] ">
  <h1 className="font-bold text-white text-xl md:text-2xl   w-[50vw] ">Withdrawer&apos;s Name :</h1>


  <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2  w-[50vw] text-emerald-900 shadow-lg">
    <div class="min-w-0">
      
      <SignedIn>
        { isSignedIn &&  <h2 class="overflow-hidden text-ellipsis  whitespace-nowrap"> { user && user.firstName ? user.firstName  : user ? user.username : "FX User "}</h2>
}
              </SignedIn>
    </div>
  </div>

</div>
<div className="mt-8 gap-6 flex flex-row  justify-start items-start align-middle  w-[100vw] ">
  <h1 className="font-bold text-white text-xl md:text-2xl  w-[50vw]   ">Available Balance :</h1>


  <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2  w-[50vw] text-emerald-900 shadow-lg">
    <div class="min-w-0">
 <h2 class="overflow-hidden text-ellipsis  whitespace-nowrap">0.00</h2>
    </div>
  </div>

</div>
<div className="mt-8 gap-6 flex flex-row  justify-start items-start align-middle  w-[100vw] ">
  <h1 className="font-bold text-white text-xl md:text-2xl  w-[50vw]  ">Transaction Time :</h1>


  <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2 text-emerald-900 shadow-lg  w-[50vw] ">
    <div class="min-w-0">
  <h2 class="overflow-hidden text-ellipsis font-bold  whitespace-nowrap">{new Date().toLocaleTimeString()}</h2>

    </div>
  </div>

</div>
<div className="mt-8 gap-6 flex flex-row  justify-start items-start align-middle  w-[100vw] ">
  <h1 className="font-bold text-white text-xl md:text-2xl  w-[50vw]  ">Gass Fee :</h1>


  <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2 text-emerald-900 shadow-lg  w-[50vw] ">
    <div class="min-w-0">
  <h2 class="overflow-hidden text-ellipsis font-bold  whitespace-nowrap">0.00234123 wei</h2>

    </div>
  </div>

</div>
<div>
<div className="p-4">
      <div className="flex justify-between items-center mb-4">
   
           <div className="mt-8 gap-6 flex flex-row   justify-between items-start align-middle">
  <h1 className="font-bold text-white text-xl md:text-2xl  w-[30vw]  ">Amount :</h1>
    <div class="Flex flex-row gap-5">
    <div className="mb-4">
    
    <input
          type="text"
      
          className="w-[30vw] p-2 border border-gray-300 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    <div className="mb-4">

        <select
          id="coinSelect"
          className="w-[40vw] p-2 border border-gray-300 rounded"
          onChange={(e) => setSelectedCoin(coins.find(coin => coin.symbol === e.target.value))}
        >
          <option value="">Select </option>
          {coins.map((coin) => (
            <option key={coin.symbol} value={coin.symbol}>{coin.symbol}</option>
          ))}
        </select>
      </div>
    </div>
</div>
      <div className="mb-4 flex flex-row  w-[100vw] justify-between">
        <label htmlFor="walletAddress" className="block mb-2  w-[50vw] ">Wallet Address </label>
        <input
          type="text"
          id="walletAddress"
          className=" p-2 border border-gray-300 rounded  w-[50vw] "
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>
   
      </div>
  
      <div className=' flex flex-row justify-between align-middle items-center gap-4 px-3 py-5  w-[100vw] '>
    <Button
      disableRipple
      className="relative flex flex-col m-2  h-auto align-middle overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0  w-[60vw] "
      size="lg"
      onClick={handleWithdraw}
    >

      <p className="font-bold text-white">Withdraw</p>  
    </Button>
    <button
        className="bg-green-500 text-white px-4 py-2 rounded  w-[40vw] "
       
      >
        Share
      </button>
      </div>
  

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
