
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function AllWithdrawalTalble() {
  return (
    <div className="bg-black text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 max-w-3xl mx-auto items-center justify-center">
          <img
            alt="BinanceFX Investors"
            className="aspect-[3/1] overflow-hidden rounded-lg object-cover"
            height="400"
            src="/placeholder.svg"
            width="1200"
          />
          <div className="grid gap-1">
            <h1 className="text-blue-500 font-bold tracking-tight">BinanceFX Investors</h1>
            <p className="text-gray-500 dark:text-gray-400">
              List of Investors in BinanceFX: Manage your Investments with Ease
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border">
            <div className="flex gap-2 items-center bg-[#0d1117] p-4">
            <svg
            className="h-4 w-4 fill-gray-500 dark:fill-gray-400 shrink-0"
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
              <Input
                className="flex-1 min-w-[200px] text-gray-500 dark:text-gray-400"
                placeholder="Search Investors"
                type="search"
              />
              <Button size="sm">Search</Button>
            </div>
            <div className="grid gap-2 p-4">
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                <svg
className="w-4 h-4 fill-current" 
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
                  <Label className="unstyled" htmlFor="investment">
                    Total Investment
                  </Label>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <div className="w-full max-w-[200px] text-center" />
                  <span className="mx-2">to</span>
                  <div className="w-full max-w-[200px] text-center" />
                </div>
              </div>
              <Slider id="investment" max={100000} min={0} step={1000} />
            </div>
            <div className="flex items-center justify-end gap-2 border-t p-4">
              <Button className="shrink-0" variant="outline">
                Reset
              </Button>
              <Button>Apply Filters</Button>
            </div>
          </div>
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Investor</TableHead>
                  <TableHead className="w-[150px]">Total Investment</TableHead>
                  <TableHead className="w-[150px]">Date of Investment</TableHead>
                  <TableHead className="w-[150px]">Level</TableHead>
                  <TableHead className="w-[150px]">Tier</TableHead>
                  <TableHead className="w-[150px]">Coin</TableHead>
                  <TableHead className="w-[150px]">Image</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>$10,000</TableCell>
                  <TableCell>2023-05-16</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Gold</TableCell>
                  <TableCell>Bitcoin</TableCell>
                  <TableCell>
                    <img
                      alt="Investor Image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Alice Johnson</TableCell>
                  <TableCell>$25,000</TableCell>
                  <TableCell>2023-03-29</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>Ethereum</TableCell>
                  <TableCell>
                    <img
                      alt="Investor Image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bob Smith</TableCell>
                  <TableCell>$50,000</TableCell>
                  <TableCell>2023-06-10</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>Platinum</TableCell>
                  <TableCell>Litecoin</TableCell>
                  <TableCell>
                    <img
                      alt="Investor Image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Emma Brown</TableCell>
                  <TableCell>$15,000</TableCell>
                  <TableCell>2023-04-22</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Gold</TableCell>
                  <TableCell>Ripple</TableCell>
                  <TableCell>
                    <img
                      alt="Investor Image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">William Lee</TableCell>
                  <TableCell>$35,000</TableCell>
                  <TableCell>2023-07-01</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>Cardano</TableCell>
                  <TableCell>
                    <img
                      alt="Investor Image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
