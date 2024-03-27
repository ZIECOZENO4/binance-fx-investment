// pages/index.tsx
import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Header section */}
      <div className="relative h-64 w-full">
        <Image
          src="/path/to/header-image.jpg"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Main content section */}
      <div className="flex-1 p-4">
        {/* Your main content here */}
      </div>

      {/* Footer section */}
      <div className="bg-gray-900 p-4 text-white">
        {/* Footer content */}
      </div>
    </div>
  );
};

export default HomePage;
