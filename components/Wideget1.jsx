"use client"
import React, { useEffect } from 'react';

const TradingWatchlist = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "width": "100%",
      "height": "100%",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "plotLineColorGrowing": "rgba(41,   98,   255,   1)",
      "plotLineColorFalling": "rgba(41,   98,   255,   1)",
      "gridLineColor": "rgba(240,   243,   250,   0)",
      "scaleFontColor": "rgba(106,   109,   120,   1)",
      "belowLineFillColorGrowing": "rgba(41,   98,   255,   0.12)",
      "belowLineFillColorFalling": "rgba(41,   98,   255,   0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41,   98,   255,   0)",
      "belowLineFillColorFallingBottom": "rgba(41,   98,   255,   0)",
      "symbolActiveColor": "rgba(41,   98,   255,   0.12)",
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
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingWatchlist;
