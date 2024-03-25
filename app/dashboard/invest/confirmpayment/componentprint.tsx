
import { Button } from "@/components/ui/button"
interface ConfirmationPrintProps {
  plan: string;
  planId: string;
  amount: number;
  coin: string;
 }
 const ComponentPrint: React.FC<ConfirmationPrintProps> = ({ plan, planId, amount, coin}) => {
   const componentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-black text-white p-4"  ref={componentRef}>
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
      <svg
 className="text-gray-600"
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
        <h1 className="text-lg font-semibold text-blue-600">Payment Receipt</h1>
        <div
          style={{
            width: 24,
          }}
        />
      </div>
      <div className="bg-[#1A1A1B] text-white p-4 my-4 rounded-lg">
        <div className="text-3xl font-semibold">{amount} {coin}</div>
        <div className="text-lg">{plan}</div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">From</span>
          <span>My Bitcoin Wallet</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">To</span>
          <span>Binance FX Investment</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Investment Plan ID</span>
          <span className="text-blue-600">{planId}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount</span>
          <span>{amount} {coin}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Fee</span>
          <span>'0.665556 USDT</span>
        </div>
      </div>
      <Button className="w-full mt-6 bg-blue-600 text-white">Approved</Button>
    </div>
  )
}
export default ComponentPrint;