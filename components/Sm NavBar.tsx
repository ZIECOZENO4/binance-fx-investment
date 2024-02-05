'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import ConnectButton from "./connectbutton";


export default function SmNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "NFTs      ",
    "AFFILIATE ",
    "INVEST    ",
    "TRADE     ",
    "COMMUNITY ",
    "WATCHLIST ",
    "FEATURES  ",
    "EXCHANGE  ",
    "MORE      ",
    "CONNECT WALLET",
    "REGISTER",
    "LOG OUT",
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
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="success" href="#" variant="flat">
           <ConnectButton />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
