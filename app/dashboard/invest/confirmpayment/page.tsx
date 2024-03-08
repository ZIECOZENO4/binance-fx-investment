"use client"
import Loading from '@/app/loading';
import React from 'react'
import { Suspense, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import ComfirmPayment from './Recipt';
import { useRouter } from 'next/router'; // Import the useRouter hook

const InvdestPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const { amount, coin, plan, planId } = router.query;
 
  if (!isLoaded) {
     return null;
  }
 
  // Check if amount, coin, plan, and planId are defined
  if (typeof amount === 'string' && typeof coin === 'string' && typeof plan === 'string' && typeof planId === 'string') {
     const parsedAmount = parseFloat(amount);
     return (
       <Suspense fallback={<div><Loading /> </div>}>
         <div>
           <ComfirmPayment amount={parsedAmount} coin={coin} plan={plan} planId={planId} />
         </div>
       </Suspense>
     );
  } else {
     // Handle the case where the query parameters are not defined
     return <div>Error: Missing query parameters</div>;
  }
 };
 
 export default InvdestPage;