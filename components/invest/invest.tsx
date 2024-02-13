'use client'
import { useEffect, useState } from 'react';
import Note from "./note"
import { motion } from "framer-motion";
import Basic2 from './Basic2';
import Premium2 from './Premium2';
import Vip2 from './Vip2';

// Define the shape of the data item
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

  return (
    <div className='text-white h-[200vh] '>
    <div className=' relative w-[100vw] h-[50vh] bg-no-repeat object-cover bg-track flex justify-center items-center align-middle  bg-fixed  '>
    </div>
    <Note />
    <div>
    <div className='flex flex-row px-2 md:px-[20vw] justify-between pt-8 w-[100vw] bg-slate-700'>
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
    </div>
  );
};

export default Invest;
