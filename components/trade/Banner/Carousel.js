'use client'
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { TrendingCoins } from "../../../config/api";
import { CryptoState } from "../../../CryptoContext";
import { numberWithCommas } from "../CoinsTable";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();
  const carouselRef = useRef<HTMLDivElement>(null);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 5; 
    const itemWidth = 100; 
    const containerWidth = scrollContainer.offsetWidth;
    const totalWidth = trending.length * itemWidth;

    const interval = setInterval(() => {
      const currentScrollLeft = scrollContainer.scrollLeft;
      if (currentScrollLeft < totalWidth - containerWidth) {
        scrollContainer.scrollLeft += scrollAmount;
      } else {
        scrollContainer.scrollLeft = 0; 
      }
    }, 50); 

    return () => clearInterval(interval); 
  }, [trending]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div key={coin.id} className="flex-shrink-0 w-full">
        <Link href={`/dashboard/trade/${coin.id}`}>
          <div className="flex flex-col items-center justify-center">
            <img
              src={coin?.image}
              alt={coin.name}
              className="h-20 w-20 rounded-full mb-2"
            />
            <span className="text-lg font-bold">
              {coin?.symbol}
              &nbsp;
              <span
                className={
                  profit ? "text-green-500" : "text-red-500"
                }
              >
                {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </span>
            <span className="text-sm">
              {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
            </span>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div ref={carouselRef} className="flex overflow-x-auto w-full py-4 px-2 scrollbar-hide">
      {items}
    </div>
  );
};

export default Carousel;
