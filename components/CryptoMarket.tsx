import React from 'react';

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

interface CryptoMarketProps {
  marketData: MarketInfo[];
}

const CryptoMarket: React.FC<CryptoMarketProps> = ({ marketData }) => {
  return (
    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg mx-auto">
      <p className="text-2xl font-bold text-blue-500 p-2">Market Calendar</p>
      {marketData.length === 0 ? (
        <p className="text-white">No market data available.</p>
      ) : (
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

export async function getServerSideProps() {
  try {
    const response = await fetch('https://api.coinex.com/v1/market/info');
    const data = await response.json();
    const markets = Object.entries(data.data).map(([key, value]) => ({
      name: key.toUpperCase(),
      price: (value as TickerValue).last,
      change: parseFloat((value as TickerValue).change),
      volume: (value as TickerValue).vol,
      decimal: (value as TickerValue).decimal_place,
    }));

    const ids = markets.map((market) => market.name.toLowerCase()).join(',');
    const coingeckoResponse = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`
    );
    const coingeckoData = await coingeckoResponse.json();

    const combinedData = markets.map((market) => {
      const coinData = coingeckoData.find((coin: any) => coin.symbol.toUpperCase() === market.name);
      return { ...market, image: coinData?.image };
    });

    return {
      props: {
        marketData: combinedData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        marketData: [],
      },
    };
  }
}

export default CryptoMarket;
