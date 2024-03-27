"use client"
import React, { useEffect } from 'react';

const TradingScroll = () => {
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

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget12');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      // Check if the script is still a child of the widgetContainer before removing it
      if (widgetContainer && script.parentNode === widgetContainer) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);


  return (
    <div className=' w-[100vw] mt-3 mb-6'>

    <div className="tradingview-widget-container py-8 w-[100vw]  md:w-[50vw] h-[100vh]">
      <div className="tradingview-widget-container__widget12"></div>
      <div className="tradingview-widget-copyright1">
      </div>
    </div>



    </div>

)
}

export default TradingScroll