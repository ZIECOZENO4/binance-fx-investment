'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function FAQ() {
  const defaultContent =
    "Yes, Binance FX.com is registered in the Seychelles as “Binance FX”.";
    const defaultContent1 =
    "Binance FX.com is involved in cloud mining, which enables our company to earn Bitcoins without mining hardware, software, electricity, or bandwidth.";
  return (
    <div className=" flex flex-col justify-center align-middle items-center md:p-[40px] p-[10px] py-[10]">
      <div className=" text-white justify-center align-middle text-3xl  md:text-[4rem] font-extrabold font-serif p-2">Frequent questions ?</div>
    <Accordion variant="splitted" className=" text-black p-8">
      <AccordionItem key="1" aria-label="IS BINANCE FX A REGISTERED COMPANY" title="IS BINANCE FX A REGISTERED COMPANY" className=" text-black text-xl">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="HOW DOES BINANCE FX EARN PROFITS FOR THEIR MEMBERS" title="HOW DOES BINANCE FX EARN PROFITS FOR THEIR MEMBERS">
        {defaultContent1}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>      
    </div>

  );
}
