'use client'
import React, { useState } from 'react';

const Premium = () => {
  const [basicPlan, setBasicPlan] = useState({ monthlyPrice: "5% Daily", items: ['Total Roll: 20%', 'Duration: 9 Days', 'Minium Deposit:  $ 5.000', 'Maxium Deposit:  $ 20.000', '5% Referral Bonus']});
  const [proPlan, setProPlan] = useState({ monthlyPrice: "10% Daily", items: ['Total Roll: 45%', 'Duration: 9 Days', 'Minium Deposit:  $ 2500', 'Maxium Deposit:  $ 7000', '10% Referral Bonus' ]});
  const [regularPlan, setRegularPlan] = useState({ monthlyPrice:  "15% Daily", items: ['Total Roll: 70%', 'Duration: 9 Days', 'Minium Deposit:  $ 3000', 'Maxium Deposit:  $ 15000', '15% Referral Bonus' ]});



  return (
    <div className="text-gray-900 sm:h-[240vh] font-sans h-[235vh] md:h-[150vh] lg:h-[140vh] mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom md:mx-[10vw] mx-[30px] mb-auto">
 
      <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center ">
        {['Advance Plan', 'Premium Plan', 'Vip Plan'].map((plan, index) => {
          let currentPlan;
          if (plan === 'Advance Plan') {
            currentPlan = basicPlan;
          } else if (plan === 'Premium Plan') {
            currentPlan = proPlan;
          } else {
            currentPlan = regularPlan;
          }

          return (
            <div key={index} className={`border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 ${plan === 'Premium Plan' ? 'bg-sky-700 text-[#FFD700] font-bold  tracking-widest transition-transform-colors ' : 'bg-slate-600 text-green-400'} text-[25px] md:text-[40px] z-10 shadow-lg`}>
              <div className="">{plan}</div>
              <div  className={`font-bold md:text-[45px] text-[20px]  `}> {currentPlan.monthlyPrice}</div>
         
              <hr />
              {currentPlan.items.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="md:text-[25px] text-[17px] my-3">{item}</div>
                  <hr />
                </React.Fragment>
              ))}
              <a href="#" target="_blank">
                <div className="bg-blue-500 hover:bg-[#FFD700]  text-white hover:text-sky-600 border border-blue-600 hover:border-transparent font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer md:text-[40px] text-[15px]"><span className=" p-2">Invest Now
                </span></div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Premium;
