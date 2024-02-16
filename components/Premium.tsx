'use client'
import React, { useState } from 'react';

const Premium = () => {
  const [vip1Plan, setVip1Plan] = useState({ monthlyPrice: "75% Daily", items: ['Total Roll: 150%', 'Duration: 48 Days', 'Minium Deposit:  $ 50,000', 'Maxium Deposit:  $ 100,000', '5% Referral Bonus']});
  const [vip2Plan, setVip2Plan] = useState({ monthlyPrice: "100% Daily", items: ['Total Roll: 200%', 'Duration: 48 Days', 'Minium Deposit:  $ 100,000', 'Maxium Deposit:  $ 200,000', '5% Referral Bonus' ]});
  const [vip3Plan, setVip3Plan] = useState({ monthlyPrice:  "100% Daily", items: ['Total Roll: 250%', 'Duration: 48 Days', 'Minium Deposit:  $ 200,000', 'Maxium Deposit:  $ 500,000', '15% Referral Bonus' ]});



  return (
    <div className="text-gray-900 sm:h-[150vh] font-sans h-[150vh] md:h-[100vh] lg:h-[140vh] mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom md:mx-[10vw] mx-[30px] mb-auto">
 
      <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center ">
        {['Vip1 Plan', 'Vip2 Plan', 'Vip3 Plan'].map((plan, index) => {
          let currentPlan;
          if (plan === 'Vip1 Plan') {
            currentPlan = vip1Plan;
          } else if (plan === 'Vip2 Plan') {
            currentPlan = vip2Plan;
          } else {
            currentPlan = vip3Plan;
          }

          return (
            <div key={index} className={`border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 ${plan === 'Vip2 Plan' ? 'bg-sky-700 text-[#FFD700] font-bold  tracking-widest transition-transform-colors ' : 'bg-slate-600 text-green-400'} text-[25px] md:text-[40px] z-10 shadow-lg`}>
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
