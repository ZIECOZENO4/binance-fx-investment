"use client"
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": true,
          "backgroundColor": "rgba(0, 0, 0, 1)",
          "gridColor": "rgba(255, 255, 0, 0.06)",
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "studies": [
            "STD;24h%Volume",
            "STD;Accumulation_Distribution",
            "STD;Advance%1Decline%1Ratio",
            "STD;Average_True_Range"
          ],
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container w-[100vw] h-[50vh]" ref={container}>
      <div className="tradingview-widget-container__widget h-[45vh] w-[100vw]" ></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on Binance FX</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);