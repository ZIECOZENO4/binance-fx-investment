"use client";
import React from "react";
import TypingComponent from "./typing";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import AutoScrollingComponent from "./autoscroll";
import Rate3 from "./rate3";
import {Button} from "@nextui-org/react";
import { SignUpButton } from "@clerk/nextjs";
function Hero1() {
  const address = useAddress();
  const router = useRouter();

  const handleInvestNowClick = () => {
    if (!address) {
      alert("Please connect your wallet to invest.");
    } else {
      router.push("/sync-user");
    }
  };
  return (
   
    <div className="">
   <AutoScrollingComponent />
      <div className=" w-[100vw] flex justify-center p-[5vw] flex-col">
   
        <div className="hidden md:flex md:flex-row gap-8">
          <div className=" flex-col gap-3  p-[20px] mt-6">
            <span className="text-blue-500 text-[4rem] font-extrabold font-serif">
              BINANCE FX
            </span>
            <br />
            <span className="text-4xl text-white font-bold">
              The Best Crypto Investment Platform,
            </span>
            <TypingComponent />
          </div>
          <div className="">
            <img
              src="/images/hero1.jpg"
              className="w-full h-full object-cover rounded-3xl"
              alt="hero 1"
            />
          </div>
        </div>
        <div className="md:gap-14 hidden md:flex-row  md:flex md:justify-start ">
        <Button
      disableRipple
      className="relative flex flex-col m-2  h-12 align-middle overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0  "
      size="lg"
   
    >

      <p className="font-bold text-green-600 text-xl gap-4 ">Register</p>  
    </Button>
   
          <button 
              onClick={handleInvestNowClick}
          className=" w-[200px] h-14 bg-orange-500 text-black rounded-3xl cursor-pointer font-bold">
            INVEST NOW
          </button>
        </div>
        <div className="md:hidden flex flex-col justify-center align-middle items-center gap-8">
          <div className=" flex-col justify-center gap-3  p-[10px]">
            <span className="text-blue-500 text-[38px] font-extrabold font-serif justify-center flex">
              BINANCE FX
            </span>
            <br />
            <span className="text-3xl text-white font-bold">
              The Best Crypto Investment Platform,
            </span>
            <TypingComponent />
          </div>
          <div className="gap-2 md:hidden flex-col flex justify-start w-full px-8 ">
          <Button
      disableRipple
      className="relative flex flex-col m-2  h-12 align-middle overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0  "
      size="lg"
   
    >
    <SignUpButton mode="modal" afterSignInUrl="/sync-user" afterSignUpUrl="/sync-user">
    <p className='p-2 text-xl font-bold text-green-400'>Register</p>
    </SignUpButton> 
    </Button>
            <button
              onClick={handleInvestNowClick}
              className=" w-full h-14 bg-orange-500 text-black rounded-3xl cursor-pointer font-bold"
            >
              INVEST NOW
            </button>
          </div>
          <div className="">
            <img
              src="/images/ph.PNG"
              className="w-[60vw] h-[50vh] object-cover rounded-3xl"
              alt="hero 1"
            />
          </div>
        </div>
      </div>
      <Rate3 />
    </div>
  );
}

export default Hero1;
