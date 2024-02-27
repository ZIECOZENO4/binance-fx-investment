import React from 'react'

const LogoutDrop = () => {
  return (
    <div className=''>

    <div className="main flex flex-col m-2">
    
    
      <a href="https://www.w3schools.com/js/" target="_new">
        <div className="each flex hover:shadow-lg select-none p-4 rounded-md border-gray-300 border mb-2 hover:border-gray-500 cursor-pointer">
        <div className="left m-auto mr-2">
            
            <div className="icon">
            <svg width="30px" height="30px" className="p-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H4v12h9v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm15.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H9a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z" fill="#1821a5"></path></g></svg>
            </div>
          </div>
          <div className="left">
            <div className="header text-sky-600 font-bold text-xl">LOG OUT</div>
            <div className="desc text-white"> Are you sure you want to log out</div>
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

export default LogoutDrop