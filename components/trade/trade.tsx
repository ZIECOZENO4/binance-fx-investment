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
      "locale": "en",
      "largeChartUrl": "/symbol/[symbol]"
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
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
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
};

export default Trade;

// "use client"
// import React, { useEffect } from 'react';
// import Link from 'next/link';

// const Home = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       "width": "100%",
//       "height": "100%",
//       "defaultColumn": "overview",
//       "defaultScreen": "general",
//       "market": "forex",
//       "showToolbar": true,
//       "colorTheme": "dark",
//       "locale": "en",
//       "largeChartUrl": "/symbol/[symbol]"
//     });

//     const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
//     if (widgetContainer) {
//       widgetContainer.appendChild(script);
//     }

//     return () => {
//       if (widgetContainer && script.parentNode === widgetContainer) {
//         widgetContainer.removeChild(script);
//       }
//     };
//   }, []);

//   return (
//     <div className="tradingview-widget-container">
//       <div className="tradingview-widget-container__widget"></div>
//     </div>
//   );
// };

// export default Home;
