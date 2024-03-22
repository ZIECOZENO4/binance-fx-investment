"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'; // Corrected from 'next/navigation' to 'next/router'
import parse from 'html-react-parser';
import CoinInfo from "../../../../../components/trade/CoinInfo";
import { SingleCoin } from "../../../../../config/api";
import { numberWithCommas } from "../../../../../components/trade/CoinsTable";
import { CryptoState } from "../../../../../CryptoContext";

const CoinPage = () => {
  const router = useRouter();
  const { id } = router.query; // Correctly retrieve the dynamic id

  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true); // Handle loading state

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    if (!id) return; // Ensure id is not undefined
    setLoading(true); // Set loading to true before fetching data
    try {
      const { data } = await axios.get(SingleCoin(id)); // Use SingleCoin function from your API config if it's designed to handle dynamic ids
      setCoin(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    fetchCoin();
  }, [id]); // Add id as a dependency

  if (loading) return <div className="bg-yellow-500 h-2 w-full"></div>; // Show loading indicator

  if (!coin) return <div>No coin data available.</div>; // Handle case where no coin data is available

 return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:border-r-2 md:border-gray-500 mt-6">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          className="h-48 mb-6"
        />
        <h3 className="font-bold text-2xl mb-4">
          {coin?.name}
        </h3>
        <p className="text-justify w-full md:w-3/4 mb-4">
          {parse(coin?.description.en.split(". ")[0])}.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">Rank:</span>
            <span className="font-semibold text-lg">
              {numberWithCommas(coin?.market_cap_rank)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">Current Price:</span>
            <span className="font-semibold text-lg">
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">Market Cap:</span>
            <span className="font-semibold text-lg">
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                 .toString()
                 .slice(0, -6)
              )}
              M
            </span>
          </div>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
 );
};

export default CoinPage;
