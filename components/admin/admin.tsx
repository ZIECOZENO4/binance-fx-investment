"use client"
import { CardTitle, CardHeader, CardContent, Card } from "../../components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table"
import { Button } from "../../components/ui/button"

export default function Admin() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl  text-gray-800 dark:text-gray-300 flex justify-center align-middle items-center py-3 font-extrabold">User Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead>User ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Coins</TableHead>
              <TableHead>Investment</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Time of payment</TableHead>
              <TableHead>Confirmed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-gray-200 dark:bg-gray-700">
              <TableCell>1234567890</TableCell>
              <TableCell>john_doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>0.0000 USDT</TableCell>
              <TableCell>0.0000 BTC</TableCell>
              <TableCell>0.0000 USDT</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>0.0000 USDT</TableCell>
              <TableCell>2022-01-01 12:00:00</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button className="bg-green-500 text-white dark:bg-green-600" size="sm">
                    Confirmed
                  </Button>
                  <Button className="bg-red-500 text-white dark:bg-red-600" size="sm">
                    False
                  </Button>
                  <Button className="bg-yellow-500 text-white dark:bg-yellow-600" size="sm">
                    Pending
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="bg-gray-300 dark:bg-gray-600">
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
            </TableRow>
            <TableRow className="bg-gray-300 dark:bg-gray-600">
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
            </TableRow>
            <TableRow className="bg-gray-300 dark:bg-gray-600">
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
            </TableRow>
            <TableRow className="bg-gray-300 dark:bg-gray-600">
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
              <TableCell>null</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

