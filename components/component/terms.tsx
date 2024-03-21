import React  from "react";
export function Terms() {
  return (
    <div className="w-full py-6 bg-black text-white">
      <div className="container grid max-w-3xl items-start px-4 gap-4 md:px-6">
        <div className="flex flex-col gap-2">
          <div className="relative bg-gray-900 text-white py-4 px-6 rounded-lg">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none relative z-10 text-blue-500">
              Terms and Conditions
            </h1>
            <p className="text-gray-300 ">Last updated: March 21, 2024</p>
          </div>
        </div>
        <div className="grid gap-8">
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">1. Investment Process</h2>
            <p className="text-gray-500 md:max-w-prose dark:text-gray-400">
              The investment process begins with the user depositing funds into their BinanceFX account. Funds can be
              deposited using various methods including cryptocurrency transfers and bank deposits. Once the funds are
              deposited, users can choose from a variety of investment options offered by BinanceFX.
            </p>
            <img
              alt="Investment Process"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="320"
              src="/placeholder.svg"
              width="640"
            />
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">2. Risk Disclosure</h2>
            <p className="text-gray-500 md:max-w-prose dark:text-gray-400">
              Users should be aware that all investments involve an element of risk. The value of investments can go up
              as well as down, and users may not get back the full amount they invested. The level of risk varies
              depending on the type of investment, and users should carefully consider their risk tolerance before
              making any investment decisions.
            </p>
            <img
              alt="Risk Disclosure"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="320"
              src="/placeholder.svg"
              width="640"
            />
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">3. Investment Terms</h2>
            <p className="text-gray-500 md:max-w-prose dark:text-gray-400">
              BinanceFX offers a range of investment products with different terms and conditions. Users should
              carefully read the terms of each investment product before making a decision. The terms may include
              details such as the minimum investment amount, the expected return, the investment period, and any fees or
              charges that apply.
            </p>
            <img
              alt="Investment Terms"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="320"
              src="/placeholder.svg"
              width="640"
            />
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">4. Performance Reporting</h2>
            <p className="text-gray-500 md:max-w-prose dark:text-gray-400">
              BinanceFX is committed to providing accurate and transparent performance reporting for all investment
              products. Users can access performance reports through their BinanceFX account, which will show the
              performance of their investments over time. The performance reports will include details such as the
              investment return, the value of the investment, and any income or gains generated.
            </p>
            <img
              alt="Performance Reporting"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="320"
              src="/placeholder.svg"
              width="640"
            />
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">5. Fees and Charges</h2>
            <p className="text-gray-500 md:max-w-prose dark:text-gray-400">
              BinanceFX may charge fees for the provision of investment services. The fees and charges will be clearly
              disclosed to users before they make any investments. The fees may include management fees, performance
              fees, and other administrative charges. Users should carefully review the fee schedule and understand the
              impact of fees on their investments.
            </p>
            <img
              alt="Fees and Charges"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="320"
              src="/placeholder.svg"
              width="640"
            />
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">6. Customer Support</h2>
            <p className="text-gray-500 md:max-w-prose dark:text-gray-400">
              BinanceFX is committed to providing excellent customer support to its users. Users can contact the
              BinanceFX customer support team for assistance with any issues related to their investments. The customer
              support team is available to answer questions, provide guidance, and resolve any problems that users may
              encounter.
            </p>
            <img
              alt="Customer Support"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="320"
              src="/placeholder.svg"
              width="640"
            />
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">7. Termination of Services</h2>
            <p className="text-gray-500 md:max-w-prose dark:text-gray-400">
              BinanceFX reserves the right to terminate or suspend its investment services at any time. In the event of
              termination, BinanceFX will provide users with notice and take appropriate steps to ensure the orderly
              wind-down of investment activities. Users will have the opportunity to withdraw their funds and close
              their accounts before the termination of services.
            </p>
            <img
              alt="Termination of Services"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="320"
              src="/placeholder.svg"
              width="640"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
