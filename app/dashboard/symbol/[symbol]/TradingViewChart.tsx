
'use client';
import CircleAnimation from '@/components/component/rotate';
import React from 'react'
import { useEffect, useRef } from 'react';
import BottomBar from './tradebutton';

type Props = {
  symbol: string;
};

declare const TradingView: any;

export function TradingViewChart({ symbol }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof TradingView !== 'undefined' && containerRef.current) {
        new TradingView.widget({
          autosize: true,
          symbol,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [symbol]);

  return (
    <div>
 <div ref={containerRef} id={`tradingview_${symbol}`} >
 <div className="  flex items-end justify-end align-top absolute top-[10vh] md:top-[20vh] ">  
      <CircleAnimation />
      </div>
      <BottomBar />
    </div>
    </div>
  );
}