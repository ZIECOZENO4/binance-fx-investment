import TradingScroll from "../../../components/tradescroll"
import Trade from '@/components/trade/trade'
import React from 'react'

const TradePage = () => {
  return (
    <div className=' w-[100vw] flex flex-col'>
      <TradingScroll />
      <Trade />
    </div>
  )
}

export default TradePage