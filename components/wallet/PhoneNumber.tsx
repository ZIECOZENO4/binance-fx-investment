import React from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
const PhoneNumber = () => {
  return (

    <Card>
      <CardHeader>
        <CardTitle>Phone Number Application</CardTitle>
        <CardDescription>Enter your information to apply for a phone number</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" placeholder="Enter your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" placeholder="Enter your address" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input id="age" placeholder="Enter your age" required type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input id="phone-number" placeholder="Enter your phone number" required type="tel" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Submit</Button>
      </CardFooter>
    </Card>
  )
}

export default PhoneNumber