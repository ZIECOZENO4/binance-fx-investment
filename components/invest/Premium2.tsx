

'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import Link from 'next/link';
import Countdown2a from './2day1';
import Countdown2b from './2day2';
import Countdown2c from './2day3';
type MouseEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
const Premium2 = () => {
  const [isActive, setIsActive] = useState(false);


  const vip1Plan = { monthlyPrice: "75% Daily", items: ['Total Roll: 150%', 'Duration: 48 Hours', 'Minium Deposit:  $ 50,000', 'Maxium Deposit:  $ 100,000', '5% Referral Bonus']};
  const vip2Plan = { monthlyPrice: "100% Daily", items: ['Total Roll: 200%', 'Duration: 48 Hours', 'Minium Deposit:  $ 100,000', 'Maxium Deposit:  $ 200,000', '5% Referral Bonus' ]};
  const vip3Plan = { monthlyPrice:  "100% Daily", items: ['Total Roll: 250%', 'Duration: 48 Hours', 'Minium Deposit:  $ 200,000', 'Maxium Deposit:  $ 500,000', '15% Referral Bonus' ]};
  const duration21 =  2 * 24 * 60 * 60;
  const duration22 =  2 * 24 * 60 * 60;
  const duration23 =  2 * 24 * 60 * 60;
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
    <div >
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
   <div>
        <div className="flex flex-col items-center justify-center bg-[#0000000] text-white rounded-lg p-4">
  <Countdown2a duration={duration21} />
    </div>
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
   {activeTab === 'Vip2' && 
   <div>
          <div className="flex flex-col items-center justify-center bg-[#0000000] text-white rounded-lg p-4">
  <Countdown2b duration={duration22} />
    </div>
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
   {activeTab === 'Vip3' && 
   <div>
          <div className="flex flex-col items-center justify-center bg-[#0000000] text-white rounded-lg p-4">
  <Countdown2c duration={duration23} />
    </div>
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
    </div>
  )
}

export default Premium2;
