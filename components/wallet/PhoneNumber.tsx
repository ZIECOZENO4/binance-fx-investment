"use client"

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

export default function PhoneNumber() {
  return (
    <Card className="w-full h-auto overflow-y-auto">
      <CardHeader>
        <CardTitle>Application Form</CardTitle>
        <CardDescription>Please fill in the form with your accurate information.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" required type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nationality">Nationality</Label>
            <Input id="nationality" placeholder="Enter your nationality" required />
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <div className="space-x-4">
              <Label className="flex items-center space-x-2" htmlFor="gender-male">
                <Input id="gender-male" name="gender" required type="radio" value="male" />
                Male
              </Label>
              <Label className="flex items-center space-x-2" htmlFor="gender-female">
                <Input id="gender-female" name="gender" required type="radio" value="female" />
                Female
              </Label>
              <Label className="flex items-center space-x-2" htmlFor="gender-other">
                <Input id="gender-other" name="gender" required type="radio" value="other" />
                Other
              </Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" required type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Street Address</Label>
            <Input id="address" placeholder="Enter your street address" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter your city" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State/Province</Label>
            <Input id="state" placeholder="Enter your state/province" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">Postal/ZIP Code</Label>
            <Input id="zip" placeholder="Enter your postal/ZIP code" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" placeholder="Enter your country" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="passport">Passport Number</Label>
            <Input id="passport" placeholder="Enter your passport number" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="issue-date">Date of Issue</Label>
            <Input id="issue-date" required type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expiry-date">Date of Expiry</Label>
            <Input id="expiry-date" required type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="issuing-country">Issuing Country</Label>
            <Input id="issuing-country" placeholder="Enter issuing country" required />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit">Submit</Button>
      </CardFooter>
    </Card>
  )
}