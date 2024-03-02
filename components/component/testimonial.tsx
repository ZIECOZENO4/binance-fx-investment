"use client"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Testimonial() {
  return (
    <div className="w-full py-12 lg:py-24 bg-black text-white">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl uppercase md:text-5xl text-sky-600">Testimonials</h1>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Read what our customers have to say about their experience after investing on Binance FX.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <div className="space-y-4">
            <Card className="w-full max-w-sm mx-auto">
              <div className="grid gap-4">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">Alice Johnson</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Germany</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      I&apos;m really impressed with the level of service provided by the team. They were always available to
                      answer my questions and went out of their way to ensure my satisfaction.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6 justify-center">
                  <div className="grid gap-2 text-center">
                    <div>
                      <Label className="sr-only" htmlFor="email">
                        Email
                      </Label>
                      <Input className="w-full max-w-xs inline" id="email" placeholder="Email" />
                    </div>
                    <Button size="sm" className="bg-black text-white">Submit</Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="w-full max-w-sm mx-auto">
              <div className="grid gap-4">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">Bob Smith</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">United States</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      Binance FX is the epitome of safe investing and trading. Their platform provides unparalleled
                      security and treats customers with the utmost respect. I have never felt more secure and valued as
                      a trader.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6 justify-center">
                  <div className="grid gap-2 text-center">
                    <div>
                      <Label className="sr-only" htmlFor="email">
                        Email
                      </Label>
                      <Input className="w-full max-w-xs inline" id="email" placeholder="Email" />
                    </div>
                    <Button size="sm" className="bg-black text-white">Submit</Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="w-full max-w-sm mx-auto">
              <div className="grid gap-4">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">Charlie Brown</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Canada</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      Binance FX is the epitome of safe investing and trading. Their platform provides unparalleled
                      security and treats customers with the utmost respect. I have never felt more secure and valued as
                      a trader.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6 justify-center">
                  <div className="grid gap-2 text-center">
                    <div>
                      <Label className="sr-only" htmlFor="email">
                        Email
                      </Label>
                      <Input className="w-full max-w-xs inline" id="email" placeholder="Email" />
                    </div>
                    <Button size="sm" className="bg-black text-white">Submit</Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
