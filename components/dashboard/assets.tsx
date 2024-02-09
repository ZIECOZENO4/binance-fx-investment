import React from 'react'
import CMCtable from '../invest/cmc-table/cmcTable'


'use client'
import { useEffect, useState } from 'react';

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
    <div className='text-white'>
      {data1 && data1.map((item, index) => (
        <div key={index} className=' flex flex-row justify-between align-miggle '>
          <div className="  flex flex-row justify-center align-miggle p-2">
          <img src={item.image} alt="coin name " className=" h-32 w-32 rounded-ful"/>
          <div className=" items-start align-middle justify-start flex flex-col gap-4">
          <h3>{item.name}</h3>
          <div>
        
          </div>
                 <p>{item.current_price}</p>
                 <p>{item.high_24h}</p>
          </div>
          </div>

 

        
          
         <div>
           
         </div>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default Assets