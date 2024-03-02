'use client'
import React from "react";
import Typewriter from 'typewriter-effect';

const TypingComponent = () => {
 return (
    <div id="app" className=" text-[#FFD700] text-2xl">
      <Typewriter
        options={{
          strings: ['The Most Secure And Top Crypto Trading Platform.', '<br /><strong>Binance FX Investment</strong> ', '<br /><strong>Invest USDT and Crypto</strong> ', '<br /><strong>Buy NFTs</strong> ', '<br /><strong>Binance FX Investment</strong> ', '<br /><strong>Binance FX Community</strong> ', '<br /><strong>Buy Assets</strong> ', '<br /><strong> Meet Binance FX Investors</strong> ', '<br /><strong>Quick withdrawal and deposits</strong> '],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString('Get 10 USDT, Register Now.<br /> Trusted By Most Users.')
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
 );
};

export default TypingComponent;
