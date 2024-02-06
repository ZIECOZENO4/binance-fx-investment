'use client'
import { useQuery } from 'react-query';
import axios from 'axios';

async function fetchTrendingCoins() {
  const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
  return response.data;
}

export default function Invest() {
  const { isLoading, isError, data, error } = useQuery('trendingCoins', fetchTrendingCoins);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Trending Coins</h1>
      <ul>
        {data.coins.map((coin) => (
          <li key={coin.id}>{coin.name}</li>
        ))}
      </ul>
    </div>
  );
}
