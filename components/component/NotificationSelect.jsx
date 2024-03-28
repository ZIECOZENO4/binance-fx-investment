
export function NotificationSelect() {
  return (
    <div className="bg-[#121212] h-[90vh] w-[100vw] overflow-hidden m-0 p-0">
      <div className="flex items-center p-4">
        <ArrowLeftIcon className="text-white" />
        <h1 className="flex-1 text-center text-lg font-bold text-white">Messages</h1>
        <ArrowDownIcon className="text-white" />
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between bg-[#1f1f1f] p-4">
          <div className="flex items-center space-x-4">
            <BadgeAlertIcon className="text-[#f0b90b]" />
            <div>
              <p className="text-sm font-medium text-white">Announcement</p>
              <p className="text-xs text-gray-400">Notice on New Trading Pairs & Trading Rules</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">11:13</p>
        </div>
        <div className="flex items-center justify-between bg-[#1f1f1f] p-4">
          <div className="flex items-center space-x-4">
            <CommandIcon className="text-[#f0b90b]" />
            <div>
              <p className="text-sm font-medium text-white">Adverts</p>
              <p className="text-xs text-gray-400">Binance FX Halving Horizons 2024</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">03/08</p>
        </div>
        <div className="flex items-center justify-between bg-[#1f1f1f] p-4">
          <div className="flex items-center space-x-4">
            <MessagesSquareIcon className="text-[#f0b90b]" />
            <div>
              <p className="text-sm font-medium text-white">My Activities</p>
              <p className="text-xs text-gray-400">Login attempted from new IP</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">03/22</p>
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


function ArrowDownIcon(props) {
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
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}


function BadgeAlertIcon(props) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}


function CommandIcon(props) {
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
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  )
}


function MessagesSquareIcon(props) {
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
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>
  )
}
