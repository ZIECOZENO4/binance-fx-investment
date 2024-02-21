'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import ConnectButton from "./connectbutton";

export default function SmNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "NFTs", path: "/nfts" },
    { name: "AFFILIATE", path: "/dashboard/affiliate" },
    { name: "INVEST", path: "/dashboard/invest" },
    { name: "TRADE", path: "/dashboard/trade" },
    { name: "COMMUNITY", path: "/community" },
    { name: "WATCHLIST", path: "//dashboard/watchlist" },
    { name: "FEATURES", path: "/features" },
    { name: "EXCHANGE", path: "/exchange" },
    { name: "MORE", path: "/more" },
    { name: "NEWS", path: "/news" },
    { name: "REGISTER", path: "/" },
    { name: "LOG OUT", path: "/" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" md:hidden bg-slate-700 bg-opacity-5 overflow-x-hidden"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='text-slate-200' />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src="/images/bf.png" alt="" className=' h-10  w-10 object-cover'/>
          <Link href='/' className="font-bold text-inherit text-white"> BINANCE FX</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src="/images/bf.png" alt="" className=' h-10  w-10 object-cover'/>
          <p className="font-bold text-inherit text-white"> BINANCE FX</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button  color="success"  variant="flat">
            <ConnectButton />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color={
                index ===  2 ? "warning" : index === menuItems.length -  1 ? "danger" : "foreground"
              }
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
