"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs";
import { User, Link } from "@nextui-org/react";
import Eye from "../dashboard/eye";
import Noeye from "../dashboard/noeye";
import { useUserInfo } from '@/tenstack-hooks/user-info';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import MultiStepForm from "./process";

import Loading from "../../app/loading";

interface UserBalanceProps {
  userId: string;
}

interface Investment {
  balance: string;
  symbol: string;
}


const Wallet: React.FC = () => {
  const { data: userInfo } = useUserInfo();
  const [balance, setBalance] = useState<number | null>(null);
  const [investmentIndex, setInvestmentIndex] = useState(0);
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
  const investments = [
    { balance: "0.000", symbol: "ETH" },
    { balance: "0.000", symbol: "BTC" },
    { balance: "0.000", symbol: "LTC" },
  ];

  const { isLoaded, isSignedIn, user } = useUser();


  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
  };
 
  const copyIdToClipboard = () => {
    if (user && user.id) {
      navigator.clipboard.writeText(user.id);
      alert("Your ID is copied");
    }
  };


  const shortenedId =
    user && user.id
      ? user.id.substring(0, 3) + "..." + user.id.substring(user.id.length - 3)
      : "ID: ---";

      const userBalance = userInfo.balance;
      console.log("this is hte user balance form the backend", userBalance);
      function formatWithCommas(value: number | string): string {
        let strValue = value.toString().replace(/,/g, '');
        let parts = strValue.split('.');
        let wholePart = parts[0];
        let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
        wholePart = wholePart.split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1,').split('').reverse().join('');
        return wholePart + decimalPart;
      }
      
      
  return (
    <div className=" flex flex-col justify-center align-middle items-center overflow-x-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="container md:flex-col m-4">
          <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1  md:flex-col">
            <div className="flex flex-col  sticky top-0 z-10">
              <div className="bg-gray-800 border border-gray-800 shadow-lg  py-4">
                <div className="flex-none sm:flex  ">
                  <div className=" relative h-auto w-full  mx-2 sm:mb-0 mb-3">
                    <SignedIn>
                      {isSignedIn && (
                        <div className="flex justify-between align-middle items-center ">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 rounded-full"
                              src={user ? user.imageUrl : "/images/ph.PNG"}
                              alt=""
                            />
                            <div className="ml-2">
                              <h3 className="text-2xl text-white font-bold font-serif uppercase">
                                {user && user.username
                                  ? user.username
                                  : user
                                    ? user.firstName
                                    : " FX User"}
                              </h3>
                              <span className="text-blue-600 text-xl uppercase flex">
                                ID: {shortenedId}
                                <svg
                                  onClick={copyIdToClipboard}
                                  width="20"
                                  height="20"
                                  viewBox="0  0  24  24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M16  4h2a2  2  0  0  1  2  2v12a2  2  0  0  1-2  2H6a2  2  0  0  1-2-2V6a2  2  0  0  1  2-2h2"></path>
                                  <line x1="8" y1="2" x2="8" y2="22"></line>
                                  <line x1="12" y1="2" x2="12" y2="22"></line>
                                  <line x1="16" y1="2" x2="16" y2="22"></line>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <Link
                            href="/user-profile"
                            className="mt-2 sm:mt-0 mr-2"
                          >
                            <button className="flex text-xl items-center text-white bg-red-600 rounded px-2 py-1 hover:bg-red-500 focus:outline-none focus:shadow-outline">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                              </svg>
                              Edit
                            </button>
                          </Link>
                        </div>
                      )}
                    </SignedIn>
                    <SignedOut>
                      <div className="sm:flex sm:justify-between">
                        <div className="flex items-center">
                          <img
                            className="h-12 w-12 rounded-full"
                            src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"
                            alt=""
                          />
                          <div className="ml-2">
                            <h3 className="text-lg text-gray-800 font-medium">
                              Binance FX User
                            </h3>
                            <span className="text-gray-600">ID:0</span>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <button className="flex text-sm items-center text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 focus:outline-none focus:shadow-outline">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                              <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                            </svg>
                            Edit
                          </button>
                        </div>
                      </div>
                    </SignedOut>
                  </div>

                  <div className="flex flex-col ">
                    <div className="flex flex-row justify-between gap-4 items-center align-middle py-4 px-2">
                      <div className="flex flex-row justify-between gap-4 items-center align-middle w-[70%]">
                        <p className="text-md text-white  ">WALLET BALANCE</p>
                        <div onClick={toggleBalanceVisibility}>
                          {isBalanceHidden ? <Eye /> : <Noeye />}
                        </div>
                      </div>
                      <Button color="primary" variant="shadow">
                        View History
                      </Button>
                    </div>

                    <div

                      className="text-2xl text-white font-bold ml-2"
                    >
   {isBalanceHidden ? '*****' : userBalance !== null ? `$${formatWithCommas(userBalance.toFixed(2))}` : '$  0.00 '}         </div>

                    <div className="flex flex-row justify-between gap-4 items-center align-middle py-4 px-2 ">
                      <div className="flex flex-row justify-between gap-4 items-center align-middle w-[70%]">
                        <p className="text-md text-white  ">INVESTMENT</p>
                        <div onClick={toggleBalanceVisibility}>
                          {isBalanceHidden ? <Eye /> : <Noeye />}
                        </div>
                      </div>
                      <Link href="/history">
                      <Button color="primary" variant="shadow">
                        View History
                      </Button> 
                      </Link>
                    </div>
                    <div className="text-2xl text-white font-bold ml-2">
                      {isBalanceHidden
                        ? "*****"
                        : `${investments[investmentIndex].balance} ${investments[investmentIndex].symbol}`}
                    </div>
                  </div>
                  <div className="flex-auto sm:ml-5 justify-evenly mt-4 ">
                    <div className="flex p-2  text-sm text-gray-400 ">
                      <div className="flex-1 inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                        <p className="">Tier 1</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <p className="">Junior</p>
                      </div>
                      <div className="">
                        <Button
                          onPress={() => {
                            setModalPlacement("bottom");
                            onOpen();
                          }}
                          className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                        >
                          Upgrade
                        </Button>

                        <Modal
                          isOpen={isOpen}
                          placement={
                            modalPlacement as
                            | "auto"
                            | "center"
                            | "bottom"
                            | "top"
                            | "top-center"
                            | "bottom-center"
                            | undefined
                          }
                          onOpenChange={onOpenChange}
                          className=" h-auto overflow-y-auto"
                        >
                          <ModalContent>
                            {(onClose) => (
                              <>
                                <ModalHeader className="flex flex-col gap-1  justify-center align-middle items-center">
                                  UPGRADE TO TIRE TWO
                                </ModalHeader>
                                <ModalBody>
                                  <MultiStepForm />
                                </ModalBody>
                              </>
                            )}
                          </ModalContent>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-md rounded-xl w-[100%] p-2 mb-4 bg-[#5E17F4] text-white">
              <div className="break-inside relative gap-2 overflow-hidden flex flex-row justify-between space-y-2 text-md rounded-xl w-[100%] p-2 mb-4 bg-[#5E17F4] text-white">
                <Link href="/dashboard/wallet/deposit">
                  <Button
                    disableRipple
                    className="relative flex flex-col m-1 w-auto h-auto align-middle overflow-visible rounded-full hover:-translate-y-1 px-2 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg"
                  >
                    <div>
                      <svg
                        fill="white"
                        width="30px"
                        className="flex justify-center align-middle p-1"
                        height="30px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g data-name="11. Phone" id="_11._Phone">
                            {" "}
                            <path d="M14,6a1,1,0,0,0,0-2H8A1,1,0,0,0,8,6Z"></path>{" "}
                            <path d="M21,8.84v-4A4.8,4.8,0,0,0,16.21,0H5.79A4.8,4.8,0,0,0,1,4.79V27.21A4.8,4.8,0,0,0,5.79,32H16.21A4.8,4.8,0,0,0,21,27.21v-.05A10,10,0,0,0,21,8.84ZM16.21,30H5.79A2.79,2.79,0,0,1,3,27.21V4.79A2.79,2.79,0,0,1,5.79,2H16.21A2.79,2.79,0,0,1,19,4.79V8.2A10.2,10.2,0,0,0,17,8a9.92,9.92,0,0,0-7,2.89V10a1,1,0,0,0-2,0V26a1,1,0,0,0,2,0v-.89A9.92,9.92,0,0,0,17,28a10.19,10.19,0,0,0,1.93-.19A2.79,2.79,0,0,1,16.21,30ZM17,26a8,8,0,0,1-7-4.14V14.14A8,8,0,1,1,17,26Z"></path>{" "}
                            <path d="M17,15h2a1,1,0,0,0,0-2H18a1,1,0,0,0-2,0v.18A3,3,0,0,0,17,19a1,1,0,0,1,0,2H15a1,1,0,0,0,0,2h1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,17,17a1,1,0,0,1,0-2Z"></path>{" "}
                            <path d="M30,5H27.41l.3-.29a1,1,0,1,0-1.42-1.42l-2,2a1,1,0,0,0,0,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L27.41,7H30a1,1,0,0,0,0-2Z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>

                    <p className="font-bold text-white">Deposit</p>
                  </Button>
                </Link>
                <Link href="/dashboard/wallet/withdraw">
                  <Button
                    disableRipple
                    className="relative flex flex-col m-1 w-auto h-auto align-middle overflow-visible rounded-full hover:-translate-y-1 px-2 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg"
                  >
                    <div>
                      <svg
                        width="30px"
                        height="30px"
                        className="flex justify-center align-middle p-1"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 9C11.4477 9 11 9.44771 11 10V15.5856L9.70711 14.2928C9.3166 13.9024 8.68343 13.9024 8.29292 14.2928C7.90236 14.6834 7.90236 15.3165 8.29292 15.7071L11.292 18.7063C11.6823 19.0965 12.3149 19.0968 12.7055 18.707L15.705 15.7137C16.0955 15.3233 16.0955 14.69 15.705 14.2996C15.3145 13.909 14.6814 13.909 14.2908 14.2996L13 15.5903V10C13 9.44771 12.5523 9 12 9Z"
                            fill="#0F0F0F"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21 1C22.6569 1 24 2.34315 24 4V8C24 9.65685 22.6569 11 21 11H19V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V11H3C1.34315 11 0 9.65685 0 8V4C0 2.34315 1.34315 1 3 1H21ZM22 8C22 8.55228 21.5523 9 21 9H19V7H20C20.5523 7 21 6.55229 21 6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6C3 6.55229 3.44772 7 4 7H5V9H3C2.44772 9 2 8.55228 2 8V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V8ZM7 7V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V7H7Z"
                            fill="white"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <p className="font-bold text-white">Withdraw</p>
                  </Button>
                </Link>
                <Link href="/dashboard/invest">
                  <Button
                    disableRipple
                    className="relative flex flex-col m-1 w-auto h-auto align-middle overflow-visible rounded-full hover:-translate-y-1 px-2 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg"
                  >
                    <div>
                      <svg
                        fill="white"
                        className="flex justify-center align-middle p-1"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="30px"
                        height="30px"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="312.016"
                                y="295.693"
                                width="15.706"
                                height="95.28"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="320.393"
                                y="464.266"
                                width="15.706"
                                height="15.706"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <polygon points="0,0.428 0,288.363 104.703,288.363 104.703,272.657 15.706,272.657 15.706,16.134 496.294,16.134 496.294,272.657 225.112,272.657 225.112,288.363 512,288.363 512,0.428 "></polygon>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M192.654,255.905h287.935V31.839H31.411v224.065h73.292v-15.706H47.117V47.545h152.811 c-8.206,4.861-15.73,10.458-22.409,16.753H88.998v7.853c0,7.778-2.275,15.182-17.276,15.182h-7.853v112.033h7.853 c11.486,0,17.276,5.068,17.276,16.229v7.853h23.836v122.158l24.044,40.072v14.016h-24.044v111.88h256.141v-111.88H152.583v-18.365 l-24.044-40.072V216.117h23.281v-49.211h-15.706v33.505h-7.575v-64.883c22.883,3.76,40.396,23.678,40.396,47.61v96.012h15.867 c13.347,0,24.205,10.859,24.205,24.205v32.058h15.706v-32.058c0-22.008-17.904-39.911-39.911-39.911h-0.161v-33.73 c4.588,3.891,9.441,7.408,14.544,10.484h-6.53V255.905z M353.268,415.397v80.469H128.539v-80.469H353.268z M464.883,47.545 v192.654h-150.41c7.821-4.704,15.017-10.346,21.448-16.753h89.174v-7.853c0-10.698,5.379-16.229,15.182-16.229h7.853V87.332 h-7.853c-13.627,0-15.182-8.752-15.182-15.182v-7.853h-89.543c-6.507-6.421-13.784-12.063-21.693-16.753H464.883z M349.062,207.741c12.544-18.104,19.914-40.053,19.914-63.688c0-23.794-7.469-45.877-20.168-64.05h61.314 c2.388,11.835,10.37,19.742,22.305,22.097v82.047c-11.71,2.64-19.901,11.29-22.317,23.595H349.062z M145.996,124.418 c-7.767-3.361-16.323-5.233-25.311-5.233h-7.852v88.556h-9.052c-2.459-12.842-11.149-21.372-24.207-23.758v-81.741 c13.316-2.121,21.768-9.897,24.196-22.239h59.955C154.53,92.815,148.314,107.678,145.996,124.418z M184.641,207.787v-14.631 c15.905,22.886,42.371,37.909,72.292,37.909c48.522,0,87.997-39.475,87.997-87.998c0-48.523-39.475-87.998-87.997-87.998 c-47.924,0-86.996,38.515-87.953,86.215c-2.397-2.761-5.015-5.323-7.845-7.64c5.103-48.534,46.118-85.986,95.798-85.986 c28.52,0,54.181,12.497,71.835,32.288v0.058h0.05c15.198,17.065,24.449,39.538,24.449,64.11c0,24.372-9.115,46.644-24.093,63.628 h-0.406v0.455c-16.216,18.157-39.177,30.168-64.92,32.003h-13.798C224.743,238.424,201.444,226.89,184.641,207.787z M184.641,143.067c0-39.862,32.431-72.293,72.293-72.293c39.862,0,72.291,32.431,72.291,72.293 c0,39.862-32.43,72.292-72.291,72.292C217.072,215.359,184.641,182.928,184.641,143.067z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M263.977,131.035c-10.683-4.024-15.09-6.66-15.09-10.817c0-3.514,2.646-7.036,10.817-7.036 c9.047,0,14.831,2.888,18.103,4.273l3.647-14.205c-4.148-2.011-9.807-3.772-18.236-4.148V88.035h-12.319v11.944 c-13.446,2.645-21.241,11.317-21.241,22.376c0,12.201,9.173,18.486,22.626,23.011c9.306,3.146,13.329,6.16,13.329,10.933 c0,5.033-4.907,7.796-12.068,7.796c-8.171,0-15.59-2.637-20.874-5.533l-3.772,14.714c4.782,2.763,12.953,5.025,21.374,5.401 v11.942h12.319v-12.82c14.455-2.512,22.376-12.068,22.376-23.261C284.968,143.228,278.934,136.31,263.977,131.035z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="441.849"
                                y="55.922"
                                width="15.706"
                                height="15.706"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="441.849"
                                y="216.118"
                                width="15.706"
                                height="15.706"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="56.54"
                                y="55.922"
                                width="15.706"
                                height="15.706"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="56.54"
                                y="216.118"
                                width="15.706"
                                height="15.706"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <p className="font-bold text-white">Invest</p>
                  </Button>
                </Link>
              </div>
              <div className="flex justify-between items-center">
                <span>Report Issues</span>
                <button className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black">
                  <span>Help Me</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h13M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col w-full ">
              <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] md:w-full p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white">
                <div className="flex items-center justify-between font-medium">
                  <span className="uppercase text-xs text-green-500">
                    upgrade Now
                  </span>
                  <span className="text-xs text-slate-500">Help Team</span>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
                      <line x1="3" y1="22" x2="21" y2="22" />
                    </svg>
                  </div>
                  <span className="text-base font-medium">
                    Upgrade now to enjoy all Binace fx Features and benefits
                  </span>
                </div>
                <div>
                  {" "}
                  Inorder to be given licence and to be able to get the latest
                  news and partake in the vip investment plan u need to upgrade
                  to Premium Account, so upgrade now.
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <dt className="sr-only">Investors</dt>
                    <dd className="flex justify-start -space-x-1.5">
                      <a href="#" className="inline-block -m-1">
                        <img
                          className="w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800"
                          src="https://randomuser.me/api/portraits/women/46.jpg"
                          alt="avatar"
                        />
                      </a>
                      <a href="#" className="inline-block -m-1">
                        <img
                          className="w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800"
                          src="https://randomuser.me/api/portraits/men/45.jpg"
                          alt="avatar"
                        />
                      </a>
                      <a href="#" className="inline-block -m-1">
                        <img
                          className="w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800"
                          src="https://randomuser.me/api/portraits/women/47.jpg"
                          alt="avatar"
                        />
                      </a>
                      <span className="inline-block -m-1 rounded-full ring-2 ring-white dark:ring-slate-800">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-slate-200 dark:text-slate-600"
                        >
                          <path
                            d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5ZM8.20879 15.5C8.20879 19.5268 11.4732 22.7912 15.5 22.7912C19.5268 22.7912 22.7912 19.5268 22.7912 15.5C22.7912 11.4732 19.5268 8.20879 15.5 8.20879C11.4732 8.20879 8.20879 11.4732 8.20879 15.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M31 15.5C31 18.049 30.3714 20.5586 29.1698 22.8066C27.9682 25.0547 26.2307 26.9716 24.1113 28.3878C21.9919 29.8039 19.556 30.6755 17.0193 30.9254C14.4826 31.1752 11.9234 30.7956 9.56841 29.8201C7.21345 28.8447 5.1354 27.3035 3.51834 25.3331C1.90128 23.3627 0.795112 21.0239 0.297828 18.5239C-0.199455 16.0239 -0.0725081 13.4398 0.667425 11.0006C1.40736 8.56136 2.73744 6.34225 4.53984 4.53985L10.2876 10.2876C9.43046 11.1448 8.79791 12.2002 8.44602 13.3602C8.09413 14.5202 8.03376 15.7491 8.27025 16.9381C8.50675 18.127 9.03281 19.2393 9.80184 20.1764C10.5709 21.1134 11.5591 21.8464 12.6791 22.3103C13.799 22.7742 15.0161 22.9547 16.2225 22.8359C17.4289 22.7171 18.5874 22.3026 19.5953 21.6291C20.6033 20.9556 21.4295 20.0439 22.001 18.9748C22.5724 17.9058 22.8714 16.7122 22.8714 15.5H31Z"
                            fill="#2BC86A"
                          />
                        </svg>
                      </span>
                    </dd>
                  </div>
                  <button className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                    <span>Upgrade</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h13M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14  absolute bottom-4 right-3 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <div className="flex justify-between items-center "></div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    0
                  </div>
                  <div className="text-sm text-gray-500">Deposits</div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14  absolute bottom-4 right-3 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-behance text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    0
                  </div>
                  <div className="text-sm text-gray-500">Investments</div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14  absolute bottom-4 right-3 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-codepen text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    0%
                  </div>
                  <div className="text-sm text-gray-500">Progress Rate</div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <svg
                    fill="#cc1e1e"
                    width="64px"
                    height="64px"
                    viewBox="0 0 24 24"
                    data-name="Layer 1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#cc1e1e"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title></title>
                      <path d="M22,11V7.83L12,2.06,2,7.83V11H4v8H2v2H22V19H20V11ZM4,9l8-4.62L20,9H4ZM6,19V11H8v8Zm4,0V11h4v8Zm8,0H16V11h2Z"></path>
                    </g>
                  </svg>
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-codepen text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    Level 1
                  </div>
                  <div className="text-sm text-gray-500">Account Tier</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                <div className="">
                  <div className="text-center p-5 flex-auto justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 -m-1 flex items-center text-blue-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <svg
                      fill="#ffffff"
                      height="60px"
                      width="70px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 229"
                      className="flex items-center mx-auto mt-2"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M193,147.9h-37.8v-39.4c0-17.4-14.1-31.5-31.5-31.5H33.5C16.1,77,2,91.1,2,108.5v104.4c0,7.6,6.2,13.8,13.8,13.8 c3.8,0,7.3-1.5,9.8-4s4-5.9,4-9.8v-88.7c0-2.1,1.7-3.9,3.9-3.9h0.1c2.2,0,3.9,1.7,3.9,3.9v102.5h82.7V124.5c0-2.3,1.5-4.2,4.2-4.2 c2.5,0.1,3.7,2.2,3.7,4.3v35c0,8.7,7.1,15.8,15.8,15.7l49.1,0.1c7.6,0,13.8-6.2,13.8-13.8l0,0C206.8,154,200.6,147.9,193,147.9z M247,90.6c-7.3-11.9-22.8-32.1-30.5-42l20.3-29.9h-56.2l20.2,29.8c-7.7,9.8-23.3,30.1-30.6,42.1c-3.3,5.4-7,11.5-7,21.4 c0,15.4,11.7,28,26.1,28h38.5c14.4,0,26.1-12.6,26.1-28C254,102.1,250.3,96,247,90.6z M211.8,116.9v5.4h-6.7v-5.6 c-3.5-0.8-6.8-2.5-9.8-5.3l5.1-5.6c0,0,3.7,3.2,7.2,3.7c4,0.6,6.4-1.3,6.7-3.8c0.5-4.7-8.7-6.5-12-8.3c-4-2.1-7.9-5-7.9-11.1 c0-6.2,4.3-10.8,10.8-11.4v-5.8h6.7v6c4.2,0.9,7.1,3.2,9.4,4.9l-4.6,6c-1.4-1.3-4.1-3-6.6-3.6c-3.2-0.8-6.7,0.1-6.9,3.6 c-0.1,1.4,0.5,4.3,7.5,6.4c3.7,1.2,12.3,3.7,12.3,12.7C222.9,111.3,218.2,116.2,211.8,116.9z M46.3,35.8c0-18,14.6-32.7,32.7-32.7 s32.7,14.6,32.7,32.7S97,68.5,79,68.5S46.3,53.9,46.3,35.8z"></path>{" "}
                      </g>
                    </svg>
                    <h2 className="text-xl font-bold py-4 text-gray-200">
                      Upgrade Your Investment Plan
                    </h2>
                    <p className="text-sm text-gray-500 px-8">
                      The Board and Shared plan is now out with alot of features
                      and good cash out options. Rush Now
                    </p>
                  </div>
                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
                      Not Intrested
                    </button>
                    <button className="bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                      Invest
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <Link href="/dashboard/wallet/referral" className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t9.png"
                          alt="aji"
                          className=" relative w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3">
                        <div className="font-medium leading-none text-gray-100">
                          Refer{" "}
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1">
                          Refer a friend claim your bonus and increase your
                          team.
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </Link>

                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t5.png"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Coupons
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          No available
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-400 rounded-full ml-2">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t6.png"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Claims
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          Binance Fx have some gifts for you
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <h5 className="flex items-center font-medium text-gray-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>{" "}
                          0.001
                        </h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-400 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t7.png"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-slate-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Pending Transactions
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          No Pendings
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t1.png"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-slate-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Account Statement
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          No statement of account yet
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t2.png"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-slate-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Security
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          Improve your security
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t10.png"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-slate-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Feedback
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          Send feedback to Binance FX
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t3.png"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-slate-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Customer Service
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          Meet the help team
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                  <div className="flex">
                    <img
                      src="/images/t4.png"
                      alt="Just a flower"
                      className=" w-16  object-fit  h-16 rounded-2xl"
                    />
                    <div className="flex flex-col justify-center w-full px-2 py-1">
                      <div className="flex justify-between items-center ">
                        <div className="flex flex-col">
                          <h2 className="font-medium leading-none text-gray-100">
                            Massive Cashout
                          </h2>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex pt-2  text-sm text-gray-500">
                        <div className="flex items-center mr-auto">
                          <p className="font-medium text-green-500">Level</p>
                          <p className="font-normal">2 +</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-400 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="flex items-center font-medium text-gray-300 ">
                          0.01 FX
                          <span className="text-gray-600 text-sm font-normal">
                            {" "}
                            /24
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="/images/t8.png"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-slate-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          About Us
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          Konwu about Binance FX
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="lg:w-3/5 p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                  <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-36 lg:w-36   lg:mb-0 mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="unsplash images"
                        className=" w-full  object-scale-down lg:object-cover  lg:h-36 rounded-2xl"
                      />
                    </div>
                    <div className="flex-auto lg:ml-3 justify-evenly py-2">
                      <div className="flex flex-col ">
                        <div className="flex items-center mr-auto text-sm">
                          <p className="font-medium text-green-500">Level</p>
                          <p className="font-normal text-gray-500">2 + </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-300 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="flex items-center  justify-between min-w-0">
                          <h2 className="mr-auto   text-base text-gray-100 font-medium truncate">
                            Massive Cash Out
                          </h2>
                          <div className="flex items-center font-medium text-gray-300 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            24
                            <span className="text-gray-400 text-sm font-normal">
                              {" "}
                              /Hours
                            </span>
                          </div>
                        </div>
                        <p className="flex items-center text-sm text-gray-400">
                          Fortcochi,Cochin . 7km{" "}
                          <span className="relative inline-flex rounded-md shadow-sm ml-2">
                            <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="flex my-3 border-t border-gray-800 "></div>
                      <div className="flex space-x-3 text-sm font-medium">
                        <div className="flex-auto items-center flex space-x-3 text-xs text-gray-500">
                          <span>2 Bedroom</span>
                          <span>4 Guest</span>
                        </div>
                        <button
                          className="mb-2 md:mb-0 flex-no-shrink bg-green-400 hover:bg-green-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                          type="button"
                          aria-label="like"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/5 ..."></div>
              </div>
              <div className="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                <div className="flex items-center justify-between">
                  <SignOutButton>
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="font-medium leading-none text-red-600">
                          Log Out?
                        </div>

                        <p className="text-sm text-gray-500 leading-none mt-1">
                          Do you really want to log out.
                        </p>
                      </div>
                    </div>
                  </SignOutButton>
                  <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

