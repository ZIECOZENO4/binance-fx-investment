'use client'
import { useEffect, useState } from 'react';
import Note from "./note"
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton,  } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Basic2 from './Basic2';
import Premium2 from './Premium2';
import Vip2 from './Vip2';
import React from "react";
import {Input} from "@nextui-org/react";
import {MailIcon} from './MailIcon';
import {Button} from "@nextui-org/react";
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
    <div className='text-white h-[200vh] '>
    <div className=' relative md:w-[100vw] w-[100vw] md:h-[50vh] h-[20vh] bg-no-repeat object-cover bg-track flex justify-center items-center align-middle  bg-fixed  '>
    </div>
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
<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18 8.49998H14M18 14.5H14M18 17.5H14M10 8.49999H8M8 8.49999L6 8.49999M8 8.49999L8 6.49998M8 8.49999L8 10.5M9.5 14.5L8.00001 16M8.00001 16L6.50001 17.5M8.00001 16L6.5 14.5M8.00001 16L9.49999 17.5" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
<p className=' md:text-2xl text-sm font-bold font-sans gap-3 text-white'> CALCULATE PROFIT</p>
</div>
      </div>
    <div className='flex flex-row px-2 md:px-[20vw] justify-between pt-8 w-[100vw] bg-slate-700 mt-5 md:mt-10'>
      <motion.header
        onClick={() => setActiveTab('REFERRAL')}
        className={`text-black font-serif  md:text-2xl text-[20px]  font-bold md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'REFERRAL' ? 'bg-white     bg-clip-text text-transparent animate-gradient' : 'bg-slate-700'}`}
        animate={{ scale: activeTab === 'REFERRAL' ? 1.2 : 1 }}
      >
   REFERRAL
      </motion.header>
      <motion.header
        onClick={() => setActiveTab('BOARD')}
        className={`text-black font-serif  md:text-2xl text-[20px]  font-bold md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'BOARD' ? 'bg-white     bg-clip-text text-transparent animate-gradient' : 'bg-slate-700'}`}
      >
   BOARD
      </motion.header>
      <motion.header
        onClick={() => setActiveTab('SHARES')}
        className={`text-black font-serif  md:text-2xl text-[20px]  font-bold md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'SHARES' ? 'bg-white     bg-clip-text text-transparent animate-gradient' : 'bg-slate-700'}`}
      >
  SHARES
      </motion.header>
    </div>
   
    {activeTab === 'REFERRAL' && <div><Basic2 /></div>}
    {activeTab === 'BOARD' && <div><Premium2 /></div>}
    {activeTab === 'SHARES' && <div><Vip2 /></div>}
  </div>
  <div className="flex flex-col justify-center align-middle items-center  p-4">
    <h1 className="flex justify-center align-middle items-center p-4 text-2xl font-serif font-bold text-sky-600">
      PAYMENT
    </h1>
    <p className="flex justify-center align-middle items-center p-4 text-xl font-serif font-bold text-sky-600">Sellect Coin</p>



    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
       <Input
          label="Price"
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
    <Button color="primary" variant="ghost">
      INVEST NOW
      </Button> 
  </div>
    </div>
  );
};

export default Invest;
