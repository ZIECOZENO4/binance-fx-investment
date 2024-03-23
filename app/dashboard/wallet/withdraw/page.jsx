"use client"
import Loading from '@/app/loading';
import React from 'react'
import { Suspense, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import WithdrawalPage from "../../../../components/withdraw/withdraw"


const Page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }
  return (
    <Suspense fallback={<div><Loading /> </div>}>
      <div className="container mx-auto m-0">
      <WithdrawalPage />
    </div>
    </Suspense>
  )
}

export default Page;