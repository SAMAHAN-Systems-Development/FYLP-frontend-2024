import React from 'react';

import Card from '@/components/ui/Card';
import { CoreOfficersData } from '@/data/CoreOfficers';

const CoreOfficersSection = () => {
  return (
    <div className="pt-24 px-20 xsm:px-20 sm:pt-32 pb-24 flex flex-col items-center font-poppins">
      <div className="px-15 xsm:px-18 text-center">
        <p className="text-[18px] xsm:text-[20px] font-semibold pb-5">
          Get to Know the Minds Behind
          <span className="px-2 text-blue font-semibold ">FYLP2024</span>
        </p>
        <p className="text-[16px] xsm:text-[18px]">
          Welcome to the FYLP 2024 Core Team! Our team is composed of dedicated
          professionals and passionate individuals who are committed to shaping
          the future of young leaders in Mindanao. Each member brings a wealth
          of experience, expertise, and enthusiasm to ensure the success of the
          program.
        </p>
      </div>
      <div className="pt-20 grid 2xl:grid-cols-4 lg:grid-cols-2 sm:lg-col-1 gap-8">
        {CoreOfficersData.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-all duration-300"
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreOfficersSection;
