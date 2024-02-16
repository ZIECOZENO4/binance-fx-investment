"use client"
import React, { useEffect, useRef, useState } from 'react';

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

const AutoScrollingComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<CoinDataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
      const options = {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const response = await fetch(url, options);
        const result: CoinDataItem[] = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollAmount =   10; // Increase this value to increase the scroll speed
    const interval = setInterval(() => {
      scrollContainer.scrollLeft += scrollAmount; // Use scrollLeft for horizontal scrolling
    },   50); // Decrease this value to increase the frequency of scrolling

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-[100vw] fixed left-0 overflow-auto h-16 bg-gradient-to-r from-blue-600 to-sky-200 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 md:px-3 px-10 z-80"
      style={{ whiteSpace: 'nowrap' }} // Prevent wrapping of content
    >
      {data && data.map((item, index) => (
        <div key={index} className='flex flex-row justify-between align-middle items-end  py-4'>
       
            <img src={item.image} alt={item.name} className="h-20 w-10 rounded-full mr-3" />
            <h3 className='p-1 font-bold text-xl md:text-2xl px-2'>{item.name}</h3>    
          <p className='text-md md:text-xl px-1'> $ {item.current_price}</p>
          <p className="text-sm md:text-md text-slate-300 gap-2 uppercase px-1">{item.price_change_24h}</p>
          </div>
      ))}
    </div>
  );
};

export default AutoScrollingComponent;