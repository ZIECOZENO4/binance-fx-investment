'use client'
import { useEffect, useState } from 'react';
import Note from "./note"
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Basic2 from './Basic2';
import Premium2 from './Premium2';
import Vip2 from './Vip2';
import React from "react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Link from 'next/link';
import TradeSide from './tradeside';

interface CoinDataItem {
  name: string;
  current_price: number;
  market_cap: number;
  symbol: string;
  image: string;
  market_cap_rank: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  market_cap_change_24h: number;
  circulating_supply: number;
  total_supply: number;
  ath: number;
  last_updated: string;
}

const Invest = () => {
  const [data1, setData1] = useState<CoinDataItem[] | null>(null);
  const [activeTab, setActiveTab] = useState('BOARD');
  useEffect(() => {
    const fetchData = async () => {
      const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
      const options1 = {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const response1 = await fetch(url1, options1);
        const result1: CoinDataItem[] = await response1.json();
        setData1(result1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return null;
  }
  return (
    <div className='text-white h-[330vh]  md:h-[400vh]'>
    <div className=' relative md:w-[100vw] w-[100vw] md:h-[50vh] h-[20vh] bg-no-repeat object-cover bg-track flex justify-center items-center align-middle  bg-fixed  '>
    </div>
    <div className=' flex flex-col md:flex md:justify-between md:flex-row '>
    <div className='px-[1vw] md:w-[55vw] w-[100vw] flex-col  overflow-x-hidden'> 
    <Note />
    <div>
      <div className=" mt-10 md:mt-20 bg-gradient-to-r from-blue-600 to-sky-200 flex-row flex justify-between align-middle items-center p-4">
<div className=" flex  flex-col align-middle items-center justify-center">
<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="64px" height="64px" viewBox="0 0 95.633 95.633" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M93.632,2.24H2c-1.104,0-2,0.896-2,2v87.152c0,1.104,0.896,2,2,2h91.633c1.104,0,2-0.896,2-2V4.24 C95.632,3.135,94.736,2.24,93.632,2.24z M25.606,10.441c5.44,0,9.85,4.409,9.85,9.849s-4.409,9.851-9.85,9.851 s-9.85-4.41-9.85-9.851C15.756,14.851,20.166,10.441,25.606,10.441z M11.602,36.522c2.038-3.304,7.271-4.883,12.24-5.233 c0.585-0.042,1.175,1.251,1.764,1.423c0.589-0.172,1.179-1.465,1.764-1.423c4.969,0.351,10.202,1.93,12.24,5.233 c0,0,7.055,12.263,1.117,19.046H25.606H10.485C4.547,48.785,11.602,36.522,11.602,36.522z M86.566,82.816 c0,0.828-0.672,1.5-1.5,1.5h-75.5c-0.828,0-1.5-0.672-1.5-1.5v-4.125c0-0.828,0.672-1.5,1.5-1.5h75.5c0.828,0,1.5,0.672,1.5,1.5 V82.816z M86.566,67.816c0,0.828-0.672,1.5-1.5,1.5h-75.5c-0.828,0-1.5-0.672-1.5-1.5v-4.125c0-0.828,0.672-1.5,1.5-1.5h75.5 c0.828,0,1.5,0.672,1.5,1.5V67.816z M86.566,52.816c0,0.828-0.672,1.5-1.5,1.5h-24.5c-0.828,0-1.5-0.672-1.5-1.5v-4.125 c0-0.828,0.672-1.5,1.5-1.5h24.5c0.828,0,1.5,0.672,1.5,1.5V52.816z M86.566,37.816c0,0.828-0.672,1.5-1.5,1.5h-24.5 c-0.828,0-1.5-0.672-1.5-1.5v-4.125c0-0.828,0.672-1.5,1.5-1.5h24.5c0.828,0,1.5,0.672,1.5,1.5V37.816z M86.566,24.816 c0,0.828-0.672,1.5-1.5,1.5h-37.5c-0.828,0-1.5-0.672-1.5-1.5v-12.5c0-0.828,0.672-1.5,1.5-1.5h37.5c0.828,0,1.5,0.672,1.5,1.5 V24.816z"></path> </g> </g></svg>
<SignedIn>
        { isSignedIn && <div className=" flex text-header text-md px-2 md:text-2xl font-bold font-sans gap-3 text-white uppercase"> INVESTOR  {user.firstName}</div> }
              </SignedIn>
      <SignedOut>
      <p className=' text-2xl font-bold font-sans gap-3 text-white'> FX INVESTOR</p>
      </SignedOut>
</div>
<div className=" flex  flex-col align-middle items-center justify-center">
<svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M22,11V7.83L12,2.06,2,7.83V11H4v8H2v2H22V19H20V11ZM4,9l8-4.62L20,9H4ZM6,19V11H8v8Zm4,0V11h4v8Zm8,0H16V11h2Z"></path></g></svg>
<p className=' md:text-2xl text-xl font-bold font-sans gap-3 text-white'>BALANCE : $ 0.000</p>
</div>
<div>

</div>
      </div>
    <div className='flex flex-row px-2 md:px-[20vw] justify-between  w-[100vw]  select-none items-center gap-3 rounded-lg border border-sky-500 py-3  text-center align-middle font-sans text-xs font-bold uppercase text-sky-500 transition-all hover:opacity-75 focus:ring focus:ring-sky-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
 mt-5 md:mt-10'>
      <motion.header
        onClick={() => setActiveTab('REFERRAL')}
            className={`text-white font-serif  md:text-2xl text-[20px]  font-bold md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'REFERRAL' ? 'flex select-none items-center gap-3 rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"     bg-clip-text text-transparent animate-gradient' : ''}`}
        animate={{ scale: activeTab === 'REFERRAL' ? 1.2 : 1 }}
      >
   REFERRAL
      </motion.header>
      <motion.header
        onClick={() => setActiveTab('BOARD')}
        className={`text-white font-serif  md:text-2xl text-[20px]  font-bold md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'c' ? 'flex select-none items-center gap-3 rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"     bg-clip-text text-transparent animate-gradient' : ''}`}
        animate={{ scale: activeTab === 'BOARD' ? 1.2 : 1 }}
      >
   BOARD
      </motion.header>
      <motion.header
        onClick={() => setActiveTab('SHARES')}
        className={`text-white font-serif  md:text-2xl text-[20px]  font-bold md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'SHARES' ? 'flex select-none items-center gap-3 rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"     bg-clip-text text-transparent animate-gradient' : ''}`}
        animate={{ scale: activeTab === 'SHARES' ? 1.2 : 1 }}
      >
  SHARES
      </motion.header>
    </div>
   
    {activeTab === 'REFERRAL' && <div><Basic2 /></div>}
    {activeTab === 'BOARD' && <div><Premium2 /></div>}
    {activeTab === 'SHARES' && <div><Vip2 /></div>}
  </div>
  <div className="flex flex-col justify-center align-middle items-center mb-20  mt-4 p-2 border border-white rounded-xl box-border ">
    <h1 className="flex justify-center align-middle items-center p-4 text-2xl font-serif font-bold text-sky-600">
      PAYMENT
    </h1>
    <p className="flex justify-center align-middle items-center p-2 text-xl font-serif font-bold text-sky-600">Select Coin</p>



    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
       <Input
          
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                COIN
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>BTC</option>
                <option>ETH</option>
                <option>BNB</option>
                <option>TRON</option>
                <option>DOGE</option>
                <option>XRP</option>

              </select>
            </div>
          }
          type="number"
        />
      </div>
    </div>  
    <Link href="/dashboard/invest/confirmpayment">
       <Button color="primary" variant="ghost" >
      INVEST NOW
    </Button>
    </Link>

  </div>
  </div>
  <div className='  flex justify-end '>
  <TradeSide /> 
  </div>
    </div>
  
    </div>
  );
};

export default Invest;
