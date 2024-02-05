import React from 'react'
import Link from 'next/link';
const Register = () => {
  return (
    <div className=' w-[100vw] mx-[10vw] md:py-20 py-5  text-white flex flex-row'>
      <div className=" w-[50vw] flex flex-col">
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">OVER</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">4,500</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">INVESTORS</p>
      <p className="text-[35px] md:text-[70px] font-bold gap-3 text-[#FFD700] ">TRUST US</p>
      <div className=" flex flex-row justify-between md:justify-start gap-8  ">
      <Link href="/sign-up">
 <button className='rounded-3xl font-bold justify-center align-middle text-2xl border-spacing-8 space-x-8 border-b-large border-blue-200 bg-green-600 ml-8'>
    <p className='p-3'>SIGN UP</p>
 </button>
</Link>
<Link href="/sign-in">
 <button className='rounded-3xl font-bold justify-center px-8 align-middle text-2xl border-spacing-8 space-x-8 border-b-large border-blue-200 bg-[#FFD700]'>
    <p className='p-3 text-black'>SIGN IN</p>
 </button>
</Link>
      </div>
   
      </div>
      <div className="w-[50vw] flex flex-col gap-8 rounded-2xl p-10 bg-slate-600 justify-center">
        <p className=" text-white text-3xl font-bold font-serif p-2 justify-center flex align-top ">TOP NEWS</p>
        <div className="">
          
        </div>
        <div className="div">

</div>
      </div>
    </div>

)
}

export default Register