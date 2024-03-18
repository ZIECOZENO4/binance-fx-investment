"use client"
import { CardTitle, CardHeader, CardContent, Card } from "../../components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table"
import { Button } from "../../components/ui/button"
import { useEffect, useState } from "react";
import { PrismaClient, Payment } from '@prisma/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

 useEffect(() => {
  const fetchData = () => {
    fetch('/api/getWithdraw', {
      cache: 'no-store', 
     })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // Fetch data immediately on component mount
  fetchData();

  // Set up interval to fetch data every 10 seconds
  const intervalId = setInterval(fetchData, 10000); 

  // Clear interval on component unmount
  return () => clearInterval(intervalId);
}, []); 
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
const balance = parseFloat(item.balance);
const amount = parseFloat(item.amount); 
                return (
                <TableRow
                  key={index}
                  className={`${
                    balance    >= amount
                      ? "bg-green-200 dark:bg-green-700"
                      : "bg-red-200 dark:bg-red-700"
                  }`}
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

     <Card>
     <CardHeader>
       <CardTitle className="text-2xl  text-gray-800 dark:text-gray-300 flex justify-center align-middle items-center py-3 font-extrabold">Pending Withdrawal</CardTitle>
     </CardHeader>
     <CardContent>
       <Table className="w-full">
         <TableHeader>
           <TableRow className="bg-gray-100 dark:bg-gray-800">
             <TableHead>User ID</TableHead>
             <TableHead>Username</TableHead>
             <TableHead>Email</TableHead>
             <TableHead>Balance</TableHead>
             <TableHead>Coins</TableHead>
             <TableHead>Investment</TableHead>
             <TableHead>Item ID</TableHead>
             <TableHead>Amount</TableHead>
             <TableHead>Time of payment</TableHead>
             <TableHead>Confirmed</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
              {withdrawdata.map((item, index) => (
                <TableRow key={index} className="bg-gray-200 dark:bg-gray-700">
                 <TableCell>{item.userId}</TableCell>
                 <TableCell>{item.user}</TableCell>
                 <TableCell>{item.userName}</TableCell>
                 <TableCell>{item.walletAddress}</TableCell>
                 <TableCell>{item.balance}</TableCell>
                 <TableCell>{item.coin}</TableCell>
                 <TableCell>{item.amount}</TableCell>
                 <TableCell>{item.gasFee}</TableCell>
                 <TableCell>{item.time}</TableCell>
                 <TableCell>
                    <div className="flex gap-2">
                      <Button className="bg-green-500 text-white dark:bg-green-600">
                        Confirmed
                      </Button>
                      <Button className="bg-red-500 text-white dark:bg-red-600">
                        False
                      </Button>
                      <Button className="bg-yellow-500 text-white dark:bg-yellow-600">
                        Pending
                      </Button>
                    </div>
                 </TableCell>
                </TableRow>
              ))}
            </TableBody>
       </Table>
     </CardContent>
   </Card>
   <Card>
     <CardHeader>
       <CardTitle className="text-2xl  text-gray-800 dark:text-gray-300 flex justify-center align-middle items-center py-3 font-extrabold">Deposits</CardTitle>
     </CardHeader>
     <CardContent>
       <Table className="w-full">
         <TableHeader>
           <TableRow className="bg-gray-100 dark:bg-gray-800">
             <TableHead>User ID</TableHead>
             <TableHead>Username</TableHead>
             <TableHead>Email</TableHead>
             <TableHead>Balance</TableHead>
             <TableHead>Coins</TableHead>
             <TableHead>Investment</TableHead>
             <TableHead>Item ID</TableHead>
             <TableHead>Amount</TableHead>
             <TableHead>Time of payment</TableHead>
             <TableHead>Confirmed</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           <TableRow className="bg-gray-200 dark:bg-gray-700">
             <TableCell>1234567890</TableCell>
             <TableCell>john_doe</TableCell>
             <TableCell>john@example.com</TableCell>
             <TableCell>0.0000 USDT</TableCell>
             <TableCell>0.0000 BTC</TableCell>
             <TableCell>0.0000 USDT</TableCell>
             <TableCell>123456</TableCell>
             <TableCell>0.0000 USDT</TableCell>
             <TableCell>2022-01-01 12:00:00</TableCell>
             <TableCell>
               <div className="flex gap-2">
                 <Button className="bg-green-500 text-white dark:bg-green-600" >
                   Confirmed
                 </Button>
                 <Button className="bg-red-500 text-white dark:bg-red-600" >
                   False
                 </Button>
                 <Button className="bg-yellow-500 text-white dark:bg-yellow-600" >
                   Pending
                 </Button>
               </div>
             </TableCell>
           </TableRow>
         </TableBody>
       </Table>
     </CardContent>
   </Card>
   </div>
  )
}

export default AdminsPage;
