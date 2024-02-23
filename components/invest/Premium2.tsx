// 'use client'
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';


// const Premium2 = () => {
//   const [activeTab, setActiveTab] = useState('VIP -1');
//   return (
//     <div>
//    <div className='flex flex-row md:mx-2 justify-between pt-14'>
//      <motion.header
//        onClick={() => setActiveTab('VIP -1')}
//        className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5  mx-1 pt-4  cursor-pointer ${activeTab === 'VIP -1' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
//        animate={{ scale: activeTab === 'VIP -1' ? 1.2 : 1 }}
//      >
//     VIP -1
//      </motion.header>
//      <motion.header
//        onClick={() => setActiveTab('VIP -2')}
//        className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4 backdrop:pt-4  cursor-pointer ${activeTab === 'VIP -2' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
//      >
//     VIP -2
//      </motion.header>
//      <motion.header
//        onClick={() => setActiveTab('VIP -3')}
//        className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'VIP -3' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
//      >
//      VIP -3
//      </motion.header>

//    </div>
//    <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
//    {activeTab === 'VIP -1' && 
//    <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
//     <h1 className=" text-2xl text-sky-600">75% Daily </h1>
// <p>Total roll: 150%</p>
// <p>DURATION: 48 days</p>
// <p>Min deposit $50,000</p>
// <p>Max deposit $100,000</p>
// <p>5% referral bonus</p>
// <div>

// </div>
//   </div>}
//    {activeTab === 'VIP -2' && 
//      <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
//     <h1 className=" text-2xl text-sky-600">100% Daily </h1>
// <p>Total roll: 200%</p>
// <p>DURATION: 48 days</p>
// <p>Min deposit $100,000</p>
// <p>Max deposit $200,000</p>
// <p>5% referral bonus</p>
// <div>
  
// </div>
//   </div>
//    }
//    {activeTab === 'VIP -3' && 
//     <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
//     <h1 className=" text-2xl text-sky-600">125% Daily </h1>
// <p>Total roll: 100%</p>
// <p>DURATION: 48 days</p>
// <p>Min deposit $200,000</p>
// <p>Max deposit $500,000</p>
// <p>5% referral bonus</p>
// <div>
  
// </div>
//   </div>
//    }
//  </div>
//   )
// }

// export default Premium2

'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
type MouseEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
const Premium2 = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTime, setStartTime] = useState(8 *  24 *  60 *  60); //  8 days in seconds
  const [isActive, setIsActive] = useState(false);

useEffect(() => {
  let interval: NodeJS.Timeout | number | null = null;
  if (isActive && timeLeft >   0) {
    interval = setInterval(() => {
      setTimeLeft(timeLeft -   1);
    },   1000) as unknown as number; 
  } else if (!isActive && timeLeft ===   0) {
    clearInterval(interval as unknown as number); // Type assertion to number
  }
  return () => clearInterval(interval as unknown as number); // Type assertion to number
}, [isActive, timeLeft]);

  const startCountdown = () => {
    setIsActive(true);
    setTimeLeft(startTime);
  };

  const getColor = (timeLeft: number) => {
    return timeLeft <= startTime /  2 ? 'bg-red-500' : 'bg-green-500';
  };
  const vip1Plan = { monthlyPrice: "75% Daily", items: ['Total Roll: 150%', 'Duration: 48 Hours', 'Minium Deposit:  $ 50,000', 'Maxium Deposit:  $ 100,000', '5% Referral Bonus']};
  const vip2Plan = { monthlyPrice: "100% Daily", items: ['Total Roll: 200%', 'Duration: 48 Hours', 'Minium Deposit:  $ 100,000', 'Maxium Deposit:  $ 200,000', '5% Referral Bonus' ]};
  const vip3Plan = { monthlyPrice:  "100% Daily", items: ['Total Roll: 250%', 'Duration: 48 Hours', 'Minium Deposit:  $ 200,000', 'Maxium Deposit:  $ 500,000', '15% Referral Bonus' ]};


    const [amount, setAmount] = useState('');
    const [profit, setProfit] = useState<number | null>(null);
    const [error, setError] = useState('');
  
    const calculateProfit = (input: string) => {
      const value = parseInt(input,  10);
      if (value <  50000 || value >  100000) {
        setError('The amount must be between  50,000 and  100,000.');
        setProfit(null);
        return;
      }
  
      const profitValue = value *  0.75;
      setProfit(profitValue);
      setError('');
    };
    const calculateProfit2 = (input: string) => {
      const value = parseInt(input,  10);
      if (value <  100000 || value >  200000) {
        setError('The amount must be between  100,000 and  200,000.');
        setProfit(null);
        return;
      }
  
      const profitValue = value *  1;
      setProfit(profitValue);
      setError('');
    };
    const calculateProfit3 = (input: string) => {
      const value = parseInt(input,  10);
      if (value <  200000 || value >  500000) {
        setError('The amount must be between  200,000 and  500,000.');
        setProfit(null);
        return;
      }
  
      const profitValue = value *  1;
      setProfit(profitValue);
      setError('');
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(event.target.value);
    };
  
    const handleButtonClick = () => {
      calculateProfit(amount);

    
    
    };
    const handleButtonClick2 = () => {
      calculateProfit2(amount);
    };
    const handleButtonClick3 = () => {
      calculateProfit3(amount);
    };
    const currentDate = new Date();
    const dateTwoDaysFromNow = new Date();
    dateTwoDaysFromNow.setDate(currentDate.getDate() +  2);

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const [activeTab, setActiveTab] = useState('Vip2');
  return (
    <div>
    <div className="flex  flex-wrap space-x-4">
      <div className={`text-white p-4 rounded-full text-center ${getColor(timeLeft)}`}>
        {Math.floor(timeLeft / (24 *  60 *  60))} days
      </div>
      <div className={`text-white p-4 rounded-full text-center ${getColor(timeLeft)}`}>
        {Math.floor((timeLeft % (24 *  60 *  60)) / (60 *  60))} hours
      </div>
      <div className={`text-white p-4 rounded-full text-center ${getColor(timeLeft)}`}>
        {Math.floor((timeLeft % (60 *  60)) /  60)} minutes
      </div>
      <div className={`text-white p-4 rounded-full text-center ${getColor(timeLeft)}`}>
        {timeLeft %  60} seconds
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={startCountdown}
      >
        Start
      </button>
    </div>


   <div className='flex flex-row md:mx-2 justify-between pt-14'>
     <motion.header
       onClick={() => setActiveTab('Vip1')}
       className={`text-slate-200 font-heading text-xl md:text-2xl border-b-2 md:mx-5  mx-1 pt-4  cursor-pointer ${activeTab === 'Vip1' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
       animate={{ scale: activeTab === 'Vip1' ? 1.2 : 1 }}
     >
    Vip1
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Vip2')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4 backdrop:pt-4  cursor-pointer ${activeTab === 'Vip2' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
    Vip2
     </motion.header>
  
     <motion.header
       onClick={() => setActiveTab('Vip3')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Vip3' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     Vip3
     </motion.header>
   </div>
   <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
   {activeTab === 'Vip1' && 
   <div className="text-gray-900  mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom   mb-auto">
   <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center ">
     <div className="border rounded-lg text-center p-5 mx-auto md:mx-10 my-2 md:my-6 bg-slate-600 text-green-400 text-[30px] md:text-[40px] z-10 shadow-lg">
      
       <div className="font-bold md:text-[45px] text-[35px]">{vip1Plan.monthlyPrice}</div>
       <hr />
       {vip1Plan.items.map((item, index) => (
         <React.Fragment key={index}>
           <div className="md:text-[40px] text-[22px] my-3">{item}</div>
           <div>

   

           </div>
           <hr />
         </React.Fragment>
       ))}
        <div className="flex flex-col gap-2">
    <Button onPress={() => {
  setModalPlacement("bottom");
  onOpen();
}} className="max-w-fit bg-sky-600 text-white text-bold m-2 p-2">Open Calculator</Button>

<Modal  
  isOpen={isOpen}  
  placement={modalPlacement as "auto" | "center" | "bottom" | "top" | "top-center" | "bottom-center" | undefined}
  onOpenChange={onOpenChange}  
>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Calculate Profit</ModalHeader>
              <ModalBody>
              <div className="p-4">
              <label htmlFor="amount">Amount:</label>
      <input
      id="amount"
        type="number"
        className="border-2 border-gray-300 p-2 rounded"
        value={amount}
        onChange={handleInputChange}
        min="50,000"
        max="100,000"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleButtonClick}
      >
        Calculate Profit
      </button>
      {profit && (
        <div className="mt-4">
          <p>Profit: {profit.toFixed(2)}</p>
          <p>From: {currentDate.toLocaleDateString()}</p>
          <p>Till: {dateTwoDaysFromNow.toLocaleDateString()}</p>
        </div>
      )}
    </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="solid" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>

     </div>
     </div>
     </div>
     }
   {activeTab === 'Vip2' && 
   <div className="border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-sky-700 text-[#FFD700] font-bold  tracking-widest transition-transform-colors text-[30px] md:text-[40px] z-10 shadow-lg">
         
          <div className="font-bold md:text-[45px] text-[35px]">{vip2Plan.monthlyPrice}</div>
          <hr />
          {vip2Plan.items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:text-[40px] text-[22px] my-3">{item}</div>
              <hr />
            </React.Fragment>
          ))}
        <div className="flex flex-col gap-2">
    <Button onPress={() => {
  setModalPlacement("bottom");
  onOpen();
}} className="max-w-fit bg-sky-600 text-white text-bold m-2 p-2">Open Calculator</Button>

<Modal  
  isOpen={isOpen}  
  placement={modalPlacement as "auto" | "center" | "bottom" | "top" | "top-center" | "bottom-center" | undefined}
  onOpenChange={onOpenChange}  
>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Calculate Profit</ModalHeader>
              <ModalBody>
              <div className="p-4">
              <label htmlFor="amount">Amount:</label>
      <input
      id="amount"
        type="number"
        className="border-2 border-gray-300 p-2 rounded"
        value={amount}
        onChange={handleInputChange}
        min="100,000"
        max="200,000"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleButtonClick2}
      >
        Calculate Profit
      </button>
      {profit && (
        <div className="mt-4">
          <p>Profit: {profit.toFixed(2)}</p>
          <p>From: {currentDate.toLocaleDateString()}</p>
          <p>Till: {dateTwoDaysFromNow.toLocaleDateString()}</p>
        </div>
      )}
    </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="solid" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
        </div>
   }
   {activeTab === 'Vip3' && 
 <div className="text-gray-900 border rounded-lg text-center p-5 mx-auto my-2 md:my-6 bg-slate-600  text-[25px] md:text-[40px] z-10 shadow-lg mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom md:mx-[3vw] mb-auto">
 <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center ">
   <div className="border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-slate-600 text-green-400 text-[30px] md:text-[40px] z-10 shadow-lg">
    
     <div className="font-bold md:text-[45px] text-[35px]">{vip3Plan.monthlyPrice}</div>
     <hr />
     {vip3Plan.items.map((item, index) => (
       <React.Fragment key={index}>
         <div className="md:text-[40px] text-[22px] my-3">{item}</div>
         <hr />
       </React.Fragment>
     ))}
    <div className="flex flex-col gap-2">
    <Button onPress={() => {
  setModalPlacement("bottom");
  onOpen();
}} className="max-w-fit bg-sky-600 text-white text-bold m-2 p-2">Open Calculator</Button>

<Modal  
  isOpen={isOpen}  
  placement={modalPlacement as "auto" | "center" | "bottom" | "top" | "top-center" | "bottom-center" | undefined}
  onOpenChange={onOpenChange}  
>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Calculate Profit</ModalHeader>
              <ModalBody>
              <div className="p-4">
              <label htmlFor="amount">Amount:</label>
      <input
      id="amount"
        type="number"
        className="border-2 border-gray-300 p-2 rounded"
        value={amount}
        onChange={handleInputChange}
        min="200,000"
        max="500,000"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleButtonClick3}
      >
        Calculate Profit
      </button>
      {profit && (
        <div className="mt-4">
          <p>Profit: {profit.toFixed(2)}</p>
          <p>From: {currentDate.toLocaleDateString()}</p>
          <p>Till: {dateTwoDaysFromNow.toLocaleDateString()}</p>
        </div>
      )}
    </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="solid" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
   </div>
   </div>
   </div>
   }
    </div>
  )
}

export default Premium2;
