'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Premium2 = () => {
  const [activeTab, setActiveTab] = useState('VIP -1');
  return (
    <div>
   <div className='flex flex-row md:mx-2 justify-between pt-14'>
     <motion.header
       onClick={() => setActiveTab('VIP -1')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5  mx-1 pt-4  cursor-pointer ${activeTab === 'VIP -1' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
       animate={{ scale: activeTab === 'VIP -1' ? 1.2 : 1 }}
     >
    VIP -1
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('VIP -2')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4 backdrop:pt-4  cursor-pointer ${activeTab === 'VIP -2' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
    VIP -2
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('VIP -3')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'VIP -3' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     VIP -3
     </motion.header>

   </div>
   <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
   {activeTab === 'VIP -1' && 
   <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
    <h1 className=" text-2xl text-sky-600">75% Daily </h1>
<p>Total roll: 150%</p>
<p>DURATION: 48 days</p>
<p>Min deposit $50,000</p>
<p>Max deposit $100,000</p>
<p>5% referral bonus</p>
<div>

</div>
  </div>}
   {activeTab === 'VIP -2' && 
     <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
    <h1 className=" text-2xl text-sky-600">100% Daily </h1>
<p>Total roll: 200%</p>
<p>DURATION: 48 days</p>
<p>Min deposit $100,000</p>
<p>Max deposit $200,000</p>
<p>5% referral bonus</p>
<div>
  
</div>
  </div>
   }
   {activeTab === 'VIP -3' && 
    <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
    <h1 className=" text-2xl text-sky-600">125% Daily </h1>
<p>Total roll: 100%</p>
<p>DURATION: 48 days</p>
<p>Min deposit $200,000</p>
<p>Max deposit $500,000</p>
<p>5% referral bonus</p>
<div>
  
</div>
  </div>
   }
 </div>
  )
}

export default Premium2