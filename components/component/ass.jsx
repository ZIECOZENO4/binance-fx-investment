import React from "react";
import { Button } from "@/components/ui/button"
import { useUser } from '@clerk/nextjs';
import { prisma } from '../lib/prisma';


export function Ass() {
  
  return (
    <div className="bg-[#0f172a] min-h-screen p-4 text-white">
      <section className="bg-gradient-to-b from-[#3b82f6] to-[#2563eb] rounded-lg p-4 shadow-lg">
        <h2 className="text-lg font-semibold">Assets</h2>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">USDT</h3>
            <EyeIcon className="text-white" />
          </div>
          <div className="text-4xl font-bold">0</div>
        </div>
        <div className="mt-4 flex justify-between">
          <Button className="bg-[#1e40af] text-white">
            <DollarSignIcon className="mr-2" />
            Deposit{"\n"}
          </Button>
          <Button className="bg-[#1e40af] text-white">
            <ArrowUpRightIcon className="mr-2" />
            Withdraw{"\n"}
          </Button>
        </div>
      </section>
      <section className="mt-4">
        <h3 className="text-lg font-semibold">USDT</h3>
        <div className="mt-2 bg-[#1e293b] rounded-lg p-4 shadow-lg">
          <div className="text-4xl font-bold">0</div>
        </div>
      </section>

    </div>
  )
}


function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function ArrowUpRightIcon(props) {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

function ChevronRightIcon(props) {
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
  )
}
