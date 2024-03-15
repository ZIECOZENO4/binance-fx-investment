
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Note() {
  return (
    <Card className="bg-black rounded-lg">
      <CardHeader className="bg-blue-500 rounded-t-lg">
        <CardTitle>Payment outside BinanceFX</CardTitle>
        <CardDescription  className="text-white " >Please provide your payment details below.</CardDescription>
      </CardHeader>
    </Card>
  )
}
