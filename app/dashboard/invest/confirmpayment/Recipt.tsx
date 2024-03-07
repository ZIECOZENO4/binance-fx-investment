'use client'
import React from 'react';
import { useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Note } from '@/components/component/note';
import { useUserInfo } from '@/tenstack-hooks/user-info';
import { useRouter } from 'next/router';
interface UserBalanceProps {
  userId: string;
}

interface Investment {
  balance: string;
  symbol: string;
}

const ComfirmPayment: React.FC = () => {
    const { data: userInfo } = useUserInfo();
 const [walletAddress, setWalletAddress] = useState('');
 const [transactionId, setTransactionId] = useState('');
 const { isLoaded, isSignedIn, user } = useUser();
 const router = useRouter();
 const { amount, plan, planId, coin } = router.query;

 // Convert the amount from string to number if needed
 const calculatedAmount = amount ? parseFloat(amount as string) : 0;

 if (!isLoaded) {
    return null;
 }
  const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const handleTransactionIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionId(event.target.value);
  };
  const userBalance = userInfo.balance;
  console.log("this is hte user balance form the backend", userBalance);
  return (
<div className="container">
      <div className="mt-5">
        <div className="w-full mx-auto bg-slate-600 bg-opacity-50 rounded-md">
      
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-sky-800 font-extrabold text-xl my-4 uppercase">Please Confirm Your Payment</h6>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Name</p>
              <p className="text-indigo-600 mr-4">      <SignedIn>
        { isSignedIn &&  <h2> { user && user.firstName ? user.firstName  : user ? user.username : "----- "}</h2>
}
              </SignedIn></p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Payment to</p>
              <p className="text-indigo-600 mr-4">Binance FX</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Wallet Address</p>
              <p className="text-indigo-600 mr-4">0x1b9E45C744c<br />0E2728e5D2418f58d<br />4B924ADb875F</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Time</p>
              <p className="text-indigo-600 mr-4">{new Date().toLocaleTimeString()}</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Balance</p>
              <p className="text-indigo-600 mr-4">    { userBalance !== null ? `$${userBalance.toFixed(2)}` : '0.00 USDT'}</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Plan </p>
              <p className="text-indigo-600 mr-4">{plan}</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Gass Fee</p>
              <p className="text-indigo-600 mr-4">2.665556 Wei</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Plan ID</p>
              <p className="text-indigo-600 mr-4">{planId}</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Amount</p>
              <p className="text-indigo-600 mr-4">{calculatedAmount.toFixed(2)}  {coin}</p>
            </div>
            <div
              className="
                flex flex-col
                justify-between
                items-center
                px-3
                py-5
                w-full
              "
            >
              <Note />
              <div className="mb-5 flex flex-col min-w-full">
              <div className="p-8 gap-6">
                <p className=" items-center align-middle justify-center font-green-600 text-xl font-bold py-4 uppercase text-indigo-600 flex fleex-row">Provide Prove of Payment</p>
      <label htmlFor="walletAddress" className="font-medium text-white text-md">Your Wallet Address</label>
      <input
        type="text"
        id="walletAddress"
        className="w-full py-2 border mt-3 border-gray-300 rounded-md"
        value={walletAddress}
        onChange={handleWalletAddressChange}
      />
      <label htmlFor="transactionId" className="font-medium text-white text-md mt-4 py-2">Transaction ID</label>
      <input
        type="text"
        id="transactionId"
        className="w-full py-2 border mt-2 border-gray-300 rounded-md"
        value={transactionId}
        onChange={handleTransactionIdChange}
      />
    </div>
              </div>
              <button
      className="w-full bg-green-600 text-white px-2 py-2 rounded-md"
   
    >
      Accept
    </button>
            </div>
            <div className="px-3 py-5 border-b-2  border-gray-200">
              <button
                className="
                  min-w-full
                  bg-red-700
                  font-semibold
                  text-white
                  px-2
                  py-2
                  rounded-md
                "
              >
                Reject
              </button>
            </div>
          </div>
        
        </div>
      </div>
      <div className=' bg-white py-5 flex flex-wrap overflow-x-auto justify-start items-start align-middle leading-8 font-bold text-md gap-2 px-2'>
        <p className=" mx-1"><span className="text-red-500 text-xl mr-1">NOTE:<p className='leading-6 text-green-400'>If you click on accept the transaction will automatically procced and it will be withdrawn from your Binance FX wallet, but if you don&apos;t have money in your wallet simply copy the company&apos;s wallet address and make payment, after you provide your wallet address and transaction ID for comfirmation </p>  </span>ALL DEPOSIT SHOULD BE MADE TO COMPANY&apos;S WALLET ADDRESS [0x1b9E45C744c0E2728e5D2418f58d4B924ADb875F], WHEN DONE CLICK ACCEPT FOR THE TRANSACTION TO TAKE PLACE. THANKS FOR INVESTI NG ON BINANCE FX</p>
      </div>
    </div> 


  )
}

export default ComfirmPayment 