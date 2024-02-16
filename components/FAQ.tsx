'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function FAQ() {
  const defaultContent =
    "Yes, Binance FX.com is registered in the Seychelles as “Binance FX”.";

  return (
    <div className=" flex flex-col justify-center align-middle items-center md:p-[40px] p-[10px] py-[10]">
      <div className=" text-white justify-center align-middle text-3xl  md:text-[4rem] font-extrabold font-serif p-2">Frequent questions ?</div>
    <Accordion variant="splitted" className=" text-black p-8">
      <AccordionItem key="1" aria-label="Is Binance Fx a registered company" title="Is Binance Fx a registered company" className=" text-black text-xl">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>      
    </div>

  );
}
