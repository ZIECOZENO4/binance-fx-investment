import React, { useState, useEffect } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "../../components/ui/card";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Deposit = {
 id: string;
 depositorTransactionId: string;
 time: string;
 depositorWalletAddress: string;
 userId: string;
 user: {
    id: string;
    name: string;
 };
 depositorAmount: string;
 depositorName: string;
 depositorCoin: string;
 confirmed: boolean; 
};

// Define the type for the deposit data state
type DepositData = Deposit[];

const DepositInfo: React.FC = () => {
 const [deposits, setDeposits] = useState<DepositData>([]);

 // Define fetchData function
 const fetchData = async () => {
    try {
      const response = await fetch('/api/getDeposit', {
        cache: 'no-store', // Disable caching
      });
      const data: DepositData = await response.json();
      setDeposits(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("An error occurred while fetching the data. Please try again!", {
        position: "top-right",
      });
    }
 };

 useEffect(() => {
    fetchData(); // Call fetchData on component mount
 }, []);

 const handleUpdateBalance = async (depositId: string) => {
    try {
      const deposit = deposits.find(item => item.id === depositId);

      if (!deposit) {
        console.error('Deposit not found');
        alert('Deposit not found');
        return;
      }

      if (deposit.confirmed) {
        alert('Deposit is already confirmed');
        return;
      }

      const response = await fetch(`/api/updateBalance?depositId=${depositId}`, {
        cache: 'no-store', // Disable caching
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Balance updated successfully!", {
          position: "top-right",
        });
        // Re-fetch the data to update the UI
        fetchData();
      } else {
        toast.error("An error occurred while updating the balance. Please try again!", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error('Error updating balance:', error);
      toast.error("An error occurred while updating the balance. Please try again!", {
        position: "top-right",
      });
    }
 };

 return (
    <div className="bg-black flex flex-col justify-center align-middle">
      <h1 className="text-2xl font-bold text-sky-700">Deposit Information</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800 dark:text-gray-300 flex justify-center align-middle items-center py-3 font-extrabold">Deposits</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-gray-800">
                <TableHead>User ID</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Coin</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Update Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deposits.map((deposit, index) => (
                <TableRow key={index}>
                 <TableCell>{deposit.userId}</TableCell>
                 <TableCell>{deposit.user.name}</TableCell>
                 <TableCell>{deposit.depositorAmount}</TableCell>
                 <TableCell>{deposit.depositorCoin}</TableCell>
                 <TableCell>{new Date(deposit.time).toLocaleString()}</TableCell>
                 <TableCell>
                    <Button
                      className="bg-blue-500 text-white dark:bg-blue-600"
                      onClick={() => handleUpdateBalance(deposit.id)}
                    >
                      Update Balance
                    </Button>
                 </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
 );
};

export default DepositInfo;
