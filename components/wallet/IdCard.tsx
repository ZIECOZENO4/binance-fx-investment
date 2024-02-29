"use client"
import React from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
const IdCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ID Card Application</CardTitle>
        <CardDescription>Enter your information to apply for an ID card</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Lee" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of birth</Label>
          <Input id="dob" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" placeholder="Enter your address" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="id-number">ID Card Number</Label>
          <Input id="id-number" placeholder="Enter your ID card number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="info">Additional Information</Label>
          <Textarea id="info" placeholder="Enter additional information" />
        </div>
        <div className="space-y-2">
          <Label>Front Photo</Label>
          <div>
            <div />
            <div />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Back Photo</Label>
          <div>
            <div />
            <div />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Submit</Button>
      </CardFooter>
    </Card>
  )
}
export default IdCard