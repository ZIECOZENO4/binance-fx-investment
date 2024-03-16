

"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";


export default function MoreNav() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["INTRO"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    
    <div className="flex flex-col gap-2">
 <div className="w-[260px] border-small px-1 py-2 rounded-small bg-black text-white  border-default-200 dark:border-default-100">
        <Listbox 
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <ListboxItem key="INTRO">INTRO</ListboxItem>
          <ListboxItem key="MARKET STATS">MARKET STATS</ListboxItem>
          <ListboxItem key="BUY FX">BUY FX</ListboxItem>
          <ListboxItem key="SELL FX">SELL FX</ListboxItem>
          <ListboxItem key="BUY AND SELL COINS">BUY AND SELL COINS</ListboxItem>
        </Listbox>
        </div>
      <p className="text-small text-default-500">Selected value: {selectedValue}</p>
    </div>

  );
}
