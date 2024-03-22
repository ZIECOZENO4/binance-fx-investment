"use client"
import Loading from '@/app/loading';
import React from 'react'
import { Suspense, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";


const Page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }
  return (
    <Suspense fallback={<div><Loading /> </div>}>
      <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tabs Example</h1>
      <Tabs />
    </div>
    </Suspense>
  )
}

export default Page;