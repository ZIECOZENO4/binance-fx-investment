// fetchWithdrawalData.ts
import axios from 'axios';

const fetchWithdrawalData = async () => {
 try {
    const response = await axios.get('/api/getinvestors', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const withdrawalData = response.data.map((item, index) => {
      const isIncrement = parseFloat(item.amount) >= 0;
      const rate = item.amount;

      return {
        number: index + 1,
        symbol: item.coin,
        name: item.user.name,
        isIncrement: isIncrement,
        rate: `${rate}%`,
      };
    });

    return withdrawalData;
 } catch (error) {
    console.error('Error fetching withdrawal data:', error);
    return [];
 }
};

export default fetchWithdrawalData;