

"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type ScreenerRow = {
 SYMBOL: string;
};

declare global {
  interface Window {
    onTradingViewRowClick: (symbol: string) => void;
  }
}

const Trade = () => {
  const router = useRouter();

  const onTradingViewRowClick = (symbol: string) => {
    router.push(`/dashboard/symbol/${symbol}`);
 };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "height": "1200",
      "defaultColumn": "overview",
      "defaultScreen": "general",
      "market": "forex",
      "showToolbar": true,
      "colorTheme": "dark",
      "locale": "en",
      "onRowClick": (row: ScreenerRow) => {
        window.onTradingViewRowClick(row.SYMBOL);
      }
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer && script.parentNode === widgetContainer) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default Trade;
