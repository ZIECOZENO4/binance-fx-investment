"use client";
import React from 'react';
import { Progress, Button } from "@nextui-org/react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from 'next/link';

interface ConfirmationPopupProps {
 plan: string;
 planId: string;
 amount: number;
 onClose: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ plan, planId, amount, onClose }) => {
 return (
    <Card className="w-full max-w-lg p-0 fixed  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg z-20">
      <CardHeader className="flex flex-col items-center gap-2 p-6">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="h-10 w-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
        <CardTitle>Processing transaction</CardTitle>
        <CardDescription>Your transaction is currently being processed by our team. Please wait.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-6">
        <div />
      </CardContent>
      <CardContent className="p-6 ">
        <div className="flex flex-col justify-center align-middle  gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Plan</div>
            <div className="text-lg font-semibold">{plan}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Plan ID</div>
            <div className="text-lg font-semibold">{planId}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Amount</div>
            <div className="text-lg font-semibold">{amount}</div>
          </div>
        </div>
        <Progress
          size="md"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        />
      </CardContent>
      <div className=" flex flex-row jusify-center mx-8 align-middle items-center gap-8">
      <Button color="primary" variant="shadow" onClick={onClose}>
      Save
      </Button>
      <Link href="/dashboard/invest" className="rounded-sm bg-green-600 space-x ">
  Done
    </Link>
    </div>
    </Card>
 );
};

export default ConfirmationPopup;