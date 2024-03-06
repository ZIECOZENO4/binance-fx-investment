

"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";


export default function NFTNav() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["INTRO"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (


    <div className="flex flex-col gap-2">
    <div className="w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox 
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <ListboxItem key="INTRO">INTRO</ListboxItem>
          <ListboxItem key="NFTs">NFTs</ListboxItem>
          <ListboxItem key="BUY NFTs">BUY NFTs</ListboxItem>
          <ListboxItem key="SELL NFTs">SELL NFTs</ListboxItem>
          <ListboxItem key="CREATE NFTs">CREATE NFTs</ListboxItem>
        </Listbox>  
          </div>
      <p className="text-small text-default-500">Selected value: {selectedValue}</p>
    </div>

  );
}
