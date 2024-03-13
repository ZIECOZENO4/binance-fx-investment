"use client"
import { CardTitle, CardHeader, CardContent, Card } from "../../components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table"
import { Button } from "../../components/ui/button"
import { useEffect, useState } from "react";
interface Transaction {
  amount: number;
  coin: string;
  plan: string;
  planId: string;
  time: string | null;
  user: string;
  userId: string | null;
  balance: string;
  gasFee: string | null;
 }
 
 const AdminsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch('/api/sendToAdmin', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           // Assuming you don't need to send any data in the body for fetching transactions
         });
         if (response.ok) {
           const data = await response.json();
           setTransactions(data);
         } else {
           console.error('Failed to fetch transactions');
         }
       } catch (error) {
         console.error('Error fetching transactions:', error);
       }
     };
 
     fetchData();
  }, []);
  return (
    <div className=" bg-black">
      <h1 className=" flex flex-row justify-center align-middle text-2xl  font-bold text-sky-700 uppercase"> admin confirmation dashboard </h1>
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
          <TableHead>USDT</TableHead>
          <TableHead>Plan ID</TableHead>
          <TableHead>Gas Fee</TableHead>
          <TableHead>Time of Payment</TableHead>
          <TableHead>Confirmed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.userId} className="bg-gray-200 dark:bg-gray-700">
            <TableCell>{transaction.userId}</TableCell>
            <TableCell>{transaction.user}</TableCell>
            <TableCell>{transaction.plan}</TableCell>
            <TableCell>{transaction.balance}</TableCell>
            <TableCell>{transaction.coin}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.planId}</TableCell>
            <TableCell>{transaction.gasFee}</TableCell>
            <TableCell>{transaction.time}</TableCell>
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
             <TableHead>Transaction ID</TableHead>
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
                 <Button className="bg-red-500 text-white dark:bg-red-600">
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
             <TableHead>Transaction ID</TableHead>
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