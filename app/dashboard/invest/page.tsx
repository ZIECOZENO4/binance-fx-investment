import Fast from '@/components/invest/fast'
import Invest from '@/components/invest/invest'
import React from 'react'

const InvdestPage = () => {
  return (
    <div>
      <Invest />
      <div className=" fixed sticky flex items-end justify-end align-top absolute top-4 ">
        <Fast />
      </div>
    </div>
  )
}

export default InvdestPage