"use client"
import React, { useState } from 'react';
import { CardDescription, CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FXMining from './ming page';
export default function Component() {
  const [showFXMining, setShowFXMining] = useState(false);

  const toggleFXMining = () => {
     setShowFXMining(!showFXMining);
  };
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex flex-col gap-1 text-sm">
            <CardDescription>Mining Rate</CardDescription>
            <CardTitle>0.000034 FX per day</CardTitle>
          </div>
          <Button className="ml-auto md:ml-auto" size="sm" variant="outline">
            Withdraw
          </Button>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-4xl font-bold">0.000034</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">FX per day</div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex flex-col gap-1 text-sm">
            <CardDescription>Total Mined</CardDescription>
            <CardTitle>1,234.567 FX</CardTitle>
          </div>
          <Button className="ml-auto md:ml-auto" size="sm" variant="outline"  onClick={toggleFXMining}>
           Mine FX
          </Button>
          {showFXMining && <FXMining />}
        </CardHeader>
        <CardContent className="flex items-center justify-center p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-4xl font-bold">1,234.567</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">FX mined</div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex flex-col gap-1 text-sm">
            <CardDescription>Mining Difficulty</CardDescription>
            <CardTitle>1.2345</CardTitle>
          </div>
          <Button className="ml-auto md:ml-auto" size="sm" variant="outline">
            History
          </Button>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-4xl font-bold">1.2345</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Mining difficulty</div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex flex-col gap-1 text-sm">
            <CardDescription>My Hashrate</CardDescription>
            <CardTitle>123 MH/s</CardTitle>
          </div>
          <Button className="ml-auto md:ml-auto" size="sm" variant="outline">
            History
          </Button>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-4xl font-bold">123</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">My hashrate (MH/s)</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex flex-col gap-1 text-sm">
            <CardDescription>Next Halving</CardDescription>
            <CardTitle>in 123 days</CardTitle>
          </div>
          <Button className="ml-auto md:ml-auto" size="sm" variant="outline">
            Notify me
          </Button>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-4xl font-bold">in 123 days</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Next halving</div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex flex-col gap-1 text-sm">
            <CardDescription>My Hashrate</CardDescription>
            <CardTitle>123 MH/s</CardTitle>
          </div>
          <Button className="ml-auto md:ml-auto" size="sm" variant="outline">
            History
          </Button>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-4xl font-bold">123</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">My hashrate (MH/s)</div>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>How to start mining FX COIN</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-base">
            <div>
              <CardDescription>1. Get a mining rig</CardDescription>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You&APOS;ll need a computer specifically designed for mining cryptocurrency.
              </p>
            </div>
            <div>
              <CardDescription>2. Choose a mining pool</CardDescription>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Join a mining pool to combine your computing power with other miners and increase your chances of
                successfully mining FX COIN.
              </p>
            </div>
            <div>
              <CardDescription>3. Download mining software</CardDescription>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                There are various mining programs available for download, depending on your operating system and the
                type of hardware you&APOS;re using.
              </p>
            </div>
            <div>
              <CardDescription>4. Start mining</CardDescription>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Once you&APOS;ve set up your mining rig and connected to a mining pool, you can start the mining software and
                begin generating FX COIN.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Benefits of mining FX COIN</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-sm">
            <div className="flex items-start gap-4">
              <CheckIcon className="h-6 w-6 text-2xl text-blue-500" />
              <div>
                <CardDescription>Passive income</CardDescription>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mining FX COIN can provide you with a steady stream of income without the need for constant monitoring
                  or active participation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon className="h-6 w-6 text-2xl text-blue-500" />
              <div>
                <CardDescription>Support the network</CardDescription>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By participating in the mining process, you&APOS;re helping to secure the FX COIN network and validate
                  transactions, which is essential for the cryptocurrency&APOS;s decentralization and security.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon className="h-6 w-6 text-2xl text-blue-500" />
              <div>
                <CardDescription>Earn rewards</CardDescription>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Miners are rewarded with newly minted FX COIN as well as transaction fees for adding new blocks to the
                  blockchain.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}