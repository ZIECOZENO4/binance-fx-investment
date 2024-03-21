import React from "react";
export function NewAssets() {
  return (
    <div className="bg-[#121212] p-4 rounded-lg max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between bg-[#1F1F1F] p-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="bg-[#F7931A] p-2 rounded-full">
            <svg
   className="text-white"
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
            </div>
            <div>
              <div className="text-white font-semibold">BTC</div>
              <div className="text-[#8A8A8E]">24H 3778.54</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-semibold">67604.83</div>
            <div className="text-[#00FC2A]">+6.28%</div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#1F1F1F] p-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="bg-[#3C3C3D] p-2 rounded-full">
            <svg
   className="text-[#8A8A8E]"
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
            </div>
            <div>
              <div className="text-white font-semibold">ETH</div>
              <div className="text-[#8A8A8E]">24H 20885.19</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-semibold">3545.07</div>
            <div className="text-[#00FC2A]">+7.72%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
