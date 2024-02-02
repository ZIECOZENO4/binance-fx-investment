import React from 'react'

const WhatIsBinance = () => {
  return (
    <div  className=' w-full md:p-5 p-3 py-5 flex flex-col md:mx-5 md:flex md:flex-row'>
         <div className=' md:gap-8 md:flex md:flex-col  '>
     <h1 className=" text-white font-extrabold font-mono  md:text-[4xl] text-3xl">
     What Is BINANCE FX ?
        </h1> 
       
        <h2 className=' md:text-xl text-md font-bolf font-serif leading-6 text-slate-200 py-2'>
            Find out why we are the <span className='uppercase  text-[#FFD700] '>best crypto investment, trading, crypto learing and swap crypto app, </span>
            <br/>
            having about  70% of crypto investors in world. why you Invest on Binance FX, Why you should trust us and how much we secure our investors accounts. 
            <br />
            For More Click The Find More Button.
            </h2> 
            <button className=' bg-[#FFD700] md:w-[200px] w-full font-md font-bold text-black justify-center items-center rounded-2xl border-spacing-5 md:py-5 py-2'>
                FIND MORE 
            </button>
      
        </div>
    
        <img src='/images/bf.png' alt="coin" className=' w-[30vw] h-full  hidden md:flex justify-end'/>
    </div>
  )
}

export default WhatIsBinance