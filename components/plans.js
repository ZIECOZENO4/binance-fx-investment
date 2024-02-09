'use client'
import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';

const Plan = () => {
  const [currentDiv, setCurrentDiv] = useState(0);

  const handlers = useSwipeable({
     onSwipedLeft: () => setCurrentDiv((prev) => prev <= 0 ? 3 : prev - 1),
     onSwipedRight: () => setCurrentDiv((prev) => prev >= 3 ? 0 : prev + 1),
  });
 const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const renderContent = () => {
    switch (selectedPlan) {
      case 'referral':
        return <div>Referral Plan Content</div>;
      case 'board':
        return <div>Board Plan Content</div>;
      case 'vip':
        return <div>VIP Plan Content</div>;
      default:
        return null;
    }
  };
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
      <div className="top-section">
        <button onClick={() => handlePlanClick('referral')}>Referral Plan</button>
        <button onClick={() => handlePlanClick('board')}>Board Plan</button>
        <button onClick={() => handlePlanClick('vip')}>VIP Plan</button>
      </div>
      <div className="center-section">
        {renderContent()}
      </div>
    </div>
    </div>  
     </div>

 );
};

export default Plan;

