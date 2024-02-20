"use client"
import React, { useEffect } from 'react';

const Rate = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "description": "",
            "proName": "BINANCE:BTCUSDT"
          },
          {
            "description": "",
            "proName": "FX:USDJPY"
          },
          {
            "description": "",
            "proName": "TVC:GOLD"
          },
          {
            "description": "",
            "proName": "BITSTAMP:ETHUSD"
          },
          {
            "description": "",
            "proName": "FX:USDCAD"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:BTC.D"
          }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
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
    <div className="tradingview-widget-container mt-4">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
    
      </div>
    </div>
  );
};

export default Rate;
