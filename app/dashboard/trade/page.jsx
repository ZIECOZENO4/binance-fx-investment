import Rate3 from "../../../components/rate3"
import Trade from '@/components/trade/trade'
import React from 'react'

const TradePage = () => {
  return (
    <div className=' w-[100vw] flex flex-col'>
  <div className=" mt-1 mb-5">
  <Rate3 />
  </div>   
      <Trade />
    </div>
  )
}

export default TradePage