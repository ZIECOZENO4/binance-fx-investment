import React, { useState, useEffect } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "../../components/ui/card";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DepositInfo from "../admin info/depositinfo";
type Payment = {
 id: string;
 amount: string;
 coin: string;
 plan: string;
 planId: string;
 time: string;
 user: {
    id: string;
    name: string;
 };
 userId: string;
 balance: string;
 gasFee: string | null;
 userName: string;
};

type PaymentData = Payment[];

const AdminsPage: React.FC = () => {
 const [data, setData] = useState<PaymentData>([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getAdmin', {
          cache: 'no-store',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: PaymentData = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch data');
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 200000);
    return () => clearInterval(intervalId);
 }, []);

 const handleConfirmation = async (paymentId: string) => {
    const payment = data.find(item => item.id === paymentId);

    if (!payment) {
      console.error('Payment not found');
      alert('Payment not found');
      return;
    }

    const balance = parseFloat(payment.balance);
    const amount = parseFloat(payment.amount);

    if (balance < amount) {
      alert('Insufficient funds');
      return;
    }

    const newBalance = balance - amount;

    setData(data.map(item => item.id === paymentId ? { ...item, balance: newBalance.toString() } : item));

    try {
      await fetch(`/api/updatePayment?paymentId=${paymentId}`, {
        method: 'GET',
        cache: 'no-store',
      });
      toast.success('Payment confirmed successfully');
    } catch (error) {
      console.error('Error updating payment:', error);
      toast.error('Failed to confirm payment');
    }
 };

 return (
    <div className="bg-black flex flex-col justify-center align-middle">
      <h1 className="text-2xl font-bold text-sky-700">Admin Confirmation Dashboard</h1>
      <p className="text-red-500 my-3">Privacy</p>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800 dark:text-gray-300 flex justify-center align-middle items-center py-3 font-extrabold">Pending Payments</CardTitle>
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
              {data.map((item, index) => (
                <TableRow key={index}>
                 <TableCell>{item.userId}</TableCell>
                 <TableCell>{item.user.name}</TableCell>
                 <TableCell>{item.plan}</TableCell>
                 <TableCell>{item.balance}</TableCell>
                 <TableCell>{item.coin}</TableCell>
                 <TableCell>{item.amount}</TableCell>
                 <TableCell>{item.planId}</TableCell>
                 <TableCell>{item.gasFee}</TableCell>
                 <TableCell>{new Date(item.time).toLocaleString()}</TableCell>
                 <TableCell>
                    <div className="flex gap-2">
                      <Button
                        className="bg-green-500 text-white dark:bg-green-600"
                        onClick={() => handleConfirmation(item.id)}
                      >
                        Confirm
                      </Button>
                      <Button className="bg-red-500 text-white dark:bg-red-600">
                        False
                      </Button>
                    </div>
                 </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <DepositInfo />
    </div>
 );
};

export default AdminsPage;