

export function MyActivities() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <div className="text-white">
        <div className="py-4 px-6 border-b border-gray-700 flex items-center justify-between">
          <ArrowLeftIcon className="text-gray-400" />
          <h1 className="text-lg font-semibold">My Activities</h1>
          <SettingsIcon className="text-gray-400" />
        </div>
        <div className="divide-y divide-gray-700">
          <div className="p-4 flex items-start space-x-4">
            <MessageCircleIcon className="text-yellow-400 mt-1" />
            <div>
              <h2 className="text-sm font-semibold">Login attempted from new IP</h2>
              <p className="text-xs text-gray-400">
                The system has detected that your account is logged in from an unused IP address. Account...
              </p>
              <p className="text-xs text-gray-500 mt-1">03-22 13:54:48</p>
            </div>
          </div>
          <div className="p-4 flex items-start space-x-4">
            <MessageCircleIcon className="text-yellow-400 mt-1" />
            <div>
              <h2 className="text-sm font-semibold">Binance to Discontinue All Nigerian Naira...</h2>
              <p className="text-xs text-gray-400">
                Binance will discontinue all Nigerian Naira (NGN) services as per the timeline below. User...
              </p>
              <p className="text-xs text-gray-500 mt-1">03-05 15:14:55</p>
            </div>
          </div>
          <div className="p-4 flex items-start space-x-4">
            <MessageCircleIcon className="text-yellow-400 mt-1" />
            <div>
              <h2 className="text-sm font-semibold">Login attempted from new IP</h2>
              <p className="text-xs text-gray-400">
                The system has detected that your account is logged in from an unused IP address. Account...
              </p>
              <p className="text-xs text-gray-500 mt-1">02-22 21:39:58</p>
            </div>
          </div>
          <div className="p-4 flex items-start space-x-4">
            <MessageCircleIcon className="text-yellow-400 mt-1" />
            <div>
              <h2 className="text-sm font-semibold">Login attempted from new IP</h2>
              <p className="text-xs text-gray-400">
                The system has detected that your account is logged in from an unused IP address. Account...
              </p>
              <p className="text-xs text-gray-500 mt-1">01-26 21:15:08</p>
            </div>
          </div>
          <div className="p-4 flex items-start space-x-4">
            <MessageCircleIcon className="text-yellow-400 mt-1" />
            <div>
              <h2 className="text-sm font-semibold">Login attempted from new IP</h2>
              <p className="text-xs text-gray-400">
                The system has detected that your account is logged in from an unused IP address. Account...
              </p>
              <p className="text-xs text-gray-500 mt-1">01-02 16:14:12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}
