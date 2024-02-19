import Fast from '@/components/invest/fast'
import Invest from '@/components/invest/invest'
import React from 'react'

const InvdestPage = () => {
  return (
    <div>
      <Invest />
      <div className="  flex items-end justify-end align-top absolute top-[6vh] md:top-[12vh] ">
        <Fast />
      </div>
    </div>
  )
}

export default InvdestPage