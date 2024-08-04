import Image from 'next/image';
import React from 'react';

function EligibilityCardDark({ icon, title, details }) {
  return (
    <div
      className="lg:w-[18.75rem] lg:items-center lg:justify-center sm:w-full md:w-full bg-blue rounded-[0.9375rem] transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col lg:flex-col sm:flex-row items-center sm:items-start gap-2 py-6 px-5"
      style={{
        background: 'linear-gradient(121deg, #0364FD 0%, #00B4FF 100%)',
      }}
    >
      <div className="flex justify-center sm:justify-start sm:mr-4">
        <Image
          className="lg:h-[50px] lg:w-[50px] object-cover"
          src={icon}
          alt={title}
        />
      </div>
      <div className="flex flex-col lg:items-center lg:justify-center items-center sm:items-start text-center sm:text-left">
        <div className="text-xl text-white font-medium font-poppins">
          {title}
        </div>
        <div className="text-base text-white lg:text-center font-extralight font-poppins">
          {details}
        </div>
      </div>
    </div>
  );
}

export default EligibilityCardDark;
