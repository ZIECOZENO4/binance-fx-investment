'use client'
import { useEffect, useState } from 'react';
import Note fromn "./note"
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
    <div className='flex flex-row px-2 md:px-[20vw] justify-between pt-8 w-[100vw]'>
      <motion.header
        onClick={() => setActiveTab('REFERRAL')}
        className={`text-green-800 font-serif  md:text-2xl text-[20px]  font-bold md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'BASIC' ? 'border-green-500  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
        animate={{ scale: activeTab === 'REFERRAL' ? 1.2 : 1 }}
      >
   REFERRAL
      </motion.header>
      <motion.header
        onClick={() => setActiveTab('BOARD')}
        className={`text-[#FFD700]  font-heading font-serif text-[25px]  font-bold md:text-3xl border-b-2 md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'BOARD' ? 'border-[#e9db8b]  rounded-md  bg-gradient-to-r from-[#FFD700] to-[#6d5e07] bg-clip-text text-transparent animate-gradient' : 'border-[#96893e]'}`}
      >
   BOARD
      </motion.header>
      <motion.header
        onClick={() => setActiveTab('SHARES')}
        className={`text-sky-700  font-heading  font-serif   font-bold md:text-2xl text-[20px] border-b-2 mx-2 md:mx-5 pt-4  cursor-pointer ${activeTab === 'SHARES' ? 'border-sky-300   rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
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
