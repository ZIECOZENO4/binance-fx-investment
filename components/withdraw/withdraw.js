"use client"
import React from 'react';
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton,  } from "@clerk/nextjs";
import Link from 'next/link';
import  { useState } from 'react';
import {Button} from "@nextui-org/react";
import { useUserInfo } from '@/tenstack-hooks/user-info';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const WithdrawalPage = () => {
  const { data: userInfo } = useUserInfo();
  const [outCoin, setOutCoin] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [outAmount, setOutAmount] = useState('');
  const [showPending, setShowPending] = useState(false);
  const [showNoFunds, setShowNoFunds] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const userId =
  user && user.id
    ? user.id
    : "ID: ---";
  if (!isLoaded) {
    return null;
  }

  const handleWithdraw = async () => {
  if (!walletAddress  || !outCoin ||
    !outAmount) {
    alert('Please provide both wallet address, outamount, coin and transaction ID.');
    return;
 }
 if (!isSignedIn) {
  alert('You must be signed in to make a deposit.');
  return;
}
if (outCoin === 'USD' && parseFloat(outAmount) < 300) {
  alert('The minimum withdrawal amount for USD is 300 USD.');
  return;
}
    if (userInfo.balance === 0 || userInfo.balance === null || parseFloat(outAmount) > parseFloat(userInfo.balance)) {
       setShowNoFunds(true);
    } else {
       setShowPending(true);
       try {
        const data = {
          gasFee: '0.00234123 Wei',
          time: new Date().toISOString(),
          walletAddress,
          userId, 
          userName: user !== null ? `${user.firstName || user.username}` : 'FX Investor',
          outCoin,
          outAmount,
        };
        
         const response = await fetch('/api/outInvest', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
         });
   
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
   
         const responseData = await response.json();
         console.log(responseData);
         toast.success("Withdrawal request sent successfully!, Plase await confirmation.", {
          position: "top-center",
          theme: "colored",
       });
         setShowPending(false);
       } catch (error) {
         console.error('Error sending withdrawal request:', error);
         toast.error("Error sending withdrawal request to admin: Please check your balance ", {
          position: "top-right",
 
       });
         setShowPending(false);
       }
    }
   };
   
  const coins = [
    { fullName: 'Us-Dollar', symbol: 'USD' },
    { fullName: 'Bitcoin', symbol: 'BTC' },
    { fullName: 'Ethereum', symbol: 'ETH' },
    { fullName: 'Binance', symbol: 'BNB' },
    { fullName: 'Tron', symbol: 'TRON' },   
    { fullName: 'Doge', symbol: 'DOGE' },
    { fullName: 'XRP', symbol: 'XRP' },
    { fullName: 'Tether', symbol: 'USDT' },
    { fullName: 'Solana', symbol: 'SOL' },
    { fullName: 'Ripple', symbol: '' },
    { fullName: 'Lido', symbol: 'STETH' },   
    { fullName: 'Doge', symbol: 'DOGE' },
    { fullName: 'Avalanche-2', symbol: 'AVAX' },
  ];

  const userBalance = userInfo.balance;
  console.log("this is hte user balance form the backend", userBalance);
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
  <h1 className="font-bold text-white  justify-start items-start align-middle text-xl md:text-2xl w-[40vw] ">Withdraw From :</h1>


  <div class="flex  items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg  w-[60vw] ">
    <div class="min-w-0">
      <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">Binance FX</h2>
    </div>
  </div>

</div>
<div className="mt-8 gap-2 flex flex-row  justify-start items-start align-middle  w-[100vw] ">
  <h1 className="font-bold text-white text-md md:text-2xl justify-start items-start align-middle   w-[40vw] ">Withdrawer&apos;s Name :</h1>


  <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2  w-[60vw] text-emerald-900 shadow-lg">
    <div class="min-w-0">
      
      <SignedIn>
        { isSignedIn &&  <h2 class="overflow-hidden text-ellipsis  whitespace-nowrap"> { user && user.firstName ? user.firstName  : user ? user.username : "FX User "}</h2>
}
              </SignedIn>
    </div>
  </div>

</div>
<div className="mt-8 gap-6 flex flex-row  justify-start items-start align-middle  w-[100vw] ">
  <h1 className="font-bold text-white text-md md:text-2xl  justify-start items-start align-middle  w-[40vw]   ">Available Balance :</h1>


  <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2  w-[60vw] text-emerald-900 shadow-lg">
    <div class="min-w-0">
 <h2 class="overflow-hidden text-ellipsis  whitespace-nowrap">   { userBalance !== null ? `$${userBalance.toFixed(2)}` : '0.00 USDT'}</h2>
    </div>
  </div>

</div>
<div className="mt-8 gap-6 flex flex-row  justify-start items-start align-middle  w-[100vw] ">
  <h1 className="font-bold text-white text-md md:text-2xl  justify-start items-start align-middle w-[40vw]  ">Transaction Time :</h1>


  <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2 text-emerald-900 shadow-lg  w-[60vw] ">
    <div class="min-w-0">
  <h2 class="overflow-hidden text-ellipsis font-bold  whitespace-nowrap">{new Date().toLocaleTimeString()}</h2>

    </div>
  </div>

</div>
<div className="mt-8 gap-6 flex flex-row  justify-start items-start align-middle  w-[100vw] ">
  <h1 className="font-bold text-white text-md md:text-2xl  w-[40vw]  justify-start items-start align-middle ">Gass Fee :</h1>


  <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2 text-emerald-900 shadow-lg  w-[60vw] ">
    <div class="min-w-0">
  <h2 class="overflow-hidden text-ellipsis font-bold  whitespace-nowrap">0.00234123 wei</h2>

    </div>
  </div>

</div>
<div>
<div className="p-4 mx-8 flex justify-center flex-col items-center align-middle w-[100vw]">
      <div className="flex justify-start flex-col items-start mb-4 w-[100vw]">
   
           <div className="mt-8 gap-3 flex flex-row   justify-between items-center align-middle">
  <h1 className="font-bold text-white text-xl md:text-2xl  justify-start items-start align-middle w-[40vw]  ">Amount :</h1>
 
    <div className="font-bold text-white text-xl md:text-2xl flex flex-row justify-center items-center align-middle w-[60vw]  ">
    <input
          type="number"
      
          className=" p-2 border border-gray-300 w-[30vw] rounded text-black"
          value={outAmount}
          onChange={(e) => setOutAmount(e.target.value)}
        />

<select
  id="coinSelect"
  className="p-2 border border-gray-300 w-[30vw] text-black rounded"
  value={outCoin}
  onChange={(e) => setOutCoin(e.target.value)} // Directly store the selected coin's symbol
>
  <option value="">Select</option>
  {coins.map((coin) => (
    <option key={coin.symbol} value={coin.symbol}>{coin.symbol}</option>
  ))}
</select>

    </div>
   
</div>
      <div className="mb-4 flex flex-row mt-8  w-[100vw] justify-between">
        <label htmlFor="walletAddress" className="block mb-2 font-bold  w-[40vw]  text-xl md:text-2xl  justify-start items-start align-middle">Wallet Address :</label>
        <input
          type="text"
          id="walletAddress"
          className=" p-2 border border-gray-300 rounded  w-[60vw] text-black "
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>
   
      </div>
  
      <div className=' flex flex-row justify-between items-start align-middle items-center gap-4 mx-8  p-5  w-[100vw] '>
       <button
        className="bg-green-500 text-white px-4 py-2 rounded  w-[50vw] "
       
      >
        Share
      </button>
    <Button
      disableRipple
      className="relative flex flex-col m-2  h-12 align-middle overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0  w-[50vw] "
      size="lg"
      onClick={handleWithdraw}
    >

      <p className="font-bold text-white">Withdraw</p>  
    </Button>
   
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
