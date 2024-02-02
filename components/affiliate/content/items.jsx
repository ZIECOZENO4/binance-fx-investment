import React from 'react'
import { AiFillDashboard } from "react-icons/ai";
function Items({icon, name}) {
  return (
    <div className=' flex py-[6px] px-[10px]  items-center'>
<div className='mr-[0.5rem] font-bold text-[3xl] '>
{icon}
</div>
<span>
{name}
</span>
    </div>
  )
}

export default Items
