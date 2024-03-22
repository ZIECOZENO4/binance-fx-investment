"use client"
import Carousel from "./Carousel";

function Banner() {
  return (
    <div className="bg-cover bg-center h-96 ">
      <div className="h-full flex flex-col justify-around p-12">
        <div className="flex-grow">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Banner;
