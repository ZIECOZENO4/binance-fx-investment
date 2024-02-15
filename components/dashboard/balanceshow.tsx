import React from 'react'

const BalanceShow = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-600 to-sky-200 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 md:px-3 px-10">
      <div className="div">
      <div className=" flex flex-row justify-between gap-5 md:gap-10">
        <p className=" font-bold md:text-2xl text-xl sm:text-md font-sono gap-3">ACCOUNT BALANCE</p>
        {/* <svg width="40px" height="40px" viewBox="0 0 1024 1024" className="icon items-end flex justify-end" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-938.7C276.7 85.3 85.3 276.7 85.3 512S276.7 938.7 512 938.7 938.7 747.3 938.7 512 747.3 85.3 512 85.3z" fill="#3688FF"></path><path d="M469.3 704c-10.9 0-21.8-4.2-30.2-12.5-16.7-16.7-16.7-43.7 0-60.3L558.3 512 439.2 392.8c-16.7-16.7-16.7-43.7 0-60.3 16.7-16.7 43.7-16.7 60.3 0l149.3 149.3c16.7 16.7 16.7 43.7 0 60.3L499.5 691.5c-8.3 8.3-19.3 12.5-30.2 12.5z" fill="#5F6379"></path></g></svg> */}
        </div>
    
        <p className=" font-bold  md:text-xl text-md font-sono gap-3">$ 0.000</p>

      </div>
   
       <div className="div">
        <div className=" flex flex-row justify-between gap-8">
        <p className=" font-bold md:text-2xl sm:text-md text-xl font-sono gap-3">INVESTMENT BALANCE</p>
        {/* <svg width="40px" height="40px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-938.7C276.7 85.3 85.3 276.7 85.3 512S276.7 938.7 512 938.7 938.7 747.3 938.7 512 747.3 85.3 512 85.3z" fill="#3688FF"></path><path d="M469.3 704c-10.9 0-21.8-4.2-30.2-12.5-16.7-16.7-16.7-43.7 0-60.3L558.3 512 439.2 392.8c-16.7-16.7-16.7-43.7 0-60.3 16.7-16.7 43.7-16.7 60.3 0l149.3 149.3c16.7 16.7 16.7 43.7 0 60.3L499.5 691.5c-8.3 8.3-19.3 12.5-30.2 12.5z" fill="#5F6379"></path></g></svg> */}
        </div>
    
        <p className=" font-bold  text-md md:text-xl font-sono gap-3"> 0.000 ETH</p>
       </div>
    </div>
  )
}

export default BalanceShow