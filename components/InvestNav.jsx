"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";

export default function InvestNav() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["INTRO"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    <div className="w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">

    <div className="flex flex-col gap-2">
      <ListboxWrapper>
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
      </ListboxWrapper>
      <p className="text-small text-default-500">Selected value: {selectedValue}</p>
    </div>
    </div>
  );
}
