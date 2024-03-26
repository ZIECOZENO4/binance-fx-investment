import axios from 'axios';

const fetchTrendingCoins = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en');
    const trendingCoins = response.data.coins.slice(0, 5).map((coin, index) => {
      const priceChange = typeof coin.item.current_price === 'number' ? coin.item.current_price.toFixed(2) : 'N/A';

      return {
        number: index + 1,
        symbol: coin.image,
        name: coin.item.name,
        icon: coin.item.large,
        isIncrement: coin.item.current_price >= 0,
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
