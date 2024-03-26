import CryptoMarket from '@/components/CryptoMarket'
import Trade from '@/components/trade/trade'
import React from 'react'

const TradePage = () => {
  return (
    <div className=' w-[100vw] flex flex-col'>
      <CryptoMarket />
      <Trade />
    </div>
  )
}

export default TradePage