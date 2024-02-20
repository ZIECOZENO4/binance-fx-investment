"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "isTransparent": false,
      "displayMode": "regular",
      "autosize": true,
           "height": "500",
      "colorTheme": "dark",
      "locale": "en"
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);


  return (
    <div className=' w-[100vw] md:mx-[10vw] mx-4  ` md:py-20 py-5  text-white flex md:flex-row flex-col'>
      <div className=" w-[50vw] flex flex-col">
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">OVER</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">4,500</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">INVESTORS</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">TRUST US</p>
      <div className=" flex flex-row justify-between md:justify-start gap-8  ">
      <Link href="/sign-up">
 <button className='rounded-3xl font-bold justify-center align-middle text-2xl border-spacing-8 space-x-8 border-b-large border-blue-200 bg-green-600 ml-8'>
    <p className='p-3'>SIGN UP</p>
 </button>
</Link>
<Link href="/sign-in">
 <button className='rounded-3xl font-bold justify-center px-8 align-middle text-2xl border-spacing-8 space-x-8 border-b-large border-blue-200 bg-[#FFD700]'>
    <p className='p-3 text-black'>SIGN IN</p>
 </button>
</Link>
      </div>
   
      </div>
   


    <div className="tradingview-widget-container py-8">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>



    </div>

)
}

export default Register