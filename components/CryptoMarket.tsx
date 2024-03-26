"use client"
import React, { useEffect, useState } from 'react';

interface MarketInfo {
  name: string;
  price: string;
  change: number;
  volume: string;
  decimal: number;
  image?: string;
}

interface TickerValue {
  last: string;
  change: string;
  vol: string;
  decimal_place: number;
}

const CryptoMarket: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch market data from CoinEx
        const response = await fetch('https://api.coinex.com/v1/market/info');

        if (!response.ok) {
          throw new Error('Failed to fetch market data from CoinEx');
        }

        const data = await response.json();
        console.log('CoinEx API response:', data);

        const markets = Object.entries(data.data).map(([key, value]) => ({
          name: key.toUpperCase(),
          price: (value as TickerValue).last,
          change: parseFloat((value as TickerValue).change),
          volume: (value as TickerValue).vol,
          decimal: (value as TickerValue).decimal_place,
        }));

        // Fetch images from CoinGecko
        const ids = markets.map((market) => market.name.toLowerCase()).join(',');
        const coingeckoResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`
        );

        if (!coingeckoResponse.ok) {
          throw new Error('Failed to fetch coin images from CoinGecko');
        }

        const coingeckoData = await coingeckoResponse.json();
        console.log('CoinGecko API response:', coingeckoData);

        // Combine market data with images
        const combinedData = markets.map((market) => {
          const coinData = coingeckoData.find((coin: any) => coin.symbol.toUpperCase() === market.name);
          return { ...market, image: coinData?.image };
        });

        setMarketData(combinedData);
        setError(null);
      } catch (error: any) {
        setError(error.message);
        setMarketData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg mx-auto">
      <p className="text-2xl font-bold text-blue-500 p-2">Market Calendar</p>
      {isLoading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {marketData.map((marketItem) => (
            <div key={marketItem.name} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              {marketItem.image ? (
                <img src={marketItem.image} alt={marketItem.name} className="w-12 h-12" />
              ) : (
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">{marketItem.name}</span>
                </div>
              )}
              <span className="text-white mt-2">{marketItem.name}</span>
              <span className="text-white">${parseFloat(marketItem.price).toFixed(marketItem.decimal)}</span>
              <span className={`mt-1 ${marketItem.change < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {marketItem.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptoMarket;
