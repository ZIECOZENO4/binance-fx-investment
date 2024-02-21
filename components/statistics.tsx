"use client"
import React, { useEffect } from 'react';

const Statistic = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "autosize": true,
        "height": "1000",
      "currencies": [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD"
      ],
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget3');
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
    <div className="tradingview-widget-container3 my-8 w-[100vw] h-[200vh]">
        <p className='text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] '>Statistics</p>
      <div className="tradingview-widget-container__widget3"></div>
      <div className="tradingview-widget-copyright3">
      <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text font-bold text-2xl">Track all Statistics on Binance FX</span>
        </a>
      </div>
    </div>
  );
};

export default Statistic;
