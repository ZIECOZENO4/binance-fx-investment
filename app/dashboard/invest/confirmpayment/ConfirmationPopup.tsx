"use client";
import React, { useRef } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from 'next/link';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';


interface ConfirmationPopupProps {
 plan: string;
 planId: string;
 amount: number;
 onClose: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ plan, planId, amount, onClose }) => {
  const {isOpen, onOpenChange} = useDisclosure({ defaultOpen: true });
  const componentRef = useRef(null); // Reference to the component's root element

  const handleDownload = () => {
     html2canvas(componentRef.current).then(canvas => {
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'PNG', 0, 0);
       saveAs(pdf.output('blob'), 'confirmation_popup.pdf');
     });
  };
  return (
    <Modal 
    backdrop="opaque" 
    isOpen={isOpen} 
    onOpenChange={onOpenChange}
    radius="lg"
    classNames={{
      body: "py-6",
      backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
      base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
      header: "border-b-[1px] border-[#292f46]",
      footer: "border-t-[1px] border-[#292f46]",
      closeButton: "hover:bg-white/5 active:bg-white/10",
    }}
  >
            <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Investment Receipt</ModalHeader>
              <ModalBody>
              <Card className="w-full max-w-lg p-0 fixed p-4 rounded shadow-lg z-20">
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
        <div className="flex flex-col justify-center align-middle mb-3 gap-4">
          <div>
            <div className="text-sm font-medium text-slate-700">Plan</div>
            <div className="text-lg font-semibold text-black">{plan}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-700">Plan ID</div>
            <div className="text-lg font-semibold text-black">{planId}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-700">Amount</div>
            <div className="text-lg font-semibold text-black">{amount}</div>
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
              </ModalBody>
              <ModalFooter>
              <Button color="success" variant="ghost" onPress={handleDownload}>
            Save
          </Button>
                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </Modal>
 );
};


export default ConfirmationPopup
