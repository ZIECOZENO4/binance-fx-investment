'use client'
import React, { useState } from 'react';

function NewToCrypto() {
 const [selected, setSelected] = useState('Invest');

 return (
    <div className='hidden md:flex md:flex-row  md:p-5 md:justify-center md:align-middle md:items-center md:px-[10%]  md:h-[90vh]'>
      <div className=' h-[80vh]'>
        <img className=' w-[50%] h-full rounded-xl' src='/images/new.jpg' alt='img'/>
      </div>
      <div className=' flex flex-col p-1 w-[50%] '>
        <h1 className=' font-extrabold text-[4rem] gap-2 text-white'>Binance FX</h1>
        <h1 className=' text-2xl text-slate-300'>Unlimited Possibilities</h1>
        <div className=' w-full h-18 mt-6 bg-black border  space-x-6  rounded-[20px] border-white  flex justify-between  bottom-10 p-2'>
          <button 
            className={`text-slate-700 border  font-bold p-2 space-x-10 text-xl bottom-8 rounded-[20px] p-2 ${selected === 'Invest' ? 'bg-slate-100 text-black text-3xl' : ''}`} 
            onClick={() => setSelected('Invest')}
          >
             Invest
          </button>
          <button 
            className={`text-slate-700 border  font-bold p-2 space-x-10 text-xl bottom-8 rounded-[20px] p-2 ${selected === 'Support Binance FX' ? 'bg-green-600 text-slate-300 text-3xl' : ''}`} 
            onClick={() => setSelected('Support Binance FX')}
          >
             Support Binance FX
          </button>
          <button 
            className={`text-slate-700 font-bold border space-x-10 text-xl bottom-8 rounded-[20px] p-2 ${selected === 'Trade' ? 'bg-slate-100 text-black text-3xl' : ''}`} 
            onClick={() => setSelected('Trade')}
          >
           Trade
          </button>
        </div>
        <h2 className=' text-xl text-slate-500 leading-8 py-4'>New to crypto Trading?, New To Crypto Investments?  No problem. Buy crypto for as little as $10 in a tap, and grow your skills as you go, only on Binance FX.</h2>
      </div>
    </div>
 )
}

export default NewToCrypto;