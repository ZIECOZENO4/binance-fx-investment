"use client"
import React from 'react';
import { useEffect, useState } from 'react';

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

const Trade = () => {
  const [data1, setData1] = useState<CoinDataItem[] | null>(null);

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
    <div className='text-bold text-white text-2xl flex-col flex justify-center align-middle'>
      <div className="flex flex-row justify-between mx-8">
        <p className="text-bold">My Trade</p>
        <p className="flex ">Enter</p>
      </div>
      <div className='text-white flex flex-col  '>
      {data1 && data1.map((item, index) => (
        <div key={index} className=' flex flex-col justify-center align-middle items-center w-full py-4'>
        <div className=" ">
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
 NO TRADING YET
        </div>
      

         <div>
           
         </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Trade;