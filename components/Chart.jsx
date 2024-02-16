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
          "gridColor": "rgba(66, 66, 66, 0.06)",
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "watchlist": [
            "FX:EURUSD"
          ],
          "details": true,
          "hotlist": true,
          "calendar": false,
          "studies": [
            "STD;Accumulation_Distribution",
            "STD;Advance_Decline_Ratio_Bars",
            "STD;Balance%1of%1Power"
          ],
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container h-[220vh] w-[90vw]" ref={container} style={{ height: "300%", width: "90%" }}>
      <div className="tradingview-widget-container__widget  h-[220vh] w-[90vw]" style={{ height: "calc(300% - 32px)", width: "90%" }}></div>
      <div className="tradingview-widget-copyright  h-[220vh] w-[90vw]" ><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
