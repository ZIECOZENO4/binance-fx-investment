'use client'
import React from "react";
import Typewriter from 'typewriter-effect';

const TypingComponent = () => {
 return (
    <div id="app" className=" text-[#FFD700] text-2xl">
      <Typewriter
        options={{
          strings: ['The Most Secure And Top Crypto Trading Platform.', '<br /><strong>Binance FX Investment</strong> '],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString('Fast And The Most Secure And Top Crypto Trading Platform.<br /> Trusted By Most Users.')
            .pauseFor(300)
            .deleteChars(10)
            .typeString('<strong>Binance FX offers</strong> safe trading,<br /> crypto trading, crypto mining and market updates ')
            .typeString('<strong>New Traders are credited <span style="color: #27ae60;">10</span> USDT</strong>')
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
 );
};

export default TypingComponent;
