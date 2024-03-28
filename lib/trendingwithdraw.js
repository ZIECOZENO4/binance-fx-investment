// fetchWithdrawalData2.ts
import axios from 'axios';

const fetchWithdrawalData2 = async () => {
 try {
    const response = await axios.get('/api/historyWithdraw', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const withdrawalData = response.data.map((item, index) => {
      const isIncrement = parseFloat(item.outAmount) >= 0;
      const rate = item.outAmount;

      return {
        number: index + 1,
        symbol: item.outCoin,
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

export default fetchWithdrawalData2;