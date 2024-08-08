import React from 'react';
import Link from 'next/link';

import Card from '@/components/ui/Card';
import { DevelopersData } from '@/data/Developers';

export default function Page() {
  return (
    <div className="pt-24 px-20 xsm:px-20 sm:pt-32 pb-24 flex flex-col items-center font-poppins">
      <div className="grid gap-4 text-center">
        <div className="px-15 xsm:px-18 text-center">
          <p className="text-[18px] xsm:text-[20px] font-semibold pb-5">
            Meet the Developers
          </p>
        </div>
        <p className="text-center font-poppins lg:text-base xsm:text-[0.83331rem]">
          Made possible by the{' '}
          <Link href={'https://www.facebook.com/SAMAHANSysDev'}>
            <span className="text-blue font-semibold">
              {' '}
              SAMAHAN Systems Development Team
            </span>{' '}
          </Link>
        </p>
      </div>

      <div className="pt-20 grid lg:grid-cols-2 sm:lg-col-1 gap-16">
        {DevelopersData.map((item, index) => (
          <div
            key={index}
            className={`hover:scale-105 transition-all duration-300 ${index === 6 ? 'lg:col-span-2 flex justify-center' : ''}`}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
