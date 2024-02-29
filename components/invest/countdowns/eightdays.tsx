"use client"

// Countdown.js
import React, { useEffect, useState } from 'react';
import { useCountdownManager } from './countdowncontest';

// Define a type for the props of ChevronRightIcon
type ChevronRightIconProps = React.SVGProps<SVGSVGElement>;

// Define a type for the return value of useCountdownManager if it's not already defined
// For this example, let's assume it returns an object with activeCountdowns property
interface CountdownManagerReturn {
 activeCountdowns: Record<string, number>;
}

export default function EightDays({ id }: { id: string }) {
 const { activeCountdowns } = useCountdownManager() as CountdownManagerReturn;
 const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

 useEffect(() => {
    const countdownDate = activeCountdowns[id];
    if (countdownDate) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });

        if (distance < 0) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
 }, [activeCountdowns, id]);

 return (
    <div className="flex flex-col items-center justify-center bg-[#000000] text-white rounded-lg p-4">
      <div>
        {timeLeft.days > 0 && (
          <div className="flex items-center justify-between">
            <ChevronRightIcon className="w-6 h-6 text-white" />
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
            </div>
          </div>
        )}
      </div>
    </div>
 );
}

function ChevronRightIcon(props: ChevronRightIconProps) {
 return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
 );
}
