"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import AdminsPage from '../../../components/admin/admin';
import { useUser } from "@clerk/clerk-react";
const AdminsOnly = () => {
 const searchParams = useSearchParams(); 
  const { isLoaded, isSignedIn, user } = useUser();
 const amount = searchParams.get('amount');
 const coin = searchParams.get('coin');
 const plan = searchParams.get('plan');
 const planId = searchParams.get('planId');
 const time = searchParams.get('time');
 const users = searchParams.get('user');
 const balance = searchParams.get('balance');
 const gasFee = searchParams.get('gassfee');

 if (!isLoaded) {
  return null;
}
if (typeof amount === 'string' && typeof coin === 'string' && typeof plan === 'string' && typeof planId === 'string') {
  const parsedAmount = parseFloat(amount);
 return (
    <div>
      <AdminsPage
        amount={parsedAmount}
        coin={coin}
        plan={plan}
        planId={planId}
        time={time}
        user={user}
        balance={balance}
        gasFee={gasFee}
      />
    </div>
 );
} else {
  // Handle the case where the query parameters are not defined
  return <div>Error: Missing query parameters</div>;
}
};

export default AdminsOnly;
