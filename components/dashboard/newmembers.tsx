

const NewMembers = () => {
    return (
       <div 
         className='w-full gap-8 flex md:flex-row flex-col justify-between py-8 items-center'
       >
         <div className=" w-[50%] flex bg-no-repeat h-auto bg-cover md:mt-5  px-8 bg-track align-middle items-start justify-start ml-3">
           <div className="flex flex-col justify-start py-6  items-start text-[#FFD700]  font-bold font-sono text-xl leading-8 gap-4">
             <div className=" text-2xl font-sono border-spacing-3 bg-green-600 rounded-md leading-8 gap-6 py-1 space-6 space-x-6 text-white">Track</div>
             <p>Track Your <br /> Investments with <br /> Ease</p>
             <button className=" text-md font-sono   rounded-3xl leading-8 gap-6 py-1 underline text-black">View Performance </button>
           </div>
         </div>
         <div className=" w-[50%] flex flex-col align-middle items-end justify-end mr-3">
<p  className="flex  justify-start   items-start text-white font-bold font-sono text-2xl leading-8 gap-4">New to Binance FX ?</p>
<p className=" text-md text-white flex items-start  justify-start font-thin  leading-8 gap-6 py-1 ">Here is how to start investinging.</p>
<div className="flex align-middle justify-between items-center flex-row bg-green-600 rounded-2xl p-2 w-full ">
<img src='/images/bf.png' alt='' className=" w-32 h-32 object-cover align-middle items-center"/>
<div className="flex align-middle justify-start items-start flex-col">
<p  className="flex  justify-start   items-start text-white font-bold font-sono text-md leading-8 gap-4">Fund your Wallet</p>
<p className=" flex  justify-start   items-start text-white font-bold font-sono text-md leading-8 gap-4 ">Click on the Deposit.</p>
<p className=" flex  justify-start   items-start text-white font-bold font-sono text-md leading-8 gap-4">Choose Investment.</p>
<p className=" flex  justify-start   items-start text-white font-bold font-sono text-md leading-8 gap-4 ">Buy assets.</p>
<p className="flex  justify-start   items-start text-white font-bold font-sono text-md leading-8 gap-4 ">Take Profit.</p>
<button className=" text-md flex  justify-center text-black space-x-4 w-full bg-slate-100 align-middle items-center font-sono font-bold   leading-8 gap-6 py-2 rounded-md pt-3 ">GET STARTED</button>
</div>
</div>
         </div>
       </div>
    )
   }
   
   export default NewMembers
