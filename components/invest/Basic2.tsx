'use client'
import React, { useState,  useRef, FC, useEffect} from 'react';
import { motion } from 'framer-motion';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import Link from 'next/link';

type RenderTimeProps = {
  remainingTime: number;
  days: number;
   hours: number;
    minutes: number;
};

const RenderTime: FC<RenderTimeProps> = ({ remainingTime }) => {
  const [, setOneLastRerender] = useState(0);
  const currentTime = useRef(remainingTime);
  const prevTime = useRef<number | null>(null);
  const isNewTimeFirstTick = useRef(false);
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number } | null>(null);
 const [countdownStarted, setCountdownStarted] = useState(false);

 useEffect(() => {
  let interval: NodeJS.Timeout;
    if (countdownStarted) {
      const countdownDate = new Date().getTime() + 8 * 24 * 60 * 60 * 1000; // 8 days from now

      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });

        if (distance < 0) {
          clearInterval(interval);
          setTimeLeft(null);
          setCountdownStarted(false);
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
 }, [countdownStarted]);

 const startCountdown = () => {
    setCountdownStarted(true);
 };

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  if (remainingTime ===  0) {
    setTimeout(() => {
      setOneLastRerender((val) => val +  1);
    },  20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper relative w-20 h-15 text-9xl font-mono">
      <div key={remainingTime} className={`time absolute inset-0 flex items-center justify-center transform transition-all duration-200 ${isTimeUp ? "opacity-0 -translate-y-full" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time absolute inset-0 flex items-center justify-center transform transition-all duration-200 ${!isTimeUp ? "opacity-0 translate-y-full" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

const Basic2 = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTime, setStartTime] = useState(8 *  24 *  60 *  60); //  8 days in seconds
  const [isActive, setIsActive] = useState(false);
  const daysToCountDown =  8; // Number of days you want to count down from
  const durationInSeconds = daysToCountDown *  24 *  60 *  60;

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
  const basicPlan = { monthlyPrice: "5% Daily", items: ['Total Roll:   40%', 'Duration:   8 Days', 'Minium Deposit:        $ 200', 'Maxium Deposit:  $   2000', '5% Referral Bonus']};
  const advancePlan = { monthlyPrice: "5% Daily", items: ['Total Roll:   60%', 'Duration:   12 Days', 'Minium Deposit:     $ 2,100', 'Maxium Deposit:  $   10,000', '5% Referral Bonus']};
  const proPlan = { monthlyPrice: "5% Daily", items: ['Total Roll:   80%', 'Duration:   14 Days', 'Minium Deposit:  $ 10,100', 'Maxium Deposit:  $   20,000', '5% Referral Bonus' ]};
  const premiumPlan = { monthlyPrice:  "10% Daily", items: ['Total Roll:   100%', 'Duration:   5 Days', 'Minium Deposit:  $ 21,100', 'Maxium Deposit:  $   50,000', '5% Referral Bonus' ]};

    const [amount, setAmount] = useState('');
    const [profit, setProfit] = useState<number | null>(null);
    const [error, setError] = useState('');
  
    const calculateProfit = (input: string) => {
      const value = parseInt(input,  10);
      if (value <  200 || value >  2000) {
        setError('The amount must be between  200 and  2000.');
        setProfit(null);
        return;
      }
  
      const profitValue = value *  0.4;
      setProfit(profitValue);
      setError('');
    };
    const calculateProfit2 = (input: string) => {
      const value = parseInt(input,  10);
      if (value <  2100 || value >  10000) {
        setError('The amount must be between  2,100 and  10,000.');
        setProfit(null);
        return;
      }
  
      const profitValue = value *  0.6;
      setProfit(profitValue);
      setError('');
    };
    const calculateProfit3 = (input: string) => {
      const value = parseInt(input,  10);
      if (value <  21100 || value >  50000) {
        setError('The amount must be between  21,100 and  50,000.');
        setProfit(null);
        return;
      }
  
      const profitValue = value *  1;
      setProfit(profitValue);
      setError('');
    };
    const calculateProfit4 = (input: string) => {
      const value = parseInt(input,  10);
      if (value <  10100 || value >  20000) {
        setError('The amount must be between  10,100 and  20,000.');
        setProfit(null);
        return;
      }
  
      const profitValue = value *  0.6;
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
    const handleButtonClick4 = () => {

      calculateProfit4(amount);
  
    };

    const currentDate = new Date();
    const dateFourDaysFromNow = new Date();
    const dateTwelveDaysFromNow = new Date();
    const dateFiveDaysFromNow = new Date();
    const dateFourteenDaysFromNow = new Date();
    dateFourDaysFromNow.setDate(currentDate.getDate() +  8);
    dateTwelveDaysFromNow.setDate(currentDate.getDate() +  12);
    dateFiveDaysFromNow .setDate(currentDate.getDate() +  5);
    dateFourteenDaysFromNow.setDate(currentDate.getDate() +  14);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const [activeTab, setActiveTab] = useState('Basic');
  return (
    <div>
   <div className='flex flex-row md:mx-2 justify-between pt-14'>
     <motion.header
       onClick={() => setActiveTab('Basic')}
       className={`text-slate-200 font-heading text-xl md:text-2xl border-b-2 md:mx-5  mx-1 pt-4  cursor-pointer ${activeTab === 'Basic' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
       animate={{ scale: activeTab === 'Basic' ? 1.2 : 1 }}
     >
    Basic
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Advance')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4 backdrop:pt-4  cursor-pointer ${activeTab === 'Advance' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
    Advance
     </motion.header>
  
     <motion.header
       onClick={() => setActiveTab('Pro Plan')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Pro Plan' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     Pro Plan
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Premium')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Premium' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     Premium
     </motion.header>
   </div>
   <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
  

   {activeTab === 'Basic' && 
   <div>
   <div>
    
    <div className="flex flex-col items-center justify-center bg-[#0000000] text-white rounded-lg p-4">
      <div>
        {timeLeft && (
          <div className="flex items-center justify-between">
            <svg
      xmlns="http://www.w3.org/20000/svg"
      width="24"
      height="24"
      className="w-6 h-6 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6-6" />
    </svg>
            <div className="flex space-x-2 mt-4">
              <div className="flex flex-col items-center justify-center bg-white text-black rounded-lg p-2">
                <span className="text-2xl font-bold">{timeLeft.days}</span>
                <span className="text-xs uppercase">days</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="flex flex-col items-center justify-center bg-white text-black rounded-lg p-2">
                <span className="text-2xl font-bold">{timeLeft.hours}</span>
                <span className="text-xs uppercase">hours</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="flex flex-col items-center justify-center bg-white text-black rounded-lg p-2">
                <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                <span className="text-xs uppercase">minutes</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* {!countdownStarted && (
        <button onClick={startCountdown} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Countdown
        </button>
      )} */}
    </div>
   </div>
   <div className="text-gray-900  mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom   mb-auto">
   <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center ">
     <div className="border rounded-lg text-center p-5 mx-auto md:mx-10 my-2 md:my-6 bg-slate-600 text-green-400 text-[30px] md:text-[40px] z-10 shadow-lg">
      
       <div className="font-bold md:text-[45px] text-[35px]">{basicPlan.monthlyPrice}</div>
       <hr />
       {basicPlan.items.map((item, index) => (
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
        min="200"
        max="2000"
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
          <p>Till: {dateFourDaysFromNow.toLocaleDateString()}</p>
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
     <div className="flex flex-col justify-center align-middle items-center mb-20  mt-4 p-2 border border-white rounded-xl box-border ">
    <h1 className="flex justify-center align-middle items-center p-4 text-2xl font-serif font-bold text-sky-600">
      PAYMENT
    </h1>
    <p className="flex justify-center align-middle items-center p-2 text-xl font-serif font-bold text-sky-600">Select Coin</p>



    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
       <Input
          
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                COIN
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>BTC</option>
                <option>ETH</option>
                <option>BNB</option>
                <option>TRON</option>
                <option>DOGE</option>
                <option>XRP</option>

              </select>
            </div>
          }
          type="number"
        />
      </div>
    </div>  
    <Link href="/dashboard/invest/confirmpayment">
       <Button color="primary" variant="ghost" >
      INVEST NOW
    </Button>
    </Link>

  </div>
     </div>
     }
   {activeTab === 'Advance' && 
   <div>
   <div className="border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-sky-700 text-[#FFD700] font-bold  tracking-widest transition-transform-colors text-[30px] md:text-[40px] z-10 shadow-lg">
         
          <div className="font-bold md:text-[45px] text-[35px]">{advancePlan.monthlyPrice}</div>
          <hr />
          {advancePlan.items.map((item, index) => (
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
        min="2,100"
        max="10,000"
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
          <p>Till: {dateTwelveDaysFromNow.toLocaleDateString()}</p>
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
             <div className="flex flex-col justify-center align-middle items-center mb-20  mt-4 p-2 border border-white rounded-xl box-border ">
             <h1 className="flex justify-center align-middle items-center p-4 text-2xl font-serif font-bold text-sky-600">
               PAYMENT
             </h1>
             <p className="flex justify-center align-middle items-center p-2 text-xl font-serif font-bold text-sky-600">Select Coin</p>
         
         
         
             <div className="flex flex-col gap-4">
               <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                   
                   placeholder="0.00"
                   labelPlacement="outside"
                   startContent={
                     <div className="flex items-center">
                       <label className="sr-only" htmlFor="currency">
                         COIN
                       </label>
                       <select
                         className="outline-none border-0 bg-transparent text-default-400 text-small"
                         id="currency"
                         name="currency"
                       >
                         <option>BTC</option>
                         <option>ETH</option>
                         <option>BNB</option>
                         <option>TRON</option>
                         <option>DOGE</option>
                         <option>XRP</option>
         
                       </select>
                     </div>
                   }
                   type="number"
                 />
               </div>
             </div>  
             <Link href="/dashboard/invest/confirmpayment">
                <Button color="primary" variant="ghost" >
               INVEST NOW
             </Button>
             </Link>
         
           </div>
              </div>
   }
   {activeTab === 'Pro Plan' && 
   <div>
 <div className="text-gray-900 border rounded-lg text-center p-5 mx-auto my-2 md:my-6 bg-slate-600  text-[25px] md:text-[40px] z-10 shadow-lg mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom md:mx-[3vw] mb-auto">
 <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center ">
   <div className="border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-slate-600 text-green-400 text-[30px] md:text-[40px] z-10 shadow-lg">
    
     <div className="font-bold md:text-[45px] text-[35px]">{proPlan.monthlyPrice}</div>
     <hr />
     {proPlan.items.map((item, index) => (
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
        min="10,100"
        max="20,000"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleButtonClick4}
      >
        Calculate Profit
      </button>
      {profit && (
        <div className="mt-4">
          <p>Profit: {profit.toFixed(2)}</p>
          <p>From: {currentDate.toLocaleDateString()}</p>
          <p>Till: {dateFourteenDaysFromNow.toLocaleDateString()}</p>
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
        <div className="flex flex-col justify-center align-middle items-center mb-20  mt-4 p-2 border border-white rounded-xl box-border ">
        <h1 className="flex justify-center align-middle items-center p-4 text-2xl font-serif font-bold text-sky-600">
          PAYMENT
        </h1>
        <p className="flex justify-center align-middle items-center p-2 text-xl font-serif font-bold text-sky-600">Select Coin</p>
    
    
    
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
           <Input
              
              placeholder="0.00"
              labelPlacement="outside"
              startContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="currency">
                    COIN
                  </label>
                  <select
                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                    id="currency"
                    name="currency"
                  >
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>BNB</option>
                    <option>TRON</option>
                    <option>DOGE</option>
                    <option>XRP</option>
    
                  </select>
                </div>
              }
              type="number"
            />
          </div>
        </div>  
        <Link href="/dashboard/invest/confirmpayment">
           <Button color="primary" variant="ghost" >
          INVEST NOW
        </Button>
        </Link>
    
      </div>
         </div>
   }
   {activeTab === 'Premium' && 
   <div>
   <div className="border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-sky-700 text-[#FFD700] font-bold  tracking-widest transition-transform-colors text-[30px] md:text-[40px] z-10 shadow-lg">
       
          <div className="font-bold md:text-[45px] text-[35px]">{premiumPlan.monthlyPrice}</div>
          <hr />
          {premiumPlan.items.map((item, index) => (
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
        min="2,100"
        max="10,000"
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
          <p>Till: {dateFiveDaysFromNow.toLocaleDateString()}</p>
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
        <div className="flex flex-col justify-center align-middle items-center mb-20  mt-4 p-2 border border-white rounded-xl box-border ">
    <h1 className="flex justify-center align-middle items-center p-4 text-2xl font-serif font-bold text-sky-600">
      PAYMENT
    </h1>
    <p className="flex justify-center align-middle items-center p-2 text-xl font-serif font-bold text-sky-600">Select Coin</p>



    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
       <Input
          
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                COIN
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>BTC</option>
                <option>ETH</option>
                <option>BNB</option>
                <option>TRON</option>
                <option>DOGE</option>
                <option>XRP</option>

              </select>
            </div>
          }
          type="number"
        />
      </div>
    </div>  
    <Link href="/dashboard/invest/confirmpayment">
       <Button color="primary" variant="ghost" >
      INVEST NOW
    </Button>
    </Link>

  </div>
     </div>
   }
    </div>
  )
}

export default Basic2
