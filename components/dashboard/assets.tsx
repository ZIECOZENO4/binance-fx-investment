


'use client'
import { useEffect, useState } from 'react';
import React from 'react'

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

const Assets = () => {
  const [data1, setData1] = useState<CoinDataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';
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
    <div className='text-white'>
      {data1 && data1.map((item, index) => (
        <div key={index} className=' flex flex-row justify-between align-miggle items-center'>
          <div className="  flex flex-row justify-center items-center align-middle p-2">
          <img src={item.image} alt="coin name " className=" h-20 w-20 rounded-ful pl-3"/>
          <div className=" items-start align-middle justify-start flex flex-col gap-4">
          <h3 className=' p-2 font-bold text-xl md:text-2xl'>{item.name}</h3>
          <div className=" flex flex-row p-2 align-middle justify-center">
                <p className='  text-md md:text-xl'>{item.current_price}</p>
                 <p className='  text-sm md:text-md text-green-500'>{item.high_24h}</p>
          </div>
         
          </div>
          </div>
          <div className='flex flex-col justify-center align-middle items-center px-2'>
          <p className=" text-sm text-slate-300 gap-2">0 {item.symbol} </p> 
<p className=" text-sm text-slate-300 gap-2">0 {item.symbol} </p> 
          </div>

         <div>
           
         </div>
        </div>
      ))}
    </div>
  )
}

export default Assets