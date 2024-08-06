import React from 'react';

import SectionFive from '@/components/Sections/SectionFive';
import React from 'react';
import SectionFiveCard from '@/components/ui/SectionFiveCard';
import { FYLP_Program } from '@/data/SectionFive';
import MainButton from '@/components/ui/MainButton';
import Image from 'next/image';
import AccordionComponent from '../../components/AccordionComponent';
import { FAQS } from '@/data/faqs';

// for testing purposes
export default function SectionFourPage() {
  return (
    <div>
      <SectionFive />
    <div>
      {FAQS.map((faqs, index) => (
        <div key={index}>
          <AccordionComponent question={faqs.question} answer={faqs.answer} />
        </div>
      ))}
    </div>

    // <div className="w-full py-10">
    //   <div className="relative">
    //     <div id='right-group' className="absolute inset-0 overflow-hidden">
    //       {/* <Image
    //         src={Pattern}
    //         alt="Pattern"
    //         placeholder="blur"
    //         className="absolute right-0 top-[-200px] w-full h-auto xsm:hidden"
    //       /> */}
    //     </div>
    //     <div className="relative z-10 mx-auto max-w-screen-2xl">
    //       <div className="flex justify-center">
    //         <div className="text-4xl font-semibold uppercase text-center">
    //           What's in it for <span className="text-red">you</span>?
    //         </div>
    //       </div>
    //       <div className="flex justify-center items-center py-10">
    //       <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
    //           {FYLP_Program.map((item, index) => (
    //             <div key={index}>
    //               <SectionFiveCard {...item} />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="flex justify-center">
    //         <div className="font-normal text-xl text-center pt-10">
    //           Be a part of this immersive leadership program with FYLP 2024.
    //         </div>
    //       </div>
    //       <div className="flex justify-center py-5">
    //         <MainButton href="/register">
    //           Register Now
    //         </MainButton>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
