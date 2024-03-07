"use client"
import Loading from '@/app/loading';
import Fast from '@/components/invest/fast'
import Invest from '@/components/invest/invest'
import React from 'react'
import { Suspense, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import ComfirmPayment from './Recipt';
const InvdestPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }
  return (   
  <Suspense fallback={<div><Loading /> </div>}>
    <div>
   <ComfirmPayment  />
     
    </div>
    </Suspense>
  )
}

export default InvdestPage