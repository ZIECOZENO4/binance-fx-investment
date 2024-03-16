"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";


export default function InvestNav() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["INTRO"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (


    <div className="flex flex-col gap-2">
    <div className="w-[260px] border-small px-1 bg-black text-white  py-2 rounded-small border-default-200 dark:border-default-100 bg-black text-white ">
        <Listbox 
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <ListboxItem key="INTRO">INTRO</ListboxItem>
          <ListboxItem key="PLANS">PLANS</ListboxItem>
          <ListboxItem key="CONFIRMATION">CONFIRMATION</ListboxItem>
          <ListboxItem key="LEVEL UPGRADE">LEVEL UPGRADE</ListboxItem>
          <ListboxItem key="INTEREST">INTEREST</ListboxItem>
        </Listbox>
        </div>
      <p className="text-small text-default-500">Selected value: {selectedValue}</p>
    </div>

  );
}
