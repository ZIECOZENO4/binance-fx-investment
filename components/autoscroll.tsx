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
  


  const AutoScrollingComponent: React.FC = () => {
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

    const scrollAmount =  10; // Adjust this value to control the scroll speed
    const itemWidth =  100; // Adjust this value based on the width of your items
    const containerWidth = scrollContainer.offsetWidth;
    const totalWidth = data ? data.length * itemWidth :  0;

    const interval = setInterval(() => {
      const currentScrollLeft = scrollContainer.scrollLeft;
      if (currentScrollLeft < totalWidth - containerWidth) {
        scrollContainer.scrollLeft += scrollAmount;
      } else {
        scrollContainer.scrollLeft =  0; // Reset to the start when the end is reached
      }
    },  50); // Adjust this value to control the frequency of scrolling

    return () => clearInterval(interval); // Clean up on component unmount
  }, [data]);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full left-0 overflow-x-auto h-16 bg-gradient-to-r from-blue-600 to-sky-200 flex flex-row whitespace-nowrap p-4 md:px-3 px-10 z-50 scrollbar-hide mb-4 md:mb-2"
    >
      {data && data.map((item, index) => (
        <div key={index} className="flex flex-row items-center gap-4 px-4 md:px-8 scrollbar-hide">
          <img src={item.image} alt={item.name} className="md:h-8 md:w-8 h-6 w-6 rounded-full flex  mr-3" />
          <h3 className="p-1 font-bold text-xl md:text-2xl ml-1">{item.name}</h3>
          <p className="text-md md:text-xl px-1"> $ {item.current_price}</p>
          <p className="text-sm md:text-md text-slate-600 gap-2 uppercase ">{`(${item.price_change_24h})`}</p>
          <div className=" w-[1px] h-full bg-slate-300 px-1" />
        </div>
      ))}
    </div>
  );
};


export default AutoScrollingComponent;