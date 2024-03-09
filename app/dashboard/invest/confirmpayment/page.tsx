"use client"
import Loading from '@/app/loading';
import React from 'react';
import { Suspense, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import ComfirmPayment from './Recipt';
import { useRouter } from 'next/navigation'; // Corrected import
import { useSearchParams } from 'next/navigation'; // Import useSearchParams

const InvdestPage = () => {
 const router = useRouter();
 const [searchParams] = useSearchParams(); // Use useSearchParams to get query parameters
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




// // "use client"
// // import Loading from '@/app/loading';
// // import React from 'react'
// // import { Suspense, useEffect } from 'react';
// // import { useUser } from "@clerk/clerk-react";
// // import ComfirmPayment from './Recipt';
// // import { useRouter } from 'next/navigation'

// // const InvdestPage = () => {
// //   const router = useRouter()
// //   const { isLoaded, isSignedIn, user } = useUser();

// //   const { amount, coin, plan, planId } = router.query;
 
// //   if (!isLoaded) {
// //      return null;
// //   }
 
// //   // Check if amount, coin, plan, and planId are defined
// //   if (typeof amount === 'string' && typeof coin === 'string' && typeof plan === 'string' && typeof planId === 'string') {
// //      const parsedAmount = parseFloat(amount);
// //      return (
// //        <Suspense fallback={<div><Loading /> </div>}>
// //          <div>
// //            <ComfirmPayment amount={parsedAmount} coin={coin} plan={plan} planId={planId} />
// //          </div>
// //        </Suspense>
// //      );
// //   } else {
// //      // Handle the case where the query parameters are not defined
// //      return <div>Error: Missing query parameters</div>;
// //   }
// //  };
 

// //  export default InvdestPage;


// "use client"
// import Loading from '@/app/loading';
// import React from 'react';
// import { Suspense, useEffect } from 'react';
// import { useUser } from "@clerk/clerk-react";
// import ComfirmPayment from './Recipt';
// import { useRouter, NextRouter } from 'next/router'; // Corrected import

// const InvdestPage = () => {
//  const router = useRouter() as NextRouter; // Corrected typing
//  const { isLoaded, isSignedIn, user } = useUser();
//  const { amount, coin, plan, planId } = router.query;
 
//  if (!isLoaded) {
//      return null;
//  }
 
//  // Check if amount, coin, plan, and planId are defined
//  if (typeof amount === 'string' && typeof coin === 'string' && typeof plan === 'string' && typeof planId === 'string') {
//      const parsedAmount = parseFloat(amount);
//      return (
//        <Suspense fallback={<div><Loading /> </div>}>
//          <div>
//            <ComfirmPayment amount={parsedAmount} coin={coin} plan={plan} planId={planId} />
//          </div>
//        </Suspense>
//      );
//  } else {
//      // Handle the case where the query parameters are not defined
//      return <div>Error: Missing query parameters</div>;
//  }
// };
 
// export default InvdestPage;
