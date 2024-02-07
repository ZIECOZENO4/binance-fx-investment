'use client'
import { useEffect, useState } from 'react';

export default function Invest() {
  const [data1, setData1] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
      const options1 = {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const response1 = await fetch(url1, options1);
        const result1 = await response1.json();
        setData1(result1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-white'>
      {/* Render your data here */}
      {data1 && <pre>{JSON.stringify(data1, null,  2)}</pre>}
  
    </div>
  );
}