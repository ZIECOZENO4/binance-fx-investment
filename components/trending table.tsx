"use client"
import { useEffect, useState } from 'react';
import fetchTrendingCoins from '../lib/trendingcoins';
import Rate from "./rate"
import fire from "../public/assets/svg/fire.png"
import btc from "../public/assets/svg/btc.png"
import usdt from "../public/assets/svg/usdt.png"
import gainers from "../public/assets/svg/gainers.png"
import recent from "../public/assets/svg/recent.png"
import TrendingCard from "./trendingCard"
import Link from "next/link"
const styles = {
    trendingWrapper: `mx-auto w-full`,
    h1: `text-3xl text-white font-bold `,
}
const Trending = () => {

    const [trendingData, setTrendingData] = useState([]);
   
    useEffect(() => {
       const fetchData = async () => {
         const data = await fetchTrendingCoins();
         setTrendingData(data);
       };
   
       fetchData();
    }, []);

    const trendingData2 = [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "2.34%"
        }, {
            number: 2,
            symbol: "USDT",
            name: "Tether",
            icon: usdt,
            isIncrement: false,
            rate: "9.32%"
        }, {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "2.34%"
        },
    ]

    const trendingData3 = [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "2.34%"
        }, {
            number: 2,
            symbol: "USDT",
            name: "Tether",
            icon: usdt,
            isIncrement: false,
            rate: "9.32%"
        }, {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "2.34%"
        },
    ]
    return <div className="text-white p-6 mt-4 flex justify-center align-middle items-center w-full">
        <div className={styles.trendingWrapper}>
            <div className="flex  align-middle items-center  justify-center">
                <h1 className={styles.h1}>Todays Cryptocurrency Prices on <span className=' text-[#FFD700] '>BINANCE FX</span></h1>
            </div>
            <br />
            <div className="flex md:flex-row align-middle items-center flex-col justify-center ">
                <p>The global crypto market cap is $ 1.74T, a &nbsp; </p>
                <span> <Rate isIncrement={true} rate='0.53%' /> </span>
                <p> &nbsp; decrease over the last day. <Link href="/dashboard" className="underline text-blue-700">Read More</Link>  </p>
            </div>
            <br />

            <div className='flex md:items-center md:align-middle flex-col md:flex-row gap-8 md:gap-0'>
            <Link href="/dashboard/allcoins"> <TrendingCard title='Trending' icon={fire} trendingData={trendingData} />  </Link>  
              <Link href="/dashboard/allinvestors"> <TrendingCard title='Latest Investors' icon={gainers} trendingData={trendingData2} /></Link> 
              <Link href="/dashboard/allwithdrawal"><TrendingCard title='Latest Withdrawal' icon={recent} trendingData={trendingData3} /></Link>  
            </div>
        </div>
    </div>
}

export default Trending