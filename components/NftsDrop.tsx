import React from 'react'

const NftsDrop = () => {
  return (
    <div className=''>

    <div className="main flex flex-col m-5">
    
    
      <a href="https://www.w3schools.com/js/" target="_new">
        <div className="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
        <div className="left m-auto mr-2">
            
            <div className="icon">

            </div>
          </div>
          <div className="left">
            <div className="header text-sky-600 font-bold text-xl">NFT</div>
            <div className="desc text-white"> Get your NFTs at a very low price</div>
          </div>
          <div className="right m-auto mr-0">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    
        </div>
  )
}

export default NftsDrop