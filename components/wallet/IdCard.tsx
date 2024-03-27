"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../../components/ui/select"
import { Button } from "../../components/ui/button"

export default function IdCard() {
  return (
    <Card className=" w-full h-auto overflow-y-auto text-white">
      <CardHeader>
        <CardTitle>Complete your ID card</CardTitle>
        <CardDescription>Enter your information and upload your photos.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" placeholder="Enter your full name" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date-of-birth">Date of Birth</Label>
            <Input id="date-of-birth" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="nationality">Nationality</Label>
          <Input id="nationality" placeholder="Enter your nationality" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="id-number">ID Number</Label>
          <Input id="id-number" placeholder="Enter your ID number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Enter your address" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-number">Contact Number</Label>
          <Input id="contact-number" placeholder="Enter your contact number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label>Front Picture</Label>
          <div className="flex items-center space-x-4">
            <img
              alt="Front Picture"
              className="rounded-lg overflow-hidden object-cover"
              height="96"
              src="/placeholder.svg"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <img
              alt="Front Picture"
              className="rounded-lg overflow-hidden object-cover"
              height="96"
              src="/placeholder.svg"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
          </div>
          <Input id="front-picture" type="file" />
        </div>
        <div className="space-y-2">
          <Label>Back Picture</Label>
          <div className="flex items-center space-x-4">
            <img
              alt="Back Picture"
              className="rounded-lg overflow-hidden object-cover"
              height="96"
              src="/placeholder.svg"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <img
              alt="Back Picture"
              className="rounded-lg overflow-hidden object-cover"
              height="96"
              src="/placeholder.svg"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
          </div>
          <Input id="back-picture" type="file" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto bg-green font-bold">Submit</Button>
      </CardFooter>
    </Card>
  )
}