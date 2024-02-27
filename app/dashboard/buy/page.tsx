import React from 'react'

const Page = () => {
  return (
    <div>

<div className="relative isolate overflow-x-hidden h-[100vh] bg-black">


  <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">

    
      <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">FX coin</h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">Not yet available, go to mining page to mine your FX coin</p>
      <div className="mt-10 flex items-center gap-x-6">
        <a href="/dashboard/fx-mining" className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Mine now</a>
        <a href="#" className="text-sm font-semibold leading-6 text-white">Keep waiting <span aria-hidden="true">→</span></a>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default Page