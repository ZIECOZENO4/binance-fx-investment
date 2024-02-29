"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tight">Driver&apos;s License Application</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your information to apply for a driver&apos;s license</p>
          </div>
          <img
            alt="User avatar"
            className="rounded-full"
            height="96"
            src="/placeholder.svg"
            style={{
              aspectRatio: "96/96",
              objectFit: "cover",
            }}
            width="96"
          />
        </div>
      </div>
      <div className="space-y-4">
        <fieldset>
          <legend className="text-lg font-semibold">Personal Information</legend>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Full Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Address" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="Phone" required type="tel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email" required type="email" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-semibold">Driver&apos;s License Information</legend>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="license">License Number</Label>
              <Input id="license" placeholder="License Number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">Issuing State</Label>
              <Input id="state" placeholder="Issuing State" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiration">Expiration Date</Label>
              <Input id="expiration" type="date" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-semibold">Driving History</legend>
          <div className="space-y-2">
            <Label htmlFor="violations">Accidents or Traffic Violations</Label>
            <Textarea id="violations" placeholder="Enter any accidents or traffic violations" required />
          </div>
        </fieldset>
      </div>
      <Button className="w-full max-w-sm justify-center">Submit Application</Button>
    </div>
  )
}