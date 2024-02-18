// 'use client'
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

// const Basic2 = () => {
//   const [activeTab, setActiveTab] = useState('Basic');
//   return (
//     <div>
//    <div className='flex flex-row md:mx-2 justify-between pt-14'>
//      <motion.header
//        onClick={() => setActiveTab('Basic')}
//        className={`text-slate-200 font-heading text-xl md:text-2xl border-b-2 md:mx-5  mx-1 pt-4  cursor-pointer ${activeTab === 'Basic' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
//        animate={{ scale: activeTab === 'Basic' ? 1.2 : 1 }}
//      >
//     Basic
//      </motion.header>
//      <motion.header
//        onClick={() => setActiveTab('Advance')}
//        className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4 backdrop:pt-4  cursor-pointer ${activeTab === 'Advance' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
//      >
//     Advance
//      </motion.header>
//      <motion.header
//        onClick={() => setActiveTab('Premium')}
//        className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Premium' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
//      >
//      Premium
//      </motion.header>
//      <motion.header
//        onClick={() => setActiveTab('Pro Plan')}
//        className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Pro Plan' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
//      >
//      Pro Plan
//      </motion.header>
//    </div>
//    <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
//    {activeTab === 'Basic' && 
//    <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
// <div>
// <div>
//       <Card className="max-w-[400px]">
//       <CardHeader className="flex gap-3">
     
//         <div className="flex flex-col justify-center align-middle">
//         <h1 className=" text-3xl text-sky-600">5% Daily </h1>
         
//         </div>
//       </CardHeader>
//       <Divider/>
//       <CardBody>
//       <p>Total roll: 40%</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>DURATION: 8 days</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>Min deposit $200</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>Max deposit $2,000</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>5% referral bonus</p>
//       </CardBody>
//       <Divider/>
//       <CardFooter>
//         <Link
//           isExternal
//           showAnchorIcon
//           href="https://github.com/nextui-org/nextui"
//         >
//           View your transaction receipt.
//         </Link>
//       </CardFooter>
//     </Card>
//       </div>
// </div>
//   </div>}
//    {activeTab === 'Advance' && 
//      <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
// <div>
// <div>
//       <Card className="max-w-[400px]">
//       <CardHeader className="flex gap-3">
  
//         <div className="flex flex-col justify-center align-middle">
//         <h1 className=" text-3xl text-sky-600">5% Daily </h1>
         
//         </div>
//       </CardHeader>
//       <Divider/>
//       <CardBody>
//       <p>Total roll: 60%</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>DURATION: 12 days</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>Min deposit $2,100</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>Max deposit $10,000</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>5% referral bonus</p>
//       </CardBody>
//       <Divider/>
//       <CardFooter>
//         <Link
//           isExternal
//           showAnchorIcon
//           href="https://github.com/nextui-org/nextui"
//         >
//           View your transaction receipt.
//         </Link>
//       </CardFooter>
//     </Card>
//       </div>
// </div>
//   </div>
//    }
//    {activeTab === 'Pro Plan' && 
//      <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
//  <div>
//  <div>
//       <Card className="max-w-[400px]">
//       <CardHeader className="flex gap-3">
  
//         <div className="flex flex-col justify-center align-middle">
//         <h1 className=" text-3xl text-sky-600">5% Daily </h1>
         
//         </div>
//       </CardHeader>
//       <Divider/>
//       <CardBody>
//       <p>Total roll: 80%</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>DURATION: 14 days</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>Min deposit  $10,100</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>Max deposit $20,000</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>5% referral bonus</p>
//       </CardBody>
//       <Divider/>
//       <CardFooter>
//         <Link
//           isExternal
//           showAnchorIcon
//           href="https://github.com/nextui-org/nextui"
//         >
//           View your transaction receipt.
//         </Link>
//       </CardFooter>
//     </Card>
//       </div>
//  </div>
//    </div>
//    }
//    {activeTab === 'Premium' && 
//     <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">

// <div>
// <div>
//       <Card className="max-w-[400px]">
//       <CardHeader className="flex gap-3">
 
//         <div className="flex flex-col justify-center align-middle">
//         <h1 className=" text-3xl text-sky-600">5% Daily </h1>
         
//         </div>
//       </CardHeader>
//       <Divider/>
//       <CardBody>
//       <p>Total roll: 100%</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>DURATION: 48 days</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>Min deposit  $21,100</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>Max deposit $50,000</p>
//       </CardBody>
//       <Divider/>
//       <CardBody>
//       <p>5% referral bonus</p>
//       </CardBody>
//       <Divider/>
//       <CardFooter>
//         <Link
//           isExternal
//           showAnchorIcon
//           href="https://github.com/nextui-org/nextui"
//         >
//           View your transaction receipt.
//         </Link>
//       </CardFooter>
//     </Card>
//       </div>
// </div>
//   </div>
//    }
//  </div>
//   )
// }

// export default Basic2

'use client'
import React, { useState } from 'react';

const Basic2 = () => {
  const [basicPlan, setBasicPlan] = useState({ monthlyPrice: "5% Daily", items: ['Total Roll:   40%', 'Duration:   8 Days', 'Minium Deposit:  $   200', 'Maxium Deposit:  $   2000', '5% Referral Bonus']});
  const [advancePlan, setAdvancePlan] = useState({ monthlyPrice: "5% Daily", items: ['Total Roll:   60%', 'Duration:   12 Days', 'Minium Deposit:  $   2,100', 'Maxium Deposit:  $   10,000', '5% Referral Bonus']});
  const [proPlan, setProPlan] = useState({ monthlyPrice: "5% Daily", items: ['Total Roll:   80%', 'Duration:   14 Days', 'Minium Deposit:  $   10,100', 'Maxium Deposit:  $   20,000', '5% Referral Bonus' ]});
  const [premiumPlan, setPremiumPlan] = useState({ monthlyPrice:  "10% Daily", items: ['Total Roll:   100%', 'Duration:   5 Days', 'Minium Deposit:  $   21,100', 'Maxium Deposit:  $   50,000', '5% Referral Bonus' ]});

  return (
    <div className="text-gray-900 sm:h-[200vh] font-sans h-[230vh] md:h-[150vh] lg:h-[100vh] mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom md:mx-[3vw] mx-[30px] mb-auto">
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
            <div key={index} className={`border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 ${plan === 'Premium Plan' || plan === 'Advance Plan' ? 'bg-sky-700 text-[#FFD700] font-bold  tracking-widest transition-transform-colors ' : 'bg-slate-600 text-green-400'} text-[25px] md:text-[40px] z-10 shadow-lg`}>
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

export default Basic2;