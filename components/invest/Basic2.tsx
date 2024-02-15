'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const Basic2 = () => {
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
       onClick={() => setActiveTab('Premium')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Premium' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     Premium
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Pro Plan')}
       className={`text-slate-200 font-heading  text-xl md:text-2xl border-b-2 md:mx-5 mx-1 pt-4  cursor-pointer ${activeTab === 'Pro Plan' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     Pro Plan
     </motion.header>
   </div>
   <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
   {activeTab === 'Basic' && 
   <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
<div>
<div>
      <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
      <svg fill="#41359c" height="100px" width="100px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27,10H6c-1.1,0-2-0.9-2-2s0.9-2,2-2h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H6C3.8,4,2,5.8,2,8v16c0,2.2,1.8,4,4,4h21 c1.7,0,3-1.3,3-3V13C30,11.3,28.7,10,27,10z M28,15.8v6.4c-0.3-0.1-0.6-0.2-1-0.2h-4c-1.7,0-3-1.3-3-3s1.3-3,3-3h4 C27.4,16,27.7,15.9,28,15.8z"></path> <path d="M7,7C6.4,7,6,7.4,6,8s0.4,1,1,1h4c0,0,0,0,0,0s0,0,0,0h15c0.3,0,0.6-0.2,0.8-0.4c0.2-0.3,0.2-0.6,0.1-0.9l-2-5 c-0.2-0.5-0.8-0.8-1.3-0.6L10.8,7H7z"></path> <path d="M25,18h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S25.6,18,25,18z"></path> </g> </g></svg>
        <div className="flex flex-col justify-center align-middle">
        <h1 className=" text-3xl text-sky-600">5% Daily </h1>
         
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <p>Total roll: 40%</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>DURATION: 8 days</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>Min deposit $200</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>Max deposit $2,000</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>5% referral bonus</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          View your transaction receipt.
        </Link>
      </CardFooter>
    </Card>
      </div>
</div>
  </div>}
   {activeTab === 'Advance' && 
     <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
<div>
<div>
      <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
      <svg fill="#41359c" height="100px" width="100px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27,10H6c-1.1,0-2-0.9-2-2s0.9-2,2-2h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H6C3.8,4,2,5.8,2,8v16c0,2.2,1.8,4,4,4h21 c1.7,0,3-1.3,3-3V13C30,11.3,28.7,10,27,10z M28,15.8v6.4c-0.3-0.1-0.6-0.2-1-0.2h-4c-1.7,0-3-1.3-3-3s1.3-3,3-3h4 C27.4,16,27.7,15.9,28,15.8z"></path> <path d="M7,7C6.4,7,6,7.4,6,8s0.4,1,1,1h4c0,0,0,0,0,0s0,0,0,0h15c0.3,0,0.6-0.2,0.8-0.4c0.2-0.3,0.2-0.6,0.1-0.9l-2-5 c-0.2-0.5-0.8-0.8-1.3-0.6L10.8,7H7z"></path> <path d="M25,18h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S25.6,18,25,18z"></path> </g> </g></svg>
        <div className="flex flex-col justify-center align-middle">
        <h1 className=" text-3xl text-sky-600">5% Daily </h1>
         
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <p>Total roll: 60%</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>DURATION: 12 days</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>Min deposit $2,100</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>Max deposit $10,000</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>5% referral bonus</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          View your transaction receipt.
        </Link>
      </CardFooter>
    </Card>
      </div>
</div>
  </div>
   }
   {activeTab === 'Pro Plan' && 
     <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">
 <div>
 <div>
      <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
      <svg fill="#41359c" height="100px" width="100px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27,10H6c-1.1,0-2-0.9-2-2s0.9-2,2-2h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H6C3.8,4,2,5.8,2,8v16c0,2.2,1.8,4,4,4h21 c1.7,0,3-1.3,3-3V13C30,11.3,28.7,10,27,10z M28,15.8v6.4c-0.3-0.1-0.6-0.2-1-0.2h-4c-1.7,0-3-1.3-3-3s1.3-3,3-3h4 C27.4,16,27.7,15.9,28,15.8z"></path> <path d="M7,7C6.4,7,6,7.4,6,8s0.4,1,1,1h4c0,0,0,0,0,0s0,0,0,0h15c0.3,0,0.6-0.2,0.8-0.4c0.2-0.3,0.2-0.6,0.1-0.9l-2-5 c-0.2-0.5-0.8-0.8-1.3-0.6L10.8,7H7z"></path> <path d="M25,18h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S25.6,18,25,18z"></path> </g> </g></svg>
        <div className="flex flex-col justify-center align-middle">
        <h1 className=" text-3xl text-sky-600">5% Daily </h1>
         
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <p>Total roll: 80%</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>DURATION: 14 days</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>Min deposit  $10,100</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>Max deposit $20,000</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>5% referral bonus</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          View your transaction receipt.
        </Link>
      </CardFooter>
    </Card>
      </div>
 </div>
   </div>
   }
   {activeTab === 'Premium' && 
    <div className=" flex flex-col justify-center align-middle p-2 font-bold font-sono text-xl text-white leading-6 gap-2 md:gap-4">

<div>
<div>
      <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
      <svg fill="#41359c" height="100px" width="100px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27,10H6c-1.1,0-2-0.9-2-2s0.9-2,2-2h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H6C3.8,4,2,5.8,2,8v16c0,2.2,1.8,4,4,4h21 c1.7,0,3-1.3,3-3V13C30,11.3,28.7,10,27,10z M28,15.8v6.4c-0.3-0.1-0.6-0.2-1-0.2h-4c-1.7,0-3-1.3-3-3s1.3-3,3-3h4 C27.4,16,27.7,15.9,28,15.8z"></path> <path d="M7,7C6.4,7,6,7.4,6,8s0.4,1,1,1h4c0,0,0,0,0,0s0,0,0,0h15c0.3,0,0.6-0.2,0.8-0.4c0.2-0.3,0.2-0.6,0.1-0.9l-2-5 c-0.2-0.5-0.8-0.8-1.3-0.6L10.8,7H7z"></path> <path d="M25,18h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S25.6,18,25,18z"></path> </g> </g></svg>
        <div className="flex flex-col justify-center align-middle">
        <h1 className=" text-3xl text-sky-600">5% Daily </h1>
         
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <p>Total roll: 100%</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>DURATION: 48 days</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>Min deposit  $21,100</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>Max deposit $50,000</p>
      </CardBody>
      <Divider/>
      <CardBody>
      <p>5% referral bonus</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          View your transaction receipt.
        </Link>
      </CardFooter>
    </Card>
      </div>
</div>
  </div>
   }
 </div>
  )
}

export default Basic2