
"use client";
import React, { useEffect, useState } from "react";
import { useUserPayments } from "../../tenstack-hooks/user-payments";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../../components/ui/select";
import { Button } from "@nextui-org/react";
import { PrismaClient, Payment, OutInvest } from '@prisma/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "@clerk/clerk-react"; 
import Link from "next/link";
import InvestmentBalance from "@/components/investbalance";

const PaymentDetails = () => {
  const { data: payments, isLoading, isError, error } = useUserPayments();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState("all");

  if (isLoading) {
    return <div>Loading payment details...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || "Unknown error"}</div>;
  }

  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-md px-4 py-2">
        <div className="mt-4 mb-2 flex justify-between items-center">
          <h1 className="text-blue-500 text-xl font-bold">Investment History</h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-gray-500"
            strokeLinejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div className="flex justify-between gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="All Investment" className="text-black" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="all">All Investment</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger id="timeframe">
              <SelectValue placeholder="Date" className="text-black" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="all">Date</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4">
          <span className="text-md font-bold">In <InvestmentBalance /> USDT </span>
          <span className="ml-4 text-md font-semibold text-red-500">Out 0.00 USDT</span>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {payments && payments.length > 0 ? (
          payments.map((payment) => (
            <div key={payment.id} className="flex justify-between items-center px-4">
              <div>
              <p className="font-semibold">{payment.userName}</p>
                 <p className="text-xs text-gray-200">{payment.plan}</p>
                 <p className="text-xs text-gray-200">{payment.planId}</p>
                 <p className="text-xs text-gray-500">{new Date().toLocaleDateString()}  </p>
              </div>
              <div>
              <p className="font-semibold text-green-500">{payment.amount} {payment.coin}</p>
              <p className="mt-1 text-xs font-semibold text-gray-500">
  {payment.confirmed ? 'Successful' : 'Failed'}
</p>

              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-6">
          <div className="mb-4">
          <svg width="60px" height="60px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" className="si-glyph si-glyph-folder-error" fill="#1d1b1b" stroke="#1d1b1b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>938</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(1.000000, 2.000000)" fill="#ededed"> <path d="M7.35,3 L5.788,0.042 L2.021,0.042 L2.021,1.063 L0.023,1.063 L0.023,10.976 L1.043,10.976 L1.045,11.976 L15.947,11.976 L15.968,3 L7.35,3 L7.35,3 Z M10.918,9.109 L10.09,9.938 L8.512,8.361 L6.934,9.938 L6.104,9.109 L7.682,7.531 L6.104,5.953 L6.934,5.125 L8.512,6.701 L10.088,5.125 L10.918,5.953 L9.34,7.531 L10.918,9.109 L10.918,9.109 Z" className="si-glyph-fill"> </path> <path d="M13.964,1.982 L13.964,1.042 L8.024,1.042 L8.354,1.982 L13.964,1.982 Z" className="si-glyph-fill"> </path> </g> </g> </g></svg>
          </div>
          <p className="text-gray-500 mb-6">No Investment found!</p>
          <Link href="/dashboard/invest">
          <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded">
           INVEST NOW
          </button> 
          </Link>
    
        </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDetails;

