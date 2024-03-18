"use client"
import { CardTitle, CardHeader, CardContent, Card } from "../../components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table"
import { Button } from "../../components/ui/button"
import { useEffect, useState } from "react";
import { PrismaClient, Payment } from '@prisma/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DepositInfo from "../admin info/depositinfo";

const prisma = new PrismaClient();
interface Item {
 id: string;
 amount: string; 
 coin: string;
 plan: string;
 planId: string;
 time: Date; 
 user: string;
 userId: string | null;
 balance: string;
 gasFee: string | null;
 userName: string;
}

interface Withdrawal {
 amount: number;
 coin: string;
 walletAddress: string;
 time: string | null;
 user: string;
 userName: string;
 userId: string | null;
 balance: string;
 gasFee: string | null;
}

const AdminsPage: React.FC = () => {
 const [data, setData] = useState<Item[]>([]);
 const [withdrawdata, setWithdrawData] = useState<Withdrawal[]>([]);

 useEffect(() => {
    const fetchData = () => {
      fetch('/api/getAdmin', {
        cache: 'no-store', 
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
       
    };

    fetchData();
    const intervalId = setInterval(fetchData, 200000); 
    return () => clearInterval(intervalId);
 }, []);
 const handleConfirmation = async (paymentId: string) => {
  const payment = data.find(item => item.id === paymentId);
 
  // Check if payment is undefined
  if (!payment) {
     console.error('Payment not found');
     alert('Payment not found');
     return; // Exit the function early
  }
 
  const balance = parseFloat(payment.balance);
  const amount = parseFloat(payment.amount);
 
  if (balance < amount) {
     alert('Insufficient funds');
     return;
  }
 
  // Reduce the balance
  const newBalance = balance - amount;
 
  // Update the state
  setData(data.map(item => item.id === paymentId ? { ...item, balance: newBalance.toString() } : item));
 
  // Update the database using Prisma
  try {
     await prisma.payment.update({
       where: { id: paymentId },
       data: { balance: newBalance.toString() },
     });
     toast.success('Balance updated successfully');
  } catch (error) {
     console.error('Error updating balance:', error);
     toast.error('Failed to update balance');
  }
 };
 
 
  return (
    <div className=" bg-black flex flex-col justify-center align-middle">
      <h1 className="  text-2xl  font-bold text-sky-700 uppercase"> admin confirmation dashboard </h1>
      <p className="text-red-500 my-3">privacy</p>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800 dark:text-gray-300 flex justify-center align-middle items-center py-3 font-extrabold">Pending Investments</CardTitle>
        </CardHeader>
        <CardContent>
        <Table className="w-full">
 <TableHeader>
    <TableRow className="bg-gray-100 dark:bg-gray-800">
      <TableHead>User ID</TableHead>
      <TableHead>Username</TableHead>
      <TableHead>Plan</TableHead>
      <TableHead>Balance</TableHead>
      <TableHead>Coins</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Plan ID</TableHead>
      <TableHead>Gas Fee</TableHead>
      <TableHead>Time of Payment</TableHead>
      <TableHead>Confirmed</TableHead>
    </TableRow>
 </TableHeader>
 <TableBody>
    {data.map((item, index) => {
      // const balance = parseFloat(item.balance);
      // const amount = parseFloat(item.amount);
      // const backgroundColor = balance < amount ? "bg-red-200 dark:bg-red-700" : "bg-green-200 dark:bg-green-700";

      return (
        <TableRow
          key={index}
          // className={backgroundColor}
        >
          <TableCell>{item.userId}</TableCell>
          <TableCell>{item.user}</TableCell>
          <TableCell>{item.plan}</TableCell>
          <TableCell>{item.balance}</TableCell>
          <TableCell>{item.coin}</TableCell>
          <TableCell>{item.amount}</TableCell>
          <TableCell>{item.planId}</TableCell>
          <TableCell>{item.gasFee}</TableCell>
          <TableCell>{item.time ? item.time.toLocaleString() : ''}</TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button
                className="bg-green-500 text-white dark:bg-green-600"
                onClick={() => handleConfirmation(item.id)}
              >
                Confirmed
              </Button>
              <Button className="bg-red-500 text-white dark:bg-red-600">
                False
              </Button>
            </div>
          </TableCell>
        </TableRow>
      );
    })}
 </TableBody>
</Table>

        </CardContent>
      </Card>
      <DepositInfo />
   </div>
  )
}

export default AdminsPage;
