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

const Watchlist = () => {
  const [data1, setData1] = useState<CoinDataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en';
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
        <p className="text-bold">My Watchlist</p>
        <p className="md:flex hidden">Edit</p>
      </div>
      <div className='text-white flex flex-col  '>
      {data1 && data1.map((item, index) => (
        <div key={index} className=' flex flex-col justify-between align-miggle items-center w-full py-4'>
          <div className="  flex flex-col justify-start items-start align-middle p-2 w-[60%]">
          <img src={item.image} alt="coin name " className=" h-10 w-10 rounded-ful pl-3"/>
          <h3 className=' p-1 font-bold text-xl md:text-2xl'>{item.name}</h3>
                 <p className='  text-md md:text-xl text-green-500'>{item.symbol}</p>
          </div>
       
          <div className='flex flex-col justify-end align-middle items-end  w-[40%]'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
<p className='  text-md md:text-xl'> $ {item.current_price}</p>
          <p className=" text-sm md:text-md text-slate-300 gap-2 uppercase">{item.price_change_24h} </p> 

          </div>

         <div>
           
         </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Watchlist;