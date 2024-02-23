"use client"
import React, { useEffect } from "react";

const Calendar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      height: "300",
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
    });

    const widgetContainer = document.querySelector(
      ".tradingview-widget-container__widget4"
    );
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
    <div className="tradingview-widget-container4">
      <div className="tradingview-widget-container__widget4"></div>
      <div className="tradingview-widget-copyright4">
  
      </div>
    </div>
  );
};

export default Calendar;
