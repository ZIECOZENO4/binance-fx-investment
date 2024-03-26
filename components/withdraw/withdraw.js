"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import {Input} from "@nextui-org/react";
import { useUserInfo } from '@/tenstack-hooks/user-info';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Withdrawal2 } from '../component/with2';
import {Card,Checkbox, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
const WithdrawalPage = () => {
  const { data: userInfo } = useUserInfo();
  const [outCoin, setOutCoin] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [outAmount, setOutAmount] = useState('');
  const [showPending, setShowPending] = useState(false);
  const [showNoFunds, setShowNoFunds] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const userId = user && user.id ? user.id : "ID: ---";

  const handleWithdraw = async () => {
    if (!walletAddress || !outCoin || !outAmount) {
      alert('Please provide both wallet address, outamount, coin and transaction ID.');
      return;
    }
    if (!isSignedIn) {
      alert('You must be signed in to make a deposit.');
      return;
    }
    if (outCoin === 'USDT' && parseFloat(outAmount) < 300) {
      alert('The minimum withdrawal amount for USDT is 300 USD.');
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
        toast.success("Withdrawal request sent successfully!, Please await confirmation.", {
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
  
  function formatWithCommas(value) {
    let strValue = value.toString().replace(/,/g, '');
    let parts = strValue.split('.');
    let wholePart = parts[0];
    let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
    wholePart = wholePart.split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1,').split('').reverse().join('');
    return wholePart + decimalPart;
}

  const coins = [
    { fullName: 'Us-Dollar', symbol: 'USDT' },
    { fullName: 'Bitcoin', symbol: 'BTC' },
    { fullName: 'Ethereum', symbol: 'ETH' },
    { fullName: 'Binance', symbol: 'BNB' },
    { fullName: 'Tron', symbol: 'TRON' },   
    { fullName: 'Doge', symbol: 'DOGE' },
    { fullName: 'XRP', symbol: 'XRP' },
    { fullName: 'Tether', symbol: 'USDT' },
    { fullName: 'Solana', symbol: 'SOL' },
    { fullName: 'Ripple', symbol: 'RPP' },
    { fullName: 'Lido', symbol: 'STETH' },   
    { fullName: 'Doge', symbol: 'DOGE' },
    { fullName: 'Avalanche-2', symbol: 'AVAX' },
  ];

  const userBalance = userInfo.balance;
  console.log("this is hte user balance form the backend", userBalance);
  return (
    <div className="relative overflow-hidden">
   

      <div className="flex flex-col items-center justify-center align-middle mx-3 overflow-hidden bg-black">
      <p className="inline-block text-md flex flex-row font-medium bg-clip-text text-sky-700 ">
            Fast Withdrawal
            </p>

            <div className="mt-2 max-w-2xl">
              <h1 className="block font-bold text-blue-600 text-3xl md:text-4xl lg:text-6xl ">
                WITHDRAW
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-sm text-gray-200 flex justify-center align-middle ">Always verify the wallet address you&apos;re sending to. A single typo can result in your funds being sent to an unintended address, making them irretrievable</p>
            </div>
            <div>

    <div className="w-full gap-2 my-4 grid grid-cols-12 grid-rows-2 px-4">

    <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-4 flex-col items-start">
        <p className="text-xl text-white uppercase font-bold">Wallet Balance</p>
        <h4 className="text-black font-bold text-3xl mt-1">{ userBalance !== null ? `$${formatWithCommas(userBalance.toFixed(2))}` : '0.00 USDT'}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/images/R.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Withdrawal History.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
 
  </div>

  <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4">
          <h2 className="text-xl font-semibold mb-4">Withdrawal Details</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="type">
            Withdrawal  Type
            </label>
            <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 p-2  w-[60vw] text-emerald-900 shadow-lg">
    <div class="min-w-0">
<h4  className="overflow-hidden text-ellipsis whitespace-nowrap">Wallet Balance</h4>
    </div>
  </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Duration</label>
            <div className="flex gap-2">
              <Button className="flex-1 bg-red-300">24 Hours</Button>
              <Button className="flex-1 bg-slate-500">1 Hour</Button>
              <Button className="flex-1 hover:bg-green-200 bg-green-500 text-black ">10 sec</Button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="type">
            Withdrawal From
            </label>
            <div class="flex  items-center border-l-8 border-emerald-500 bg-emerald-50 px-4 text-emerald-900 shadow-lg  w-full ">
    <div className="min-w-0">
      <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">Binance FX Wallet</h2>
    </div>
  </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="type">
            Withdrawer&apos;s Name :
            </label>
            <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 px-2  w-full text-emerald-900 shadow-lg">
    <div class="min-w-0">
      
      <SignedIn>
        { isSignedIn &&  <h2 class="overflow-hidden text-ellipsis  whitespace-nowrap"> { user && user.firstName ? user.firstName  : user ? user.username : "FX User "}</h2>
}
              </SignedIn>
    </div>
  </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="type">
            Available Balance 
            </label>
            <div class="flex max-w-md items-center border-l-8 border-emerald-500 bg-emerald-50 px-2  w-full text-emerald-900 shadow-lg">
    <div class="min-w-0">
 <h2 class="overflow-hidden text-ellipsis  whitespace-nowrap">   { userBalance !== null ? `$${formatWithCommas(userBalance.toFixed(2))}` : '0.00 USDT'}</h2>
    </div>
  </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="type">
            Withdrawal  Time
            </label>
            {new Date().toLocaleTimeString()}
          </div>
          <div className="mb-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input type="number" variant="underlined" value={outAmount} 
              onChange={(e) => setOutAmount(e.target.value)}
          label="Amount" placeholder="Enter Amount" />
        </div>
          </div>
          <div className="mb-4">
    <div className="w-full flex flex-col gap-4">
        <div  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select 
            variant="underlined"
            label="Select Currency" 
            className="w-full px-2" 
            id="coinSelect"
            value={outCoin}
            onChange={(e) => setOutCoin(e.target.value)}
          >
            {coins.map((coin) => (
              <SelectItem  key={coin.symbol} value={coin.symbol}>
              {coin.symbol}
              </SelectItem>
            ))}
          </Select>
        </div> 
    </div>  


          </div>
          <div className="mb-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input   type="text"
          id="walletAddress" variant="underlined"          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          label="Wallet Address" placeholder="Wallet Address" />
        </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-sm">withdrawal Date</span>
                <span className="text-sm font-medium">  {new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Prefered Currency</span>
                <span className="text-sm font-medium">USDT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Max Time</span>
                <span className="text-sm font-medium">30 Sec</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Max Days</span>
                <span className="text-sm font-medium">2 Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Gas Fee</span>
                <span className="text-sm font-medium">0.00234123 FX</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Min Currency Value</span>
                <span className="text-sm font-medium">200 USDT</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-sm">Est. FX</span>
                <span className="text-sm font-medium">21.54%</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm">Estimated Interests</p>
              <p className="text-sm text-yellow-600 bg-yellow-100 p-2 rounded">
                The APY is adjusted daily based on the on-chain FX Investment, and the specific FX is subject to the
                page display on the day.
              </p>
            </div>
            <div className="flex items-center mb-4">
              <Checkbox id="terms" />
              <label className="text-sm ml-2" htmlFor="terms">
                I have read and I agree to{""}
                <a className="text-blue-600" href="#">
                  Binance FX Investment Service Agreement
                </a>
              </label>
            </div>
            <div className=' flex flex-col justify-center gap-4 px-2 mt-3'>
            <Button
      disableRipple
      className="relative flex flex-col  h-12 align-middle overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0  w-full bg-green-500 "
      size="lg"
      onClick={handleWithdraw}
    >

      <p className="font-bold text-white">Withdraw</p>  
    </Button>
    {showPending && <div>Pending request...</div>}
      {showNoFunds && <div>No available funds. Deposit and invest first.</div>}
            <Button className="w-full bg-sky-500 text-white rounded-lg font-bold">Share</Button>
            </div>
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
