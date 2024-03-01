"use client"
// Countdown.tsx
import React, { useState, useEffect } from 'react';

interface CountdownProps {
 duration: number; // Duration in seconds
}

const Countdown: React.FC<CountdownProps> = ({ duration }) => {
 const calculateTimeLeft = () => {
    let timeLeft = duration;
    const days = Math.floor(timeLeft / 86400);
    timeLeft %= 86400;
    const hours = Math.floor(timeLeft / 3600);
    timeLeft %= 3600;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
 };

 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

 useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
 }, [duration]); // Add duration as a dependency to recalculate on duration change

 return (
    <div>
      <div className="flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/20000/svg"
          width="24"
          height="24"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6-6-6" />
        </svg>
        <div className="flex space-x-2 mt-4">
          <div className="flex flex-col items-center justify-center bg-white text-black rounded-lg p-2">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <span className="text-xs uppercase">days</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          <div className="flex flex-col items-center justify-center bg-white text-black rounded-lg p-2">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <span className="text-xs uppercase">hours</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          <div className="flex flex-col items-center justify-center bg-white text-black rounded-lg p-2">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <span className="text-xs uppercase">minutes</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          <div className="flex flex-col items-center justify-center bg-white text-black rounded-lg p-2">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <span className="text-xs uppercase">seconds</span>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Countdown;