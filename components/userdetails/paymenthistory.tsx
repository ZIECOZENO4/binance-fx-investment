"use client"
import React, { useEffect, useState } from 'react';

interface Payment {
 id: string;
 amount: string;
 coin: string;
 plan: string;
 planId: string;
 time: string;
 balance: string;
 gasFee: string;
 userName: string;
 confirmed: boolean;
 status: string;
}

const UserPayments: React.FC = () => {
 const [payments, setPayments] = useState<Payment[]>([]);

 useEffect(() => {
    const fetchUserIdAndPayments = async () => {
      // Fetch the user ID from the API endpoint
      const userIdResponse = await fetch('/api/userInfo');
      const userIdData = await userIdResponse.json();
      const userId = userIdData.id;

      // Fetch the payments for the user
      const paymentsResponse = await fetch(`/api/fetchPayments?userId=${userId}`);
      const paymentsData = await paymentsResponse.json();
      setPayments(paymentsData);
    };

    fetchUserIdAndPayments();
 }, []);

 return (
    <div>
      <h1>User Payments</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Coin</th>
            <th>Plan</th>
            <th>Plan ID</th>
            <th>Time</th>
            <th>Balance</th>
            <th>Gas Fee</th>
            <th>User Name</th>
            <th>confirmed</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.amount}</td>
              <td>{payment.coin}</td>
              <td>{payment.plan}</td>
              <td>{payment.planId}</td>
              <td>{new Date(payment.time).toLocaleString()}</td>
              <td>{payment.balance}</td>
              <td>{payment.gasFee}</td>
              <td>{payment.userName}</td>
              <td>{payment.confirmed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default UserPayments;