"use client";
import React, { useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Note } from '../../../../components/component/note';
import { useUserInfo } from '@/tenstack-hooks/user-info';
import { useRouter } from 'next/navigation';
import { Button } from "@nextui-org/react";
import ConfirmationPopup from './ConfirmationPopup';
import FailedPopup from './failedpopup'; 
import { usePathname } from 'next/navigation'
import { PrismaClient } from '@prisma/client';

interface ComfirmPaymentProps {
 amount: number;
 coin: string;
 plan: string;
 planId: string;
}

const ComfirmPayment: React.FC<ComfirmPaymentProps> = ({ amount, coin, plan, planId }) => {
  const pathname = usePathname();
  const router = useRouter();
  const prisma = new PrismaClient();


 const { data: userInfo } = useUserInfo();
 const [isPopupOpen, setIsPopupOpen] = useState(false);
 const [isFailedPopupOpen, setIsFailedPopupOpen] = useState(false);
 const [walletAddress, setWalletAddress] = useState('');
 const [transactionId, setTransactionId] = useState('');
 const { isLoaded, isSignedIn, user } = useUser();
 const userId = user ? user.id : '-----';
 if (!isLoaded) {
    return null;
 }

 const sendToAdmin = async () => {
  const data = {
    amount: amount.toString(),
    coin,
    plan,
    planId,
    time: new Date().toLocaleTimeString(),
    balance: userBalance !== null ? `$${userBalance.toFixed(2)}` : '0.00 USDT',
    gasFee: '2.665556 Wei',
    userId,
    userName: user !== null ? `$${user.firstName || user.username}` : 'FX Investor',
 };

 
  try {

     const payment = await prisma.payment.create({
       data,
     });
 
     console.log('Payment saved:', payment);
  } catch (error) {
     console.error('Error saving data to the database:', error);
  }
 }; 

if (!isLoaded) {
  return null;
}

const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setWalletAddress(event.target.value);
};

const handleTransactionIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTransactionId(event.target.value);
};

const handleButtonClick = () => {
  sendToAdmin();
  if (userBalance !== null && userBalance <= 0) {
    setIsFailedPopupOpen(true); 
  } else if (userBalance !== null && userBalance < amount) {
    setIsFailedPopupOpen(true);
  } else {
    setIsPopupOpen(true);
  }
};

const handleOkClick = () => {
  setIsPopupOpen(false);
};

const handleFailedOkClick = () => {
  setIsFailedPopupOpen(false); 
};

const calculatedAmount = amount;
const amountString = calculatedAmount.toString();
const shortenedId =
user && user.id
  ? user.id.substring(0, 3) + "..." + user.id.substring(user.id.length - 3)
  : "ID: ---";
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
              <p className="text-gray-400 ml-4">User ID</p>
              <p className="text-indigo-600 mr-4 ">      <SignedIn>
        { isSignedIn &&  <h2>{shortenedId}</h2>
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
              <p className="text-indigo-600 mr-4">{amountString}.00 {coin}</p>
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

<Button
        onClick={handleButtonClick}
        disableRipple
        className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-green-500 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 w-full my-4 mb-3"
        size="lg"
      >
        Payment Confirmed 
      </Button>
      {isFailedPopupOpen && (
        <FailedPopup onClose={handleFailedOkClick} />
      )}
      {isPopupOpen && (
        <ConfirmationPopup
          plan={plan}
          planId={planId}
          amount={amount}
          onClose={handleOkClick}
        />
      )}

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