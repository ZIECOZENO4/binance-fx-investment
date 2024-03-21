"use client"
import Carousel from "./Carousel";

function Banner() {
 return (
    <div className="bg-cover bg-center h-96">
      <div className="h-full flex flex-col justify-around p-12">
        <div className="flex flex-col justify-center h-1/2 text-center">
          <h2 className="font-bold mb-4 text-2xl">
            Binance FX Trading
          </h2>
          <p className="text-gray-500 capitalize">
            Get all the Info regarding your favorite Crypto Currency
          </p>
        </div>
        <div className="flex-grow">
          <Carousel />
        </div>
      </div>
    </div>
 );
}

export default Banner;
