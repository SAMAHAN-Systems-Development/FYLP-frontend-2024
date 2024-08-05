import Image from 'next/image';
import React from 'react';

function SectionFiveCard({ imageUrl, alt, title, description }) {
  return (
    <div className="lg:w-[25.625rem]  xsm:w-[18.75rem] md:w-[25.625rem] grid gap-y-2 relative">
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl">
        <div className="absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110">
          <Image
            className="object-cover"
            src={imageUrl}
            alt={alt}
            layout="fill"
          />
        </div>
      </div>
      <div className="font-medium text-blue text-xl">{title}</div>
      <div className="font-normal lg:text-lg xsm:text-base">{description}</div>
    </div>
  );
}

export default SectionFiveCard;
