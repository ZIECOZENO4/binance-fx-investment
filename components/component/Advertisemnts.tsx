
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Advertisemnts() {
  return (
    <div className="bg-[#17181B] min-h-screen text-white">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold">Advertisemnts</h1>
      </div>
      <div className="mx-4 my-2 rounded-lg bg-[#323546] p-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#F0B90B]">HALVING HORIZONS</h2>
            <p className="text-xs">GET READY FOR BITCOIN HALVING AND SHARE $500,000 IN PRIZES!</p>
          </div>
          <img
            alt="Bitcoin"
            className="h-12 w-12"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-bold">Binance Halving Horizons 2024</h3>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-xs">JOIN THE BTC PRICE PREDICTIONS & TESLA CHALLENGES</p>
              <p className="mt-1 text-xs">Seize Your Chance to Win BTC and a Brand New Tesla!</p>
            </div>
            <Button className="bg-[#F0B90B] text-black" variant="default">
              Join Now
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-4 my-2 rounded-lg bg-[#323546] p-4">
        <h3 className="text-sm font-bold">
          Futures Ultimate Challenge: Join the Daily BTC Price Prediction & Weekly Tesla Challenge to Win a Tesla Model
          Y and Share 1.4 BTC!
        </h3>
      </div>
      <div className="mx-4 my-2 rounded-lg bg-[#323546] p-4">
        <div className="flex items-center justify-between">
          <div>
            <Badge className="text-xs" variant="secondary">
              Theme: Bitcoin NFTs
            </Badge>
            <h3 className="mt-2 text-sm font-bold">SOLVE PUZZLES TO UNLOCK PRIZES</h3>
          </div>
          <div className="flex items-center space-x-2">
          <svg
 className="h-6 w-6 text-[#F0B90B]" 
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
    <svg
 className="h-6 w-6 text-[#F0B90B]"
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs">
            Word of the Day Bitcoin Halving Special: Test Your Knowledge on Bitcoin NFTs to Earn Binance Points and
            More!
          </p>
        </div>
      </div>
    </div>
  )
}
