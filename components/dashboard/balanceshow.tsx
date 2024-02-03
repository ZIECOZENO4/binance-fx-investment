import React from 'react'

const BalanceShow = () => {
  return (
    <div className=" bg-[#FFD700] rounded-2xl w-[60%] h-32 flex flex-col justify-center align-middle items-center">
       BALANCE
       <div className="div">
        <div className=" flex flex-row justify-between">
        <p className=" font-bold text-4xl font-sono gap-3">INVESTMENT BALANCE</p>
        </div>
    
        <p className="  text-3xl font-sono gap-3">$ 0.000</p>
       </div>
    </div>
  )
}

export default BalanceShow