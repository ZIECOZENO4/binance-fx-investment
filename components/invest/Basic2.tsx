'use client'
import React, { useState,  useRef, FC, useEffect} from 'react';
import { motion } from 'framer-motion';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio, Link} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import Countdown from './UseCountDown';
import Countdown5 from './5days';
import Countdown12 from './12days';
import Countdown14 from './14days';



const Basic2 = () => {
  const router = useRouter();

  const handleInvestNowClick = () => {
     calculateProfit(amount);
     router.push({
       pathname: '/dashboard/invest/confirmpayment',
       query: {
         amount: parseFloat(amount),
         coin: selectedCoin,
         plan: 'Basic',
         planId: 'BFXITB00001'
       }
     });
  };
  const basicPlan = { monthlyPrice: "5% Daily", items: ['Total Roll:   40%', 'Duration:   8 Days', 'Minium Deposit:        $ 200', 'Maxium Deposit:  $   2000', '5% Referral Bonus', 'Plan:  Basic PLan', 'Plan ID:  BFXITB00001']};
  const advancePlan = { monthlyPrice: "5% Daily", items: ['Total Roll:   60%', 'Duration:   12 Days', 'Minium Deposit:     $ 2,100', 'Maxium Deposit:  $   10,000', '5% Referral Bonus', 'Plan:  Advance PLan', 'Plan ID:  BFXITB00002']};
  const proPlan = { monthlyPrice: "5% Daily", items: ['Total Roll:   80%', 'Duration:   14 Days', 'Minium Deposit:  $ 10,100', 'Maxium Deposit:  $   20,000', '5% Referral Bonus', 'Plan:  Pro PLan', 'Plan ID:  BFXITB00004' ]};
  const premiumPlan = { monthlyPrice:  "10% Daily", items: ['Total Roll:   100%', 'Duration:   5 Days', 'Minium Deposit:  $ 21,100', 'Maxium Deposit:  $   50,000', '5% Referral Bonus', 'Plan:  Premium PLan', 'Plan ID:  BFXITB00004' ]};
  const duration = 8 * 24 * 60 * 60;
  const duration5 = 5 * 24 * 60 * 60;
  const duration14 = 14 * 24 * 60 * 60;
  const duration12 = 12 * 24 * 60 * 60;
    const [amount, setAmount] = useState('');
    const [profit, setProfit] = useState<number | null>(null);
    const [selectedCoin, setSelectedCoin] = useState('USDT');
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
  <Countdown duration={duration} />
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
                   id="amount"
                 
               value={amount}
               onChange={handleInputChange}
               min="200"
               max="2000"
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
 value={selectedCoin}
 onChange={(e) => setSelectedCoin(e.target.value)}
>
 <option value="USDT">USDT</option>
 <option value="BTC">BTC</option>
 <option value="ETH">ETH</option>
 <option value="BNB">BNB</option>
 <option value="TRON">TRON</option>
 <option value="DOGE">DOGE</option>
 <option value="DOGE">XRP</option>
</select>
            </div>
          }
          type="number"
        />
      </div>
    </div>  

    <Button color="primary" variant="ghost" onClick={handleInvestNowClick}>
 INVEST NOW
</Button>
  </div>
     </div>
     }
   {activeTab === 'Advance' && 
   <div>
       <div>
    
    <div className="flex flex-col items-center justify-center bg-[#0000000] text-white rounded-lg p-4">
  <Countdown12 duration={duration12} />
    </div>
   </div>
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
       <div>
    
    <div className="flex flex-col items-center justify-center bg-[#0000000] text-white rounded-lg p-4">
  <Countdown14 duration={duration14} />
    </div>
   </div>
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
       <div>
    
    <div className="flex flex-col items-center justify-center bg-[#0000000] text-white rounded-lg p-4">
  <Countdown5 duration={duration5} />
    </div>
   </div>
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
