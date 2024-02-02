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
<div className='hidden md:mt-20 md:flex md:flex-row md:gap-3 gap-8'>
        <Tilt className='xs:w-[250px] w-full'>   
          <motion.div
            variants={fadeIn("right", "spring",  0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-slate-600'
          >
            
         
            <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <h3 className='text-white text-[20px] font-bold text-center'>
                hello 1
              </h3>
            </div>
              </motion.div>
       </Tilt>
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("right", "spring",1.0, 1.5)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-green-500'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <h3 className='text-white text-[20px] font-bold text-center'>
                hello 2
              </h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("left", "spring",  1.5, 2.25)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-blue-700'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <h3 className='text-white text-[20px] font-bold text-center'>
                hello3
              </h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("left", "spring", 2.0, 3.0)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-[#FFD700] '
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <h3 className='text-white text-[20px] font-bold text-center'>
                hello 4
              </h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
</div>
<div className='w-full align-middle justify-center py-5 flex flex-col  md:hidden'>
      <div className="w-[70vw] ml-[30px] justify-center flex items-center " {...handlers}>
        {currentDiv === 0 && (
          <Tilt className='xs:w-[250px] w-full'>
            <motion.div
              variants={fadeIn("right", "spring",  0.5, 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-slate-600'
            >
              <div
                options={{
                 max: 45,
                 scale: 1,
                 speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <h3 className='text-white text-[20px] font-bold text-center'>
                 hello 1
                </h3>
              </div>
            </motion.div>
          </Tilt>
        )}
        {currentDiv === 1 && (
          <Tilt className='xs:w-[250px] w-full'>
            <motion.div
              variants={fadeIn("right", "spring",1.0, 1.5)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-green-500'
            >
              <div
                options={{
                 max: 45,
                 scale: 1,
                 speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <h3 className='text-white text-[20px] font-bold text-center'>
                 hello 2
                </h3>
              </div>
            </motion.div>
          </Tilt>
        )}
        {currentDiv === 2 && (
          <Tilt className='xs:w-[250px] w-full'>
            <motion.div
              variants={fadeIn("left", "spring",  1.5, 2.25)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-blue-700'
            >
              <div
                options={{
                 max: 45,
                 scale: 1,
                 speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <h3 className='text-white text-[20px] font-bold text-center'>
                 hello3
                </h3>
              </div>
            </motion.div>
          </Tilt>
        )}
        {currentDiv === 3 && (
          <Tilt className='xs:w-[250px] w-full'>
            <motion.div
              variants={fadeIn("left", "spring", 2.0, 3.0)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-[#FFD700] '
            >
              <div
                options={{
                 max: 45,
                 scale: 1,
                 speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <h3 className='text-white text-[20px] font-bold text-center'>
                 hello 4
                </h3>
              </div>
            </motion.div>
          </Tilt>
        )}
      </div>
      <h1 className=" m-3 py-2 text-white text-md align-middle flex justify-center md:hidden">SWIPE LEFT OR RIGHT</h1>
    </div>
    </div>
 );
};

export default Plan;

