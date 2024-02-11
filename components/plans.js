'use client'
import React from "react";
import Vip from "./Vip"
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Basic from "./Basic"
import Premium from  "./Premium";
import { useState } from 'react';

const Plan = () => {
  const [activeTab, setActiveTab] = useState('BOARD');
 return (
    <div className="justify-center flex flex-col  align-middle items-center py-[40px] ">
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
   <div className='flex flex-row mx-2 md:mx-[20vw] justify-between pt-8 w-[100vw]'>
     <motion.header
       onClick={() => setActiveTab('REFERRAL')}
       className={`text-green-800 font-serif  md:text-2xl text-[10px]  font-bold md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'BASIC' ? 'border-green-500  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
       animate={{ scale: activeTab === 'REFERRAL' ? 1.2 : 1 }}
     >
  REFERRAL
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('BOARD')}
       className={`text-[#FFD700]  font-heading font-serif text-[15px]  font-bold md:text-3xl border-b-2 md:mx-5 mx-2 pt-4  cursor-pointer ${activeTab === 'BOARD' ? 'border-[#e9db8b]  rounded-md  bg-gradient-to-r from-[#FFD700] to-[#6d5e07] bg-clip-text text-transparent animate-gradient' : 'border-[#96893e]'}`}
     >
  BOARD
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('SHARES')}
       className={`text-sky-700  font-heading  font-serif   font-bold md:text-2xl text-[10px] border-b-2 mx-2 md:mx-5 pt-4  cursor-pointer ${activeTab === 'SHARES' ? 'border-sky-300   rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
 SHARES
     </motion.header>
   </div>
  
   {activeTab === 'REFERRAL' && <div><Basic /></div>}
   {activeTab === 'BOARD' && <div><Premium /></div>}
   {activeTab === 'SHARES' && <div><Vip /></div>}
 </div>
    </div>
    </div>  
     </div>

 );
};

export default Plan;

