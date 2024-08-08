import Image from 'next/image';
import React from 'react';

function EligibilityCardLight({ icon, title, details }) {
  return (
    <div className="xl:max-w-[18.75rem] xl:items-center xl:justify-start xsm:w-full border-blue xl:border-4 xsm:border-[2.333px] rounded-[0.9375rem] transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col xl:flex-col xsm:flex-row xsm:items-start gap-2 py-6 px-5">
      <div className="flex justify-center items-center xsm:justify-start xsm:mr-4">
        <Image
          className="h-[50px] w-[50px] object-contain"
          src={icon}
          alt={title}
        />
      </div>
      <div className="flex flex-col xl:items-center xl:justify-center xsm:items-start text-center xsm:text-left">
        <div className="text-center xl:text-xl xsm:text-[0.83331rem] text-blue font-medium font-poppins">
          {title}
        </div>
        <div className="xl:text-base text-blue xl:text-center xsm:text-[0.66669rem] font-extralight font-poppins">
          {details}
        </div>
      </div>
    </div>
  );
}

export default EligibilityCardLight;
