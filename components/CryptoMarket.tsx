import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Define TypeScript interfaces for the API response and market data
interface MarketInfo {
  name: string;
  price: string;
  change: number;
  volume: string;
  decimal: number;
}

interface MarketApiResponse {
  data: {
    ticker: {
      [key: string]: {
        last: string;
        change: string;
        vol: string;
        decimal_place: number;
      };
    };
  };
}

const CryptoMarket: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coinex.com/v1/market/info');
        const data: MarketApiResponse = await response.json();
        const markets = Object.entries(data.data.ticker).map(([key, value]) => ({
          name: key,
          price: value.last,
          change: parseFloat(value.change),
          volume: value.vol,
          decimal: value.decimal_place,
        }));
        setMarketData(markets);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-center">Markets</h2>
      <ul className="divide-y divide-gray-700">
        {marketData.map((marketItem) => (
          <li key={marketItem.name} className="py-3 flex justify-between items-center">
            <div className="flex items-center">
              {/* Replace with your own logic to determine the icon path */}
              <Image src={`/icons/${marketItem.name.toLowerCase()}.svg`} alt={marketItem.name} width={24} height={24} />
              <span className="ml-2">{marketItem.name}</span>
            </div>
            <div>
              <span className="font-bold">{parseFloat(marketItem.price).toFixed(marketItem.decimal)}</span>
              <span className={`ml-2 ${marketItem.change < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {marketItem.change.toFixed(2)}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoMarket;
