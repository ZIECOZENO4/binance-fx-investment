import axios from 'axios';

const fetchTrendingCoins = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    const trendingCoins = response.data.coins.slice(0, 5).map((coin, index) => {
      const priceChange = typeof coin.item.price_btc_24h_change === 'number' ? coin.item.price_btc_24h_change.toFixed(2) : 'N/A';

      return {
        number: index + 1,
        symbol: coin.item.symbol.toUpperCase(),
        name: coin.item.name,
        icon: coin.item.large,
        isIncrement: coin.item.price_btc_24h_change >= 0,
        rate: `${priceChange}%`,
      };
    });
    return trendingCoins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
};

export default fetchTrendingCoins;
