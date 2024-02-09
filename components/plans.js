'use client'
import React from "react";
import Vip from "./Vip"
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Basic from "./Basic"
import Premium from  "./Premium";
import { useState } from 'react';

const Plan = () => {
  const [activeTab, setActiveTab] = useState('PREMIUM');
 return (
    <div className="justify-center flex flex-col  align-middle items-center py-[40px]">
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-slate-400 uppercase  align-middle items-center ml-[160px]'>Binance FX Investment</p>
        <h2 className='text-white font-black md:text-[40px] sm:text-[30px] xs:text-[40px] text-[20px]'>CRYPTO <span className="text-[#FFD700] ">INVESTMENT</span> PLAN.</h2>
      </motion.div>
    <p className=' text-slate-500 text-xl'> Well Profitable investment plan, start earning from your first day in the crypto world, only on BINANCE FX.</p> 
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      </motion.p>
<div> 
    <div>
    <div>
   <div className='flex flex-row md:mx-[10vw] justify-between pt-8 w-[100vw]'>
     <motion.header
       onClick={() => setActiveTab('BASIC')}
       className={`text-green-800 font-serif  text-2xl  font-bold mx-5 pt-4  cursor-pointer ${activeTab === 'Assets' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
       animate={{ scale: activeTab === 'BASIC' ? 1.2 : 1 }}
     >
   BASIC
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('PREMIUM')}
       className={`text-[#FFD700]  font-heading font-serif   font-bold text-3xl border-b-2 mx-5 pt-4  cursor-pointer ${activeTab === 'PREMIUM' ? 'border-[#e9db8b]  rounded-md  bg-gradient-to-r from-[#FFD700] to-[#6d5e07] bg-clip-text text-transparent animate-gradient' : 'border-[#96893e]'}`}
     >
   PREMIUM
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('VIP')}
       className={`text-sky-700  font-heading  text-2xl border-b-2 mx-5 pt-4  cursor-pointer ${activeTab === 'VIP' ? 'border-sky-300   rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
   VIP
     </motion.header>
   </div>
  
   {activeTab === 'BASIC' && <div><Basic /></div>}
   {activeTab === 'PREMIUM' && <div><Premium /></div>}
   {activeTab === 'VIP' && <div><Vip /></div>}
 </div>
    </div>
    </div>  
     </div>

 );
};

export default Plan;

