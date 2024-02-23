'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Watchlist from './watchlist';
import Market from './market';
import NFTs from './nfts';

function Table() {
 const [activeTab, setActiveTab] = useState('NFTs');

 return (
 <div>
   <div className='flex flex-row md:mx-2 justify-between pt-14'>
     <motion.header
       onClick={() => setActiveTab('NFTs')}
       className={`text-slate-200 font-heading  text-2xl border-b-2 md:mx-5  mx-1 pt-4  cursor-pointer ${activeTab === 'NFTs' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
       animate={{ scale: activeTab === 'NFTs' ? 1.2 : 1 }}
     >
   NFTs
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Market')}
       className={`text-slate-200 font-heading  text-2xl border-b-2 md:mx-5 mx-1 pt-4 backdrop:pt-4  cursor-pointer ${activeTab === 'Market' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
    Market
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Watchlist')}
       className={`text-slate-200 font-heading  text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Watchlist' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     Watchlist
     </motion.header>
   </div>
   <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
   {activeTab === 'NFTs' && <div><NFTs /></div>}
   {activeTab === 'Market' && <div><Market /></div>}
   {activeTab === 'Watchlist' && <div><Watchlist /></div>}
 </div>
 );
}

export default Table;
