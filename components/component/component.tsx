
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function Withdrawal() {
  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4">
          <h2 className="text-xl font-semibold mb-4">Locked Staking</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="type">
              Type
            </label>
            <Input id="type" placeholder="Locked" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Duration</label>
            <div className="flex gap-2">
              <Button className="flex-1">30Days</Button>
              <Button className="flex-1">35Days</Button>
              <Button className="flex-1 bg-[#f2f2f2] text-black">60Days</Button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="lock-amount">
              Lock Amount
            </label>
            <div className="flex">
              <Input className="flex-1" id="lock-amount" placeholder="Please enter the amount" />
              <Button className="ml-2">Max</Button>
            </div>
            <p className="text-sm text-red-500 mt-1">Please enter a valid amount.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1">Locked Amount Limitation</h3>
            <p className="text-sm">Minimum: 0.001 MATIC</p>
            <p className="text-sm">Maximum: 150 MATIC</p>
            <p className="text-sm">Total Personal Quota: 150 MATIC</p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-sm">Stake Date</span>
                <span className="text-sm font-medium">2022-04-26 11:52</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Value Date</span>
                <span className="text-sm font-medium">2022-04-27 08:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Interest Period</span>
                <span className="text-sm font-medium">1 Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Interest End Date</span>
                <span className="text-sm font-medium">2022-07-26 08:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Redemption Period</span>
                <span className="text-sm font-medium">1 Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Redemption Date</span>
                <span className="text-sm font-medium">2022-07-28 18:00</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-sm">Est. APY</span>
                <span className="text-sm font-medium">21.54%</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm">Estimated Interests</p>
              <p className="text-sm text-yellow-600 bg-yellow-100 p-2 rounded">
                The APY is adjusted daily based on the on-chain staking rewards, and the specific APY is subject to the
                page display on the day.
              </p>
            </div>
            <div className="flex items-center mb-4">
              <Checkbox id="terms" />
              <label className="text-sm ml-2" htmlFor="terms">
                I have read and I agree to{""}
                <a className="text-blue-600" href="#">
                  Binance Staking Service Agreement
                </a>
              </label>
            </div>
            <Button className="w-full">Confirm</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
