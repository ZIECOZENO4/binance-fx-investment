'use client'
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton,  } from "@clerk/nextjs";
import React from 'react'
import {User, Link} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

const Wallet = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return null;
  }
  return (
    <div   className=' flex flex-col justify-center align-middle items-center'>
      <div    className=' flex flex-row justify-between gap-20 '>
<div   className=' flex flex-row justify-start align-middle items-start'>

</div>
<div   className=' flex flex-row justify-end align-middle items-end ml-4'>
{/* <svg width="24px" height="24px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#2b2fa6" stroke="#2b2fa6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#000000"> </path> <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill="#000000"> </path> </g></svg> */}
</div>
      </div>
   <div>

<div   className='flex items-center justify-center flex-col w-full bg-slate-200'>
   
    <div   className='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
        <div   className='flex items-center justify-between font-medium'>
            <span   className='uppercase text-xs text-green-500'>upgrade team</span>
            <span   className='text-xs text-slate-500'>#teamsdesigners</span>
        </div>
        <div   className='flex flex-row items-center space-x-3'>
            <div   className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                <line x1='3' y1='22' x2='21' y2='22' />
            </svg>
            </div>
            <span   className='text-base font-medium'>Upgrade your team for better performance</span>
        </div>
        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
        <div   className='flex justify-between items-center'>
            <div>
            <dt   className='sr-only'>Users</dt>
            <dd   className='flex justify-start -space-x-1.5'>
                <a href='#'   className='inline-block -m-1'>
                <img   className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
                </a>
                <a href='#'   className='inline-block -m-1'>
                <img   className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
                </a>
                <a href='#'   className='inline-block -m-1'>
                <img   className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
                </a>
                <span   className='inline-block -m-1 rounded-full ring-2 ring-white dark:ring-slate-800'>
                <svg width='28' height='28' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg'   className='text-slate-200 dark:text-slate-600'>
                    <path d='M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5ZM8.20879 15.5C8.20879 19.5268 11.4732 22.7912 15.5 22.7912C19.5268 22.7912 22.7912 19.5268 22.7912 15.5C22.7912 11.4732 19.5268 8.20879 15.5 8.20879C11.4732 8.20879 8.20879 11.4732 8.20879 15.5Z' fill='currentColor' />
                    <path d='M31 15.5C31 18.049 30.3714 20.5586 29.1698 22.8066C27.9682 25.0547 26.2307 26.9716 24.1113 28.3878C21.9919 29.8039 19.556 30.6755 17.0193 30.9254C14.4826 31.1752 11.9234 30.7956 9.56841 29.8201C7.21345 28.8447 5.1354 27.3035 3.51834 25.3331C1.90128 23.3627 0.795112 21.0239 0.297828 18.5239C-0.199455 16.0239 -0.0725081 13.4398 0.667425 11.0006C1.40736 8.56136 2.73744 6.34225 4.53984 4.53985L10.2876 10.2876C9.43046 11.1448 8.79791 12.2002 8.44602 13.3602C8.09413 14.5202 8.03376 15.7491 8.27025 16.9381C8.50675 18.127 9.03281 19.2393 9.80184 20.1764C10.5709 21.1134 11.5591 21.8464 12.6791 22.3103C13.799 22.7742 15.0161 22.9547 16.2225 22.8359C17.4289 22.7171 18.5874 22.3026 19.5953 21.6291C20.6033 20.9556 21.4295 20.0439 22.001 18.9748C22.5724 17.9058 22.8714 16.7122 22.8714 15.5H31Z' fill='#2BC86A' />
                </svg>
                </span>
            </dd>
            </div>
            <button   className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <span>Submit</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
        </div>
</div>
   </div>

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">

  <div className="container  m-4">
    <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">

      <div className="flex flex-col sticky top-0 z-10">
        <div className="bg-gray-800 border border-gray-800 shadow-lg  p-4">
          <div className="flex-none sm:flex">
            <div className=" relative h-32 w-32 fl  sm:mb-0 mb-3">
            <SignedIn>
        { isSignedIn &&       
        <div className="flex justify-between align-middle items-center ">
            <div className="flex items-center">
                <img className="h-24 w-24 rounded-full" src={ user ? user.imageUrl : "/images/ph.PNG"} alt=""/>
                <div className="ml-2">
                    <h3 className="text-2xl text-white font-bold font-serif">{ user ? user.firstName : "Binance FX User"}</h3>
                    <span className="text-blue-600 text-xl">ID: 1FDRCTYVUIB4567</span>
                </div>
            </div>
            <div className="mt-2 sm:mt-0">
                <button className="flex text-2xl items-center text-white bg-red-600 rounded px-2 py-1 hover:bg-red-500 focus:outline-none focus:shadow-outline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
  <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
  <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
</svg>
Edit
                </button>
            </div>
        </div> }
              </SignedIn>
      <SignedOut>
      <div className="sm:flex sm:justify-between">
            <div className="flex items-center">
              
                <img className="h-12 w-12 rounded-full" src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g" alt=""/>
                <div className="ml-2">
                    <h3 className="text-lg text-gray-800 font-medium">Binance FX User</h3>
                    <span className="text-gray-600">ID:0</span>
                </div>
            </div>
            <div className="mt-2 sm:mt-0">
            <button className="flex text-sm items-center text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 focus:outline-none focus:shadow-outline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
  <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
  <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
</svg>
Edit
                </button>
            </div>
        </div>
      </SignedOut>
 
            </div>
            <div className="flex-auto sm:ml-5 justify-evenly">
        
              <div className="flex flex-row items-center">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-yellow-400">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                    </path>
                  </svg>
                </div>
                <div className="flex-1 inline-flex   items-center ml-2 space-x-2">
                  <Link href="https://www.behance.net/ajeeshmon" target="_blank"><svg className=" cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal fill:#4a90e2;">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path d="M71.66667,82.41667c3.58333,0 14.33333,-5.79783 14.33333,-20.13117c0,-22.28475 -19.72983,-26.45217 -41.95367,-26.45217c-4.19967,0 -17.00292,0.00717 -26.12967,0.00358c-5.93758,-0.00358 -10.75,4.81242 -10.75,10.75v78.82975c0,5.93758 4.81242,10.75 10.75,10.75h42.28333c15.83475,0 29.25792,-12.52733 29.38333,-28.36208c0.16842,-21.77233 -17.91667,-25.38792 -17.91667,-25.38792zM28.66667,53.75h25.08333c5.93758,0 10.75,4.81242 10.75,10.75c0,5.93758 -4.81242,10.75 -10.75,10.75h-25.08333zM55.54167,118.25h-26.875v-25.08333h26.875c6.92658,0 12.54167,5.61508 12.54167,12.54167c0,6.92658 -5.61508,12.54167 -12.54167,12.54167zM163.0775,103.91667c2.97058,0 5.375,-2.40442 5.37858,-5.375v0c0,-20.77975 -14.37275,-37.625 -35.83333,-37.625c-19.79075,0 -35.83333,16.84525 -35.83333,37.625c0,20.77975 16.04258,37.625 35.83333,37.625c17.51175,0 27.2405,-8.1915 31.992,-20.22075c0.91733,-2.31842 -0.8815,-4.83033 -3.3755,-4.83033h-8.60358c-1.30792,0 -2.46533,0.74175 -3.14258,1.86333c-3.27517,5.41083 -8.27392,8.85442 -15.00342,8.85442c-10.07633,0 -17.415,-7.65042 -19.2855,-17.91667h38.4205zM132.62275,75.25c7.44258,0 14.65583,5.934 16.69117,14.33333h-33.22825c2.69825,-8.41725 9.08375,-14.33333 16.53708,-14.33333zM148.70833,53.75h-28.66667c-2.967,0 -5.375,-2.408 -5.375,-5.375v0c0,-2.967 2.408,-5.375 5.375,-5.375h28.66667c2.967,0 5.375,2.408 5.375,5.375v0c0,2.967 -2.408,5.375 -5.375,5.375z"></path>
                        </g>
                      </g>
                    </svg></Link>

                  <Link href="https://www.linkedin.com/in/ajeeshmon" target="_blank"><svg className="cursor-pointer w-5 h-5 p-1  rounded-2xl fill:#ffffff; hover:bg-blue-500 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" >
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path d="M51.6,143.33333h-28.66667v-86h28.66667zM37.2724,45.86667c-7.9292,0 -14.33907,-6.42707 -14.33907,-14.33907c0,-7.912 6.42133,-14.3276 14.33907,-14.3276c7.90053,0 14.3276,6.42707 14.3276,14.3276c0,7.912 -6.42707,14.33907 -14.3276,14.33907zM154.8,143.33333h-27.56013v-41.85333c0,-9.98173 -0.1892,-22.81867 -14.3276,-22.81867c-14.35053,0 -16.55787,10.8704 -16.55787,22.09627v42.57573h-27.5544v-86.06307h26.4536v11.75907h0.37267c3.6808,-6.76533 12.6764,-13.8976 26.0924,-13.8976c27.92133,0 33.08133,17.82493 33.08133,40.99907z"></path>
                        </g>
                      </g>
                    </svg></Link>
                  <Link href="https://twitter.com/ajeemon?lang=en" target="_blank"><svg className="  cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-400 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" >
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path d="M155.04367,28.88883c-5.84083,2.75917 -15.781,7.9335 -20.77617,8.9225c-0.1935,0.05017 -0.35117,0.11467 -0.5375,0.16483c-5.8265,-5.74767 -13.81017,-9.3095 -22.64667,-9.3095c-17.80917,0 -32.25,14.44083 -32.25,32.25c0,0.93883 -0.07883,2.666 0,3.58333c-23.06233,0 -39.904,-12.03283 -52.51017,-27.4985c-1.68417,-2.07833 -3.47583,-0.99617 -3.8485,0.48017c-0.8385,3.33967 -1.12517,8.9225 -1.12517,12.90717c0,10.0405 7.8475,19.90183 20.06667,26.015c-2.25033,0.5805 -4.73,0.99617 -7.31,0.99617c-3.03867,0 -6.536,-0.7955 -9.59617,-2.40083c-1.13233,-0.59483 -3.57617,-0.43 -2.85233,2.46533c2.9025,11.60283 16.1465,19.75133 27.97867,22.1235c-2.6875,1.58383 -8.42083,1.26133 -11.05817,1.26133c-0.97467,0 -4.3645,-0.22933 -6.5575,-0.50167c-1.9995,-0.24367 -5.074,0.27233 -2.50117,4.171c5.5255,8.3635 18.02417,13.61667 28.78133,13.81733c-9.90433,7.76867 -26.101,10.60667 -41.61683,10.60667c-3.139,-0.07167 -2.98133,3.5045 -0.4515,4.83033c11.44517,6.00567 30.19317,9.56033 43.58767,9.56033c53.24833,0 83.51317,-40.58483 83.51317,-78.8405c0,-0.61633 -0.01433,-1.90633 -0.03583,-3.2035c0,-0.129 0.03583,-0.25083 0.03583,-0.37983c0,-0.1935 -0.05733,-0.37983 -0.05733,-0.57333c-0.0215,-0.97467 -0.043,-1.88483 -0.0645,-2.35783c4.22117,-3.04583 10.6855,-8.33483 13.9535,-12.384c1.11083,-1.376 0.215,-3.04583 -1.29717,-2.52267c-3.8915,1.3545 -10.621,3.9775 -14.835,4.47917c8.43517,-5.58283 12.60617,-10.44183 16.1895,-15.83833c1.2255,-1.84183 -0.30817,-3.71233 -2.17867,-2.82367z"></path>
                        </g>
                      </g>
                    </svg></Link>
                </div>
              </div>
              <div className="flex pt-2  text-sm text-gray-400">
                <div className="flex-1 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                    </path>
                  </svg>
                  <p className="">1.2k Followers</p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
                  </svg>
                  <p className="">14 Components</p>
                </div>
                <Link href="https://www.behance.net/ajeeshmon" target="_blank" className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">FOLLOW</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
        <div className=" text-gray-400 flex items-center ">
        <svg fill="#30bb35" width="30px" height="30px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" stroke="#30bb35"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1  </style> </defs> <title>upgrade</title> <path d="M21,24H11a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V26A2,2,0,0,0,21,24Zm0,4H11V26H21Z"></path> <path d="M28.707,14.293l-12-12a.9994.9994,0,0,0-1.414,0l-12,12A1,1,0,0,0,4,16H9v4a2.0023,2.0023,0,0,0,2,2H21a2.0027,2.0027,0,0,0,2-2V16h5a1,1,0,0,0,.707-1.707ZM21,14v6H11V14H6.4141L16,4.4141,25.5859,14Z"></path> <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width="32" height="32"></rect> </g></svg>
          <p> Upgrade your account to get access to all features
            components at <Link href="/" className="underline hover:underline-none ml-1 text-green-300" target="_blank">Help Team</Link></p><button type="button" className="ml-auto text-xs  font-medium tracking-wider  text-gray-400 text-gray-400 hover:text-green-400 transition ease-in duration-300"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg> click</button>
        </div>
      </div>
       <div   className='break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl w-[80%] p-4 mb-4 bg-[#5E17F4] text-white'>
     
     <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      Deposit
    </Button>

        <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      Withdraw
    </Button>

        <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      Invesr
    </Button>
        <div   className='flex justify-between items-center'>
            <span>Report Issues</span>
            <button   className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black'>
            <span>Help Me</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
    </div>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 sm:col-span-4">
          <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            <div className="flex justify-between items-center ">
              <img className="w-7 filter grayscale" src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg" alt="taiwind css"/>
            </div>
            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">20</div>
            <div className="text-sm text-gray-500">Components</div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4">
          <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <div className="flex justify-between items-center ">
              <i className="fab fa-behance text-xl text-gray-400"></i>
            </div>
            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">99</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4">
          <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div className="flex justify-between items-center ">
              <i className="fab fa-codepen text-xl text-gray-400"></i>
            </div>
            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">50</div>
            <div className="text-sm text-gray-500">Pen Items</div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">

     
        <div className="flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-gray-600 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <h2 className="text-xl font-bold py-4 text-gray-200">Are you sure?</h2>
                <p className="text-sm text-gray-500 px-8">Do you really want to delete your account?
                  This process cannot be undone</p>
            </div>
            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <button className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
                Cancel
              </button>
              <button className="bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">Confirm</button>
            </div>
          </div>
        </div>
   
        <div className="flex flex-col space-y-4">
  
          <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">

            <div className="flex items-center justify-between">
              <div className="flex items-center mr-auto">

                <div className="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative w-12 h-12 object-cover rounded-2xl"/><span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                  <span></span>
                </div>

                <div className="flex flex-col ml-3">
                  <div className="font-medium leading-none text-gray-100">Aji</div>
                  <p className="text-sm text-gray-500 leading-none mt-1">UI/UX Designer</p>
                </div>
              </div>
              <a href="#" className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg></a>
              <a href="#" className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 ml-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
                </svg></a>
            </div>
          </div>
       
          <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">

            <div className="flex items-center justify-between">
              <div className="flex items-center mr-auto">

                <div className="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl"/><span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                  <span></span>
                </div>

                <div className="flex flex-col ml-3 min-w-0">
                  <div className="font-medium leading-none text-gray-100">Groupname</div>
                  <p className="text-sm text-gray-500 leading-none mt-1 truncate">Beautiful hand-crafted SVG icons</p>
                </div>
              </div>
              <div className="flex flex-col ml-3 min-w-0">
                <span className="text-xs text-gray-500 text-right mb-1">9:02pm</span>
                <div className="flex">
                  <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></a>
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-400 rounded-full ml-2">99</span>
                </div>
              </div>
            </div>
          </div>
       
          <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div className="flex items-center mr-auto">
                <div className="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl"/><span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                  <span></span>
                </div>

                <div className="flex flex-col ml-3 min-w-0">
                  <div className="font-medium leading-none text-gray-100">Ajimon</div>
                  <p className="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                </div>
              </div>
              <div className="flex flex-col ml-3 min-w-0">
                <div className="flex">
                  <h5 className="flex items-center font-medium text-gray-300 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> 1800
                  </h5>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-gray-800 border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center mr-auto">
                <div className="-space-x-5 flex ">
                  <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800" />
                                      <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800 shadow" />
               

                <div className="flex flex-col ml-3 min-w-0">
                  <div className="font-medium leading-none text-gray-100">Pending Request </div>
                  <p className="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                </div>
              </div>
              <div className="flex flex-col ml-3 min-w-0">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
</svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="font-medium leading-none text-gray-100">Delete Your Acccount?</div>
                <p className="text-sm text-gray-500 leading-none mt-1">By deleting your account.</p>
              </div>
            </div>
            <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg></a>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
          <div className="flex">
            <img src="https://images.unsplash.com/photo-1575390730294-dfc5efa5250b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80" alt="Just a flower" className=" w-16  object-fit  h-16 rounded-2xl"/>
            <div className="flex flex-col justify-center w-full px-2 py-1">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col">
                  <h2 className="font-medium leading-none text-gray-100">Massive Dynamic</h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
              </div>
              <div className="flex pt-2  text-sm text-gray-500">
                <div className="flex items-center mr-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <p className="font-normal">4.5</p>
                </div>
                <div className="flex items-center font-medium text-gray-300 ">
                  $1800
                  <span className="text-gray-600 text-sm font-normal"> /wk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="flex flex-col">
          <div className="lg:w-3/5 p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
            <div className="flex-none lg:flex">
              <div className=" h-full w-full lg:h-36 lg:w-36   lg:mb-0 mb-3">
                <img src="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="unsplash images" className=" w-full  object-scale-down lg:object-cover  lg:h-36 rounded-2xl"/>
              </div>
              <div className="flex-auto lg:ml-3 justify-evenly py-2">
                <div className="flex flex-col ">
                  <div className="flex items-center mr-auto text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                      </path>
                    </svg>
                    <p className="font-normal text-gray-500">4.5</p>
                  </div>
                  <div className="flex items-center  justify-between min-w-0">
                    <h2 className="mr-auto   text-base text-gray-100 font-medium truncate">Massive Dynamic</h2>
                    <div className="flex items-center font-medium text-gray-300 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      800
                      <span className="text-gray-500 text-sm font-normal"> /Day</span>
                    </div>
                  </div>
                  <p className="flex items-center text-sm text-gray-400">Fortcochi,Cochin . 7km <span className="relative inline-flex rounded-md shadow-sm ml-2">
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
                    <span>2 Bedroom</span><span>4 Guest</span>

                  </div>
                  <button className="mb-2 md:mb-0 flex-no-shrink bg-green-400 hover:bg-green-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300" type="button" aria-label="like">Book Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 ..."></div>
        </div>
    </div>
   
  </div>
</div>
    </div>
    </div>

  )
}

export default Wallet