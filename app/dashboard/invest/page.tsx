"use client"
import Loading from '@/app/loading';
import Fast from '@/components/invest/fast'
import Invest from '@/components/invest/invest'
import React from 'react'
import { Suspense, useEffect } from 'react';

const InvdestPage = () => {
  return (
    <div>
        <Suspense fallback={<div><Loading /> </div>}>
      <Invest />
      <div className="  flex items-end justify-end align-top absolute top-[10vh] md:top-[20vh] ">
        <Fast />
      </div>
      </Suspense>
    </div>
  )
}

export default InvdestPage