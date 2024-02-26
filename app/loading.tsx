
import React from 'react'
import './globals.css'
import AppLoader from '@/components/loading'

function Loading() {
  return (
    
    <div className=' bg-black justify-center m-0 p-0 flex align-middle items-center  w-full h-[100vh]' >  
    <AppLoader />
    <div className="mt-5 text-center text-blue-400">
        <h1 className="md:text-3xl text-2xl font-bold tracking-widest">BINANCE FX INVESTMENT</h1>
        </div>
        </div>


  )
}

export default Loading