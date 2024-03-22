
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ReferralWithdraw() {
  return (
    <div className="bg-[#1a1a2e] min-h-screen text-white">
      <div className="py-4 px-6">
        <div className="flex items-center justify-between">
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
      <path d="m15 18-6-6 6-6" />
    </svg>
          <h1 className="text-xl font-semibold text-blue-500">Withdrawal from User Name</h1>
          <Button className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
            Withdraw record
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
      <path d="m9 18 6-6-6-6" />
    </svg>
          </Button>
        </div>
        <div className="mt-4 bg-gradient-to-r from-[#654ea3] to-[#eaafc8] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm">AvailableUSDT</span>
            <span className="text-2xl font-bold">0</span>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2 text-blue-500">Select withdrawal channel</h2>
          <div className="grid grid-cols-2 gap-2">
            <Button className="bg-[#33334d] text-white">USDT TRC20 TRON</Button>
            <Button className="bg-[#33334d] text-white">USDT ERC20 ETHEREUM</Button>
            <Button className="bg-[#33334d] text-white">USDC ERC20 ETHEREUM</Button>
            <Button className="bg-[#33334d] text-white">ETH ETHEREUM</Button>
            <Button className="bg-[#33334d] text-white">RS UPI - CTOP</Button>
            <Button className="bg-[#33334d] text-white">RS UPI - SUN</Button>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-lg font-semibold mb-2 text-blue-500" htmlFor="withdraw-address">
            Withdraw Address
          </label>
          <Input className="mb-4" id="withdraw-address" placeholder="Enter Withdraw Address" />
        </div>
        <div className="mt-4">
          <label className="block text-lg font-semibold mb-2 text-blue-500" htmlFor="withdraw-quantity">
            Withdrawal Quantity
          </label>
          <Input className="mb-4" id="withdraw-quantity" placeholder="Minimum withdraw 100" />
          <div className="flex justify-between items-center">
            <span className="text-sm">Receive Amount</span>
            <span className="text-lg font-bold">0 USDT</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm">Fee:</span>
            <span className="text-lg font-bold">0 USDT</span>
          </div>
        </div>
        <div className="mt-6">
          <Button className="w-full bg-[#4e0d3a]">Submit</Button>
        </div>
      </div>
    </div>
  )
}





