


// 'use client'
// import { useEffect, useState } from 'react';
// import React from 'react'

// // Define the shape of the data item
// interface CoinDataItem {
//   name: string;
//   current_price: number;
//   market_cap: number;
//   symbol: string;
//   image: string;
//   market_cap_rank: number;
//   high_24h: number;
//   low_24h: number;
//   price_change_24h: number;
//   market_cap_change_24h: number;
//   circulating_supply: number;
//   total_supply: number;
//   ath: number;
//   last_updated: string;
// }

// const Assets = () => {
//   const [data1, setData1] = useState<CoinDataItem[] | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';
//       const options1 = {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json'
//         }
//       };

//       try {
//         const response1 = await fetch(url1, options1);
//         const result1: CoinDataItem[] = await response1.json();
//         setData1(result1);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='text-white'>
//       {data1 && data1.map((item, index) => (
//         <div>
//         <div key={index} className=' flex flex-row justify-between align-miggle items-center py-4'>
//           <div className="  flex flex-row justify-start items-start align-middle p-2 w-[70%]">
//           <img src={item.image} alt="coin name " className=" h-20 w-20 rounded-ful pl-3"/>
//           <div className=" items-start align-middle justify-start flex flex-col gap-2">
//           <h3 className=' p-2 font-bold text-xl md:text-2xl'>{item.name}</h3>
//           <div className=" flex flex-row  align-middle justify-center">
//                 <p className='  text-md md:text-xl'>{item.current_price}</p>
//                  <p className='  text-sm md:text-md text-green-500 md:ml-2 ml-1'>{item.high_24h}</p>
//           </div>
         
//           </div>
//           </div>
//           <div className='flex flex-col justify-end align-middle items-end px-1 w-[20%]'>
//           <p className=" text-sm text-slate-300 gap-2 uppercase">0 {item.symbol} </p> 
// <p className=" text-sm text-slate-300 gap-2">0 USDT </p> 
//           </div>

//          <div>
           
//          </div>
//         </div>
//         <hr />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Assets
// components/Assets.tsx
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define an interface for the coin data
interface CoinData {
 id: string;
 name: string;
 imageUrl: string;
 usdValue: number;
 rank: number;
 userId: string;
 balance: number;
}

const Assets = ({ userId }: { userId: string }) => {
 // Use the interface to type the coins array
 const [coins, setCoins] = useState<CoinData[]>([]);

 useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(`/api/fetchCoin?userId=${userId}`);
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching custom coins:', error);
      }
    };

    fetchCoins();
 }, [userId]);

 return (
    <div>
      {coins.map((coin) => (
        <div key={coin.id}>
          <img src={coin.imageUrl} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>Rank: {coin.rank}</p>
          <p>USD Value: {coin.usdValue}</p>
          <p>Balance: {coin.balance}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
 );
};

export default Assets;