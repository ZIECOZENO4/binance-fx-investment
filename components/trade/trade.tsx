"use client"
import React, { useEffect } from 'react';

const Trade = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "height": "800",
      "defaultColumn": "overview",
      "defaultScreen": "general",
      "market": "forex",
      "showToolbar": true,
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
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
     <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text font-bold text-2xl">Track all Statistics on Binance FX</span>
        </a>
      </div>
    </div>
  );
};

export default Trade;