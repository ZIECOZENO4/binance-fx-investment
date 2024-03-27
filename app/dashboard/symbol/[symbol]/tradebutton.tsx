"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { Button } from "@nextui-org/react";

interface BottomBarItemProps {
  label: string;
  onClick: () => void; 
}

const BottomBarItem: React.FC<BottomBarItemProps> = ({ label, onClick }) => {
  const itemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };


  return (
    <motion.div
      className="flex items-center justify-center p-2 m-1 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
      variants={itemVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {label}
    </motion.div>
  );
};

const BottomBar = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 flex justify-around p-4 bg-gray-100 border-t-2 border-gray-300"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
        <div className=" w-full fixed bottom-0 z-10 flex-row justify-between items-center align-middle flex gap-8">
        <Button
      disableRipple
      className="relative flex flex-col  h-14 align-middle overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0  w-[50%] bg-green-700 "
      size="lg"
 
    >
        <div className="w-full flex-row justify-between items-center align-middle flex gap-3">
        <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.947 511.947" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M476.847,216.373L263.513,3.04c-4.267-4.053-10.88-4.053-15.04,0L35.14,216.373c-4.16,4.16-4.16,10.88-0.107,15.04 c2.027,2.027,4.8,3.2,7.573,3.2h128V501.28c0,5.867,4.8,10.667,10.667,10.667h149.333c5.867,0,10.667-4.8,10.667-10.667V234.613 h128c5.867,0,10.667-4.8,10.667-10.667C479.94,221.067,478.873,218.4,476.847,216.373z M330.607,213.28 c-5.867,0-10.667,4.8-10.667,10.667v266.667h-128V223.947c0-5.867-4.8-10.667-10.667-10.667H68.42L255.94,25.547L443.567,213.28 H330.607z"></path> </g> </g> </g></svg>
        <p className="font-bold text-white  text-xl font-sono ">Trade Up</p> 

        </div>
    
    </Button>
    <Button
      disableRipple
      className="relative flex flex-col  h-14 align-middle overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 w-[50%] bg-red-700 "
      size="lg"

    >
   <div className="w-full flex-row justify-between items-center align-middle flex gap-3">
      <p className="font-bold text-xl font-sono text-white">Trade Down</p>  
      <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.027 512.027" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M479.114,283.84c-1.707-3.947-5.547-6.507-9.813-6.507h-128V10.667C341.3,4.8,336.5,0,330.633,0H181.3 c-5.867,0-10.667,4.8-10.667,10.667v266.667h-128c-5.867,0-10.667,4.8-10.56,10.773c0,2.773,1.067,5.44,3.093,7.36L248.5,508.907 c4.16,4.16,10.88,4.16,15.04,0l213.333-213.44C479.86,292.373,480.82,287.893,479.114,283.84z M255.967,486.293L68.34,298.667 H181.3c5.867,0,10.667-4.8,10.667-10.667V21.333h128V288c0,5.867,4.8,10.667,10.667,10.667h112.96L255.967,486.293z"></path> </g> </g> </g></svg>
      </div>
    </Button>
        </div>
 
    </motion.div>
  );
};

export default BottomBar;
