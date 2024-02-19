"use client"
import React from 'react';
import { useEffect, useState, useRef } from 'react';


const Trade = () => {
  const [data1, setData1] = useState(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "FX:EURUSD"
          "width": "100%",
          "height": "40%",
          "locale": "en",
          "dateRange": "3M",
          "colorTheme": "dark",
          "isTransparent": false,
          "autosize": true,
          "largeChartUrl": "",
        }`;
  
    },
    []
  );


  return (
    <div className='text-bold text-white text-2xl flex-col flex justify-center align-middle'  >
 
<div className="tradingview-widget-container">
  <div className="tradingview-widget-container__widget"></div>
  <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
</div>

      <div className="flex flex-row justify-between mx-8">
        <p className="text-bold">My Trade</p>
        <p className="flex ">Enter</p>
      </div>
      <div className='text-white flex flex-col  '>
    
      Coming Soon
    </div>
    </div>
  );
};

export default Trade;