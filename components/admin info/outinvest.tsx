"use client"
import React, { useState, useEffect } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "../../components/ui/card";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type OutInvest = {
 id: string;
 transactionId: string;
 time: string;
 walletAddress: string;
 userId: string;
 user: {
    id: string;
    name: string;
 };
 outCoin: string;
 outAmount: string;
 confirmed: boolean; 
 gasFee: string;
};

// Define the type for the outinvest data state
type OutInvestData = OutInvest[];

const OutInvestInfo: React.FC = () => {
 const [outInvestments, setOutInvestments] = useState<OutInvestData>([]);

 // Define fetchData function
 const fetchData = async () => {
    try {
      const response = await fetch('/api/getOutInvest', {
        cache: 'no-store', // Disable caching
      });
      const data: OutInvestData = await response.json();
      setOutInvestments(data);
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

 const handleUpdateBalance = async (outInvestId: string) => {
    try {
      const outInvest = outInvestments.find(item => item.id === outInvestId);

      if (!outInvest) {
        console.error('OutInvest not found');
        alert('OutInvest not found');
        return;
      }

      if (outInvest.confirmed) {
        alert('OutInvest is already confirmed');
        return;
      }

      const response = await fetch(`/api/updateOutPayment?outInvestId=${outInvestId}`, {
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
      <h1 className="text-2xl font-bold text-sky-700">Withdrawal Information</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800 dark:text-gray-300 flex justify-center align-middle items-center py-3 font-extrabold">OutInvestments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-gray-800">
                <TableHead>User ID</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Coin</TableHead>
                <TableHead>GasFee</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Update Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {outInvestments.map((outInvest, index) => (
                <TableRow key={index}>
                 <TableCell>{outInvest.userId}</TableCell>
                 <TableCell>{outInvest.user.name}</TableCell>
                 <TableCell>{outInvest.outAmount}</TableCell>
                 <TableCell>{outInvest.outCoin}</TableCell>
                 <TableCell>{outInvest.gasFee}</TableCell>
                 <TableCell>{new Date(outInvest.time).toLocaleString()}</TableCell>
                 <TableCell>
                    <Button
                      className="bg-blue-500 text-white dark:bg-blue-600"
                      onClick={() => handleUpdateBalance(outInvest.id)}
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

export default OutInvestInfo;
