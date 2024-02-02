import React from 'react'

function AccoutDropdown() {
  return (

<div className="flex items-center justify-center  bg-gray-100">
    <div
      className="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200"
    >

      <div aria-label="navigation" className="">
        <nav className="grid gap-1">
          <a
            href="/"
            className="flex items-center leading-6 gap-3 py-3 px-2 w-full text-sm text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            <span>Account Settings</span>
          </a>
          <a
            href="/"
            className="flex items-center leading-6 gap-3 py-1 px-2 w-full text-sm text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"
              ></path>
              <path d="M4 20l3.5 -3.5"></path>
              <path d="M15 4l-3.5 3.5"></path>
              <path d="M20 9l-3.5 3.5"></path>
            </svg>
            <span>Deposits</span>
          </a>
          <a
            href="/"
            className="flex items-center leading-6 gap-3 py-1 px-2 w-full text-sm text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
              ></path>
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            </svg>
            <span>Withdrawal</span>
          </a>
          <a
            href="/"
            className="flex items-center leading-6 gap-3 py-1 px-2 w-full text-sm text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path
                d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
              ></path>
              <path d="M9 17h6"></path>
              <path d="M9 13h6"></path>
            </svg>
            <span>Bet History</span>
          </a>
          <a
            href="/"
            className="flex items-center leading-6 gap-1 py-2 px-2 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
              ></path>
              <path d="M12 16v.01"></path>
              <path
                d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
              ></path>
            </svg>
            <span className=' text-sm'>Helper Center</span>
          </a>
        </nav>
      </div>
      <div aria-label="account-upgrade" className="px-2 py-2">
        <div className="flex items-center gap-2">
          <div className="mr-auto space-y-2">
            <p className="font-medium text-sm text-gray-900 leading-none">
              Beta Pro
            </p>
            <p className="font-normal text-sm text-gray-500 leading-none">
              10 Free Odds Per Day
            </p>
          </div>
          <button
            type="button"
            className="inline-flex px-6 leading-2 py-2 rounded-md bg-indigo-50 hover:bg-green-500 transition-colors duration-200 text-indigo-500 font-medium text-sn"
          >
            Upgrade
          </button>
        </div>
      </div>
      <div aria-label="footer" className="pt-2">
        <button
          type="button"
          className="flex items-center gap-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-red-600 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-5 h-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
            ></path>
            <path d="M9 12h12l-3 -3"></path>
            <path d="M18 15l3 -3"></path>
          </svg>
          <span className=''>Logout</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default AccoutDropdown