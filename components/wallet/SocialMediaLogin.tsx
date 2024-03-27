"use client"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

export default function SocialMediaLogin() {
  return (
    <div className="w-full h-auto overflow-y-auto space-y-4 text-white">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-300 dark:text-gray-400">To verify your identity</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter your username" required type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Enter your password" required type="password" />
        </div>
        <Button className="w-full bg-green-700 font-bold">Sign In</Button>
      </div>
    </div>
  )
}