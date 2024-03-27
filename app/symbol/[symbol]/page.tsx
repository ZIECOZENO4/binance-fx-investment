"use client"
import React from 'react'
import { TradingViewChart } from './TradingViewChart';

type Props = {
  params: {
    symbol: string;
  };
};

export default function SymbolPage({ params: { symbol } }: Props) {
  return (
    <div>
      <h1>Symbol: {symbol}</h1>
      <TradingViewChart symbol={symbol} />
    </div>
  );
}
