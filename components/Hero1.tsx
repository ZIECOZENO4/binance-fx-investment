"use client";
import React from "react";
import TypingComponent from "./typing";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import AutoScrollingComponent from "./autoscroll";


function Hero1() {
  const address = useAddress();
  const router = useRouter();

  const handleInvestNowClick = () => {
    if (!address) {
      alert("Please connect your wallet to invest.");
    } else {
      router.push("/dashboard");
    }
  };
  return (
   
    <div className="">
        <AutoScrollingComponent />
      <div className=" w-[100vw] flex justify-center p-[5vw] flex-col">
        <div className="hidden md:flex md:flex-row gap-8">
          <div className=" flex-col gap-3  p-[20px]">
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
          <input
            type="email"
            className="h-14 w-[300px] rounded-2xl bg-slate-700 border-white"
            placeholder="     Enter Your Wallet Address"
          />
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
            <input
              type="text"
              className="h-14 w-full rounded-2xl bg-slate-700 border-white"
              placeholder="    Enter Your Wallet Address"
            />
            <button
              onClick={handleInvestNowClick}
              className=" w-full h-14 bg-orange-500 text-black rounded-3xl cursor-pointer font-bold"
            >
              INVEST NOW
            </button>
          </div>
          <div className="">
            <img
              src="/images/hero1.jpg"
              className="w-[60vw] h-[50vh] object-cover rounded-3xl"
              alt="hero 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
