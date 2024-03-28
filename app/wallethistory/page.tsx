"use client"
import Loading from '../loading';
import React from 'react'
import { Suspense, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import PaymentDetails from './paymentdetails';
const InvdestPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }
  return (   
  <Suspense fallback={<div><Loading /> </div>}>
    <div>
      <PaymentDetails />
    </div>
    </Suspense>
  )
}

export default InvdestPage