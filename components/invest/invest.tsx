"use client"
import { useQuery } from 'react-query';
import axios from 'axios';
import { FC } from 'react';

interface TrendingCoin {
  id: string;
  name: string;
}

interface TrendingCoinsResponse {
  coins: TrendingCoin[];
}

async function fetchTrendingCoins(): Promise<TrendingCoinsResponse> {
  const response = await axios.get<TrendingCoinsResponse>('https://api.coingecko.com/api/v3/search/trending');
  return response.data;
}

const Invest: FC = () => {
  const { isLoading, isError, data, error } = useQuery<TrendingCoinsResponse, Error>('trendingCoins', fetchTrendingCoins);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h1>Trending Coins</h1>
      <ul>
        {data?.coins.map((coin) => (
          <li key={coin.id}>{coin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Invest;
