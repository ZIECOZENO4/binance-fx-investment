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

const Market = () => {
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
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Current Price: {item.current_price}</p>
          <p>Market Cap: {item.market_cap}</p>
          <p>Symbol: {item.symbol}</p>
          <p>Image : {item.image}</p>
          <p>Market Cap Rank: {item.market_cap_rank}</p>
          <p>High  24h: {item.high_24h}</p>
          <p>Low  24h: {item.low_24h}</p>
          <p>Price Change  24h: {item.price_change_24h}</p>
          <p>Market Cap Change  24h: {item.market_cap_change_24h}</p>
          <p>Circulating Supply: {item.circulating_supply}</p>
          <p>Total Supply: {item.total_supply}</p>
          <p>ATH: {item.ath}</p>
          <p>Last Updated: {item.last_updated}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Market;
