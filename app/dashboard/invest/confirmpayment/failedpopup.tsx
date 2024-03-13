"use client"


import React from 'react'

import {Button} from "@nextui-org/react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from 'next/link';
interface FailedPopupProps {
  onClose: () => void;
 }
const FailedPopup: React.FC<FailedPopupProps> = ({ onClose }) => {
  return (
    <Card className="w-full max-w-lg p-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg z-20">
    <CardHeader className="flex flex-col items-center gap-2 p-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-red-500"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
      <CardTitle>Transaction Failed</CardTitle>
      <CardDescription>Your transaction failed due to insufficient funds. Please try again.</CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center p-6">
      <div />
    </CardContent>
    <div className="flex flex-row mx-4 align-middle justify-center items-center gap-8">
    <Link href="/dashboard/invest">
    Retry
    </Link>
    <Button color="primary" variant="bordered" onClick={onClose}>
 Done
    </Button> 
    </div>

  </Card>
  )
}

export default FailedPopup