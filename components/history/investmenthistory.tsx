"use client"
import React, { useEffect, useState } from 'react';
import { PrismaClient, Payment, Withdrawal, OutInvest, Deposit } from '@prisma/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const prisma = new PrismaClient();

type HistoryItem = Payment | Withdrawal | OutInvest | Deposit;

const HistoryComponent2 = () => {
 const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

 useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const payments = await prisma.payment.findMany({
          include: { user: true },
        });
        const withdrawals = await prisma.withdrawal.findMany({
          include: { user: true },
        });
        const outInvestments = await prisma.outInvest.findMany({
          include: { user: true },
        });
        const deposits = await prisma.deposit.findMany({
          include: { user: true },
        });

        setHistoryData([...payments, ...withdrawals, ...outInvestments, ...deposits]);
        toast.success('History updated successfully!');
      } catch (error) {
        console.error('Error fetching history data:', error);
        toast.error('Failed to update history. Please try again!');
      }
    };

    fetchHistoryData();
 }, []);

 return (
    <div>
      <h1>Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Coin</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.constructor.name}</td>
              <td>{item.amount}</td>
              <td>{item.coin}</td>
              <td>{new Date(item.time).toLocaleString()}</td>
              <td>{item.confirmed ? 'Successful' : 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default HistoryComponent2;