import Image from 'next/image';
import React from 'react';

function SectionFiveCard({ imageUrl, alt, title, description }) {
  return (
    <div className="xl:w-[25.625rem] lg-w[22.625rem] xsm:w-[14.75rem] grid gap-y-2 relative">
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden 2xl:rounded-xl xsm:rounded-md">
        <div className="absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110">
          <Image className="object-cover" src={imageUrl} alt={alt} fill />
        </div>
      </div>
      <div className="font-medium text-blue sm:text-xl xsm:text-[0.66669rem]">
        {title}
      </div>
      <div className="font-normal sm:text-xl xsm:text-[0.66669rem]">
        {description}
      </div>
    </div>
  );
}

export default SectionFiveCard;
