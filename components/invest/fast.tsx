'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Fast() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="secondary">Open Modal</Button>
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
              <ModalHeader className="flex flex-col gap-1">Quick Investing</ModalHeader>
              <ModalBody>
              <div className="bg-orange-lightest border-l-4 border-orange text-orange-dark p-4 text-white" role="alert">
  <p className="font-bold">Connect Wallet</p>
  <p>To use this feature click on [Connect Wallet]</p>
</div>
<div className="bg-sky-600 border-l-4 border-orange text-orange-dark p-4" role="alert">
  <p className="font-bold">Copy FX Wallet Address</p>
  <p>Copy this address <span className="text-sky-700">[ox....ciiuvb098]</span></p>
</div>
<div className="bg-slate-400 border-l-4 border-orange text-orange-dark p-4" role="alert">
  <p className="font-bold">Send</p>
  <p>Pasete the address and click on send, to invest on Binance FX</p>
</div>
<div className="bg-green-600 border-l-4 border-orange text-orange-dark p-4" role="alert">
  <p className="font-bold">Await Profit</p>
  <p>You will receive your profit within the sepculated time on your plan.</p>
</div>
<div className="bg-[#FFD700]  border-l-4 border-orange text-orange-dark p-4" role="alert">
  <p className="font-bold">Congratulation</p>
  <p>thanks for investing on Binance FX.</p>
</div>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="ghost" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  Invest
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
