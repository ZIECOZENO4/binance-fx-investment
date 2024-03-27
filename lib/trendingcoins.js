import axios from 'axios';

const fetchTrendingCoins = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 5,
        page: 1,
        sparkline: false,
        locale: 'en'
      }
    });

    const trendingCoins = response.data.map((coin, index) => {
      const priceChange = typeof coin.price_change_percentage_24h === 'number' ? coin.price_change_percentage_24h.toFixed(2) : '0.00';
      const icon = coin.image ? <img src={coin.image} alt={coin.name} width="32" height="32" /> : null;

      return {
        number: index + 1,
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        icon: icon,
        isIncrement: coin.price_change_percentage_24h >= 0,
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
