'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { TrendingCoins } from "../../../config/api";
import { CryptoState } from "../../../CryptoContext";
import { numberWithCommas } from "../CoinsTable";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';
import { EffectCards } from 'swiper/modules';

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <SwiperSlide key={coin.id}>
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
      </SwiperSlide>
    );
  });

  return (
    <div className="flex h-1/2 items-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {items}
      </Swiper>
    </div>
  );
};

export default Carousel;
