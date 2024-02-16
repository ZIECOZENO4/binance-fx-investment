'use client'
import React, { useState } from 'react';

const Basic = () => {
  const [basicPlan, setBasicPlan] = useState({ monthlyPrice: "5% Daily", items: ['Total Roll:   40%', 'Duration:   8 Days', 'Minium Deposit:  $   200', 'Maxium Deposit:  $   2000', '5% Referral Bonus']});
  const [advancePlan, setAdvancePlan] = useState({ monthlyPrice: "5% Daily", items: ['Total Roll:   60%', 'Duration:   12 Days', 'Minium Deposit:  $   2,100', 'Maxium Deposit:  $   10,000', '5% Referral Bonus']});
  const [proPlan, setProPlan] = useState({ monthlyPrice: "5% Daily", items: ['Total Roll:   80%', 'Duration:   14 Days', 'Minium Deposit:  $   10,100', 'Maxium Deposit:  $   20,000', '5% Referral Bonus' ]});
  const [premiumPlan, setPremiumPlan] = useState({ monthlyPrice:  "10% Daily", items: ['Total Roll:   100%', 'Duration:   5 Days', 'Minium Deposit:  $   21,100', 'Maxium Deposit:  $   50,000', '5% Referral Bonus' ]});

  return (
    <div className="text-gray-900 sm:h-[200vh] font-sans h-[170vh] md:h-[120vh] lg:h-[100vh] mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom md:mx-[10vw] mx-[30px] mb-auto">
      <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center ">
        {['Basic Plan', 'Advance Plan', 'Pro Plan', 'Premium Plan'].map((plan, index) => {
          let currentPlan;
          if (plan === 'Basic Plan') {
            currentPlan = basicPlan;
          } else if (plan === 'Advance Plan') {
            currentPlan = advancePlan;
          } else if (plan === 'Pro Plan') {
            currentPlan = proPlan;
          } else {
            currentPlan = premiumPlan;
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
                <div className="bg-blue-500 hover:bg-[#FFD700]  text-white hover:text-sky-600 border border-blue-600 hover:border-transparent font-bold uppercase space-5 mt-5 py-2 px-4 rounded cursor-pointer md:text-[25px] text-[15px]"> <span className="m-2 p-2">Invest Now
                </span> </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Basic;