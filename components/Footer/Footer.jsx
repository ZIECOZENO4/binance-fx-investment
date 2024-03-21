import Link from "next/link";
import React from "react";
import ItemsContainer from "./ItemsContainer";
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="bg-gray-900 w-[100vw] text-white m-0 p-0 mb-0 pb-0">
      <div className="md:flex md:mx-0 md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="md:text-2xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-[#FFD700] text-2xl md:text-4xl">REFERRAL BONUS        </span> We offer 10% referral bonus for each member you invite to Binance FX. After he makes An Invest you will get a referral claim of 10%, only on Binance FX.
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Username or Register to get."
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Referral Link
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8 sm:pb-[20px]"
      >
        <span>© 2017 Binance FX. All rights reserved.</span>
        <Link href="/dashboard/terms">Terms · Privacy Policy</Link>
        <div className='sm:pb-[20px]' >
        <div className=" mt-2 md:mt-0 justify-center align-middle items-center mx-3 md:mx-0 flex md:gap-10 gap-8 ">
        <Image src="/images/fb.png" alt="" width={26} height={26}  className='hover:text-gray-100 hover:bg-teal-500"'/>
        <Image src="/images/in.png" alt="" width={26} height={26}  className='hover:text-gray-100 hover:bg-teal-500"'/>
        <Image src="/images/xb.png" alt="" width={26} height={26}  className='hover:text-gray-100 hover:bg-teal-500"'/>
        <Image src="/images/yo.png" alt="" width={26} height={26}  className='hover:text-gray-100 hover:bg-teal-500"'/>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
