"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"

export default function FXMining() {
  return (
    <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
      <div className="flex flex-col">
      
        <main className="grid gap-4 p-4 md:gap-8 md:p-6">
          <Card>
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="grid gap-1">
                <CardTitle className="text-base font-semibold md:text-xl">FX COIN Mining</CardTitle>
                <CardDescription>View the current FX COIN mining performance and history.</CardDescription>
              </div>
              <Button className="ml-auto w-full md:w-auto" size="sm">
                Start Mining
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium w-20">Mining Reward</div>
                  <div className="font-semibold">2.5 FXC</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium w-20">Difficulty</div>
                  <div className="font-semibold">1.2M</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium w-20">Pool</div>
                  <div className="font-semibold">Binance Pool</div>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Mining Pools</div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-4">
                    <div className="font-semibold">Binance Pool</div>
                    <div className="ml-auto">20.5%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-semibold">FXC Pool</div>
                    <div className="ml-auto">30.5%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-semibold">Coinbase Pool</div>
                    <div className="ml-auto">49%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-center p-12">
              <BarChart className="w-full max-w-sm aspect-square" />
            </CardContent>
          </Card>
        </main>
      </div>
      <div className="hidden border-l lg:block">
        <div className="grid gap-2 p-4">
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium w-20">Mining Reward</div>
            <div className="font-semibold">2.5 FXC</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium w-20">Difficulty</div>
            <div className="font-semibold">1.2M</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium w-20">Pool</div>
            <div className="font-semibold">Binance Pool</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => {id}}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}