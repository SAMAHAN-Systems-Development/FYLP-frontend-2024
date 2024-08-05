import React from 'react';

import Card from '@/components/ui/Card';
import { CoreOfficersData } from '@/data/CoreOfficers';

const CoreOfficersSection = () => {
  return (
    <div className="pb-24 flex flex-col items-center font-poppins">
      <div className="grid gap-4 text-center">
        <div className="font-semibold font-poppins">
          Get to Know the Minds Behind
          <span className="text-blue"> FYLP 2024</span>
        </div>
        <p className="text-center font-poppins lg:text-base xsm:text-[0.83331rem]">
          Welcome to the FYLP 2024 Core Team! Our team is composed of dedicated
          professionals and passionate individuals who are committed to shaping
          the future of young leaders in Mindanao. Each member brings a wealth
          of experience, expertise, and enthusiasm to ensure the success of the
          program.
        </p>
      </div>
      <div className="pt-20 grid 2xl:grid-cols-4 lg:grid-cols-2 sm:lg-col-1 gap-12">
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
