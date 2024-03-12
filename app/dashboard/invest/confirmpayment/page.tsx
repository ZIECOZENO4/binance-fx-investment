"use client"
import Loading from '../../../loading';
import React from 'react';
import { Suspense, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";

import ComfirmPayment from './Recipt';// Corrected import
import { useSearchParams } from 'next/navigation'; // Import useSearchParams

const InvdestPage = () => {
  const searchParams = useSearchParams()

 const { isLoaded, isSignedIn, user } = useUser();
 const amount = searchParams.get('amount');
 const coin = searchParams.get('coin');
 const plan = searchParams.get('plan');
 const planId = searchParams.get('planId');

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


