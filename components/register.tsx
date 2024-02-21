"use client"
import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import Link from 'next/link';
import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "isTransparent": false,
      "displayMode": "regular",
      "autosize": true,
           "height": "500",
      "colorTheme": "dark",
      "locale": "en"
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget1');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);


  return (
    <div className=' w-[100vw] md:mx-[10vw] mx-4 h-auto md:py-20 my-5  text-white flex md:flex-row flex-col'>
      <div className=" w-[50vw] flex flex-col">
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">OVER</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">4,500</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">INVESTORS</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">TRUST US</p>
      <div className=" flex flex-row justify-between md:justify-start gap-8  ">
    
 <button className='rounded-3xl font-bold justify-center align-middle text-2xl border-spacing-8 space-x-8 border-b-large border-blue-200 bg-green-600 md:ml-8'>
   
    <SignUpButton mode="modal" afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard">
    <p className='p-3'>SIGN UP</p>
    </SignUpButton>
 </button>

 <button className='rounded-3xl font-bold justify-center px-8 align-middle text-2xl border-spacing-8 space-x-8 border-b-large border-blue-200 bg-[#FFD700]'>
  
    <SignInButton mode="modal" afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard">
    <p className='p-3 text-black'>SIGN IN</p>
    </SignInButton>
 </button>

      </div>
   
      </div>
   


    <div className="tradingview-widget-container py-8 w-[100vw]  md:w-[50vw] h-[100vh]">
      <div className="tradingview-widget-container__widget1"></div>
      <div className="tradingview-widget-copyright1">
      <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text font-bold text-2xl">All News on Binance FX</span>
        </a>
      </div>
    </div>



    </div>

)
}

export default Register