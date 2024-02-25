import Link from "next/link";
import './globals.css'

export default function NotFound () {
    return (
        <div>
<div className="w-full h-screen flex flex-col md:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-4xl md:text-[4rem] lg:text-[5rem] font-bold tracking-wider text-gray-300">404</p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-gray-300 mt-2">Page Not Found</p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12 sm:mx-2">Sorry,Beta Sporting couldn&apos;t find or load the page you are expecting, kindly contact us if it persists.</p>
        <Link href="/" className="flex items-center space-x-2 mb-2 md:mb-4  bg-green-600 hover:bg-green-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
            <span>Return Home</span>
        </Link>        
        <Link href="#" className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>
            <span>Contact Us</span>
        </Link>
    </div>
    <div className="hidden md:w-1/2 md:h-full md:flex md:items-end md:justify-center md:p-4 ">
       <img src='/images/notfound.png' alt="not found" className=" h-[90%] w-auto"/>
    </div>
</div>
        </div>
    )
}