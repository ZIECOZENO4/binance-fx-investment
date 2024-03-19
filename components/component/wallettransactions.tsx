
"use client"
import React from "react";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { useEffect, useState } from 'react';
import { Button } from "../ui/button"
import { PrismaClient, Payment, OutInvest, Withdrawal, Deposit } from '@prisma/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "@clerk/clerk-react"; 
import { useUserInfo } from '@/tenstack-hooks/user-info';

const prisma = new PrismaClient();

type HistoryItem = Payment | OutInvest | Withdrawal | Deposit;

interface CommonHistoryItem {
 id: string;
 time: Date;
 amount: string;
 coin: string;
 confirmed: boolean;
}

const WalletHistory = () => {
 const [historyData, setHistoryData] = useState<CommonHistoryItem[]>([]);
 const { user } = useUser(); 
 const { data: userInfo } = useUserInfo();
 useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        if (!user) {
          throw new Error('User not logged in');
        }

        const payments = await prisma.payment.findMany({
          where: { userId: user.id },
          orderBy: { time: 'desc' }, // Sort by time in descending order
          include: { user: true },
        });
        const outInvestments = await prisma.outInvest.findMany({
          where: { userId: user.id },
          orderBy: { time: 'desc' }, // Sort by time in descending order
          include: { user: true },
        });

        const withdrawals = await prisma.withdrawal.findMany({
          where: { userId: user.id },
          orderBy: { time: 'desc' }, 
          include: { user: true },
        });

        const deposits = await prisma.deposit.findMany({
          where: { userId: user.id },
          orderBy: { time: 'desc' }, 
          include: { user: true },
        });
        const combinedData = [...payments, ...outInvestments].map((item) => ({
          id: item.id,
          time: item.time,
          confirmed: item.confirmed,
          amount: item.amount,
          coin: item.coin,
        }));

        setHistoryData(combinedData);
        toast.success('History updated successfully!');
      } catch (error) {
        console.error('Error fetching history data:', error);
        toast.error('Failed to update history. Please try again!');
      }
    };

    fetchHistoryData();
 }, [user]);
 const userBalance = userInfo.balance;
 console.log("this is the user balance from the backend", userBalance);

 function formatWithCommas(value: number | string): string {
  let strValue = value.toString().replace(/,/g, '');
  let parts = strValue.split('.');
  let wholePart = parts[0];
  let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  wholePart = wholePart.split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1,').split('').reverse().join('');
  return wholePart + decimalPart;
}
  return (
    <div>
    <div className="bg-black text-white">
            <div className="mx-auto max-w-md px-4 py-2">
        <div className="mt-4 mb-2 flex justify-between">
          <h1 className="text-blue-500 text-xl font-bold">Transactions History</h1>

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
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="all">All categories</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="timeframe">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4">
              <span className="text-sm font-semibold">In               { userBalance !== null ? `$${formatWithCommas(userBalance.toFixed(2))}` : '$  0.00 '} </span>
              <span className="ml-4 text-sm font-semibold text-red-500">Out 0.00 USDT</span>
            </div>
          </div>
          <div className="mt-4 space-y-3">
{historyData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-red-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" x2="5" y1="5" y2="19" />
                <circle cx="6.5" cy="6.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </svg>
                <div>
                  <p className="font-semibold">{item.constructor.name}</p>
                  <p className="text-xs text-gray-500">{new Date(item.time).toLocaleString()}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-green-500">{item.amount} {item.coin}</p>
                <p className="mt-1 text-xs font-semibold text-gray-500">{item.confirmed ? 'Successful' : 'Pending'}</p>
              </div>
            </div>
))}
         </div>
      </div>
        <div className="mt-6 flex justify-around border-t border-gray-200 pt-2">
          <Button className="text-sm font-semibold" variant="ghost">
            Transactions
          </Button>
          <Button className="text-sm font-semibold" variant="ghost">
            Statistics
          </Button>
        </div>
      </div>
  )
}

export default WalletHistory;



