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
    const carousel = carouselRef.current;
    if (carousel && carousel.lastElementChild) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              carousel.appendChild(carousel.firstElementChild!);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(carousel.lastElementChild);

      return () => {
        observer.unobserve(carousel.lastElementChild);
      };
    }
  }, [trending]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div key={coin.id} className="flex-shrink-0 w-full">
        <Link href={`/dashboard/trade/tradePage/${coin.id}`} passHref>
          <a className="flex flex-col items-center cursor-pointer uppercase text-white">
            <img
              src={coin?.image}
              alt={coin.name}
              className="mb-2.5 h-20"
            />
            <span>
              {coin?.symbol}
              &nbsp;
              <span
                className={`font-medium ${profit > 0 ? 'text-green-500' : 'text-red-500'}`}
              >
                {profit && "+"}
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </span>
            <span className="text-2xl font-medium">
              {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
            </span>
          </a>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex h-1/2 items-center overflow-x-hidden">
      <div ref={carouselRef} className="flex transition-transform duration-1000 ease-linear">
        {items}
      </div>
    </div>
  );
};

export default Carousel;
