import Image from 'next/image';
import React from 'react';

function EligibilityCardDark({ icon, title, details }) {
  return (
    <div
      className="xl:max-w-[18.75rem] xl:items-center xl:justify-start xsm:w-full md:w-full bg-blue rounded-[0.9375rem] transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col xl:flex-col xsm:flex-row items-center xsm:items-start gap-2 py-6 px-5"
      style={{
        background: 'linear-gradient(121deg, #0364FD 0%, #00B4FF 100%)',
      }}
    >
      <div className="flex justify-center xsm:justify-start xsm:mr-4">
        <Image
          className="xl:h-[50px] xl:w-[50px] object-contain"
          src={icon}
          alt={title}
        />
      </div>
      <div className="flex flex-col xl:items-center xl:justify-center items-center xsm:items-start text-center xsm:text-left">
        <div className="sm:text-xl xsm:text-sm text-white font-medium font-poppins">
          {title}
        </div>
        
        <div className="sm:text-base text-white xl:text-center xsm:text-[0.66669rem] font-extralight font-poppins">
          {details}
        </div>
      </div>
    </div>
  );
}

export default EligibilityCardDark;
