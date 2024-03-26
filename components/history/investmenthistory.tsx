"use client"
import React, { useEffect, useState } from 'react';
import { PrismaClient, Payment} from '@prisma/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const prisma = new PrismaClient();

type HistoryItem = Payment 

const HistoryComponent2 = ({ userId }: { userId: string }) => {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const payments = await prisma.payment.findMany({
          where: { userId },
          orderBy: { time: 'desc' },
        });


        setHistoryData([...payments]);
        toast.success('History updated successfully!');
      } catch (error) {
        console.error('Error fetching history data:', error);
        toast.error('Failed to update history. Please try again!');
      }
    };

    fetchHistoryData();
  }, [userId]);

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
          {historyData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.constructor.name}</td>
              <td>{item.totalValueInUSDT}</td>
              <td>
                {item.constructor.name === 'Payment' && item.coin}
              </td>
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
