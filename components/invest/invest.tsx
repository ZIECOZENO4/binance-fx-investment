'use client'
import { useEffect, useState } from 'react';
import Note fromn "./note"
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
    <div className='text-white h-[200vh]'>
    <div className=' relative w-[0vw] h-[50vh] bg-no-repeat object-cover bg-track flex justify-center items-center align-middle  bg-fixed  '>
    </div>
    <Note />
    </div>
  );
};

export default Invest;
