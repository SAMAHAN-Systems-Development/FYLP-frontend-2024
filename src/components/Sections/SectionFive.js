import React from 'react';
import SectionFiveCard from '@/components/ui/SectionFiveCard';
import { FYLP_Program } from '@/data/SectionFive';
import MainButton from '@/components/ui/MainButton';

import Image from 'next/image';
import picOne from "../../../public/assets/images/Leadership-Skill-Development_One.png"
import picTwo from "../../../public/assets/images/Networking-and-Mentorship_Two.png"
import picThree from "../../../public/assets/images/Community-Engagement_Three.png"
import picFour from "../../../public/assets/images/Personal-Growth_Four.png"
import picFive from "../../../public/assets/images/Professional-Advancement_Five.png"

const SectionFive = () => {
  return (
    <div className="w-full py-10">
      <div className="relative">
        <div id="right-group" className="absolute inset-0 overflow-hidden">
          {/* <Image
            src={Pattern}
            alt="Pattern"
            placeholder="blur"
            className="absolute right-0 top-[-200px] w-full h-auto xsm:hidden"
          /> */}
        </div>
        <div className="relative z-10 mx-auto max-w-screen-2xl">
          <div className="flex justify-center">
            <div className="xl:text-2xl xsm:text-[0.83331rem] font-semibold uppercase text-center">
              What&apos;s in it for <span className="text-red">you</span>?
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-10">
            <div className="grid gap-[50px] grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">

              {/* CARD 1 */}
              <div className='sm:w-[25.625rem] w-[280px] grid gap-y-2 relative'>
                <div className='relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl'>
                  <div className="absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110">
                    <Image className='object-cover' src={picOne} />
                  </div>
                </div>
                <div className='font-medium text-blue sm:text-xl xsm:text-[0.66669rem]'>Leadership Skill Development</div>
                <div className='font-normal sm:text-xl xsm:text-[0.66669rem]'>Delegates enhance their leadership skills through workshops, interactive sessions, and practical experiences, focusing on strategic thinking, communication, and team management.</div>
              </div>

              {/* CARD 2 */}
              <div className='sm:w-[25.625rem] w-[280px] grid gap-y-2 relative'>
                <div className='relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl'>
                  <div className='absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110'>
                    <Image className='object-cover' src={picTwo} />
                  </div>
                </div>
                <div className='font-medium text-blue sm:text-xl xsm:text-[0.66669rem]'>Networking and Mentorship</div>
                <div className='font-normal sm:text-xl xsm:text-[0.66669rem]'>FYLP provides a platform for delegates to build a robust professional network by connecting with fellow participants, experienced mentors, and industry leaders.</div>
              </div>

              {/* CARD 3 */}
              <div className='sm:w-[25.625rem] w-[280px] grid gap-y-2 relative'>
                <div className='relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl'>
                  <div className='absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110'>
                    <Image className='object-cover' src={picThree} />
                  </div>
                </div>
                <div className='font-medium text-blue sm:text-xl xsm:text-[0.66669rem]'>Community Engagement</div>
                <div className='font-normal sm:text-xl xsm:text-[0.66669rem]'>Delegates engage with communities through immersive activities, volunteer work, and collaborative projects, fostering a deep understanding of social issues and driving positive change.</div>
              </div>

              {/* CARD 4 */}
              <div className='sm:w-[25.625rem] w-[280px] grid gap-y-2 relative 2xl:hidden'>
                <div className='relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl'>
                  <div className='absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110'>
                    <Image className='object-cover' src={picFour} />
                  </div>
                </div>
                <div className='font-medium text-blue sm:text-xl xsm:text-[0.66669rem]'>Personal Growth</div>
                <div className='font-normal sm:text-xl xsm:text-[0.66669rem]'>FYLP supports self-discovery and personal development with reflective practices, goal-setting exercises, and diverse perspectives, nurturing well-rounded individuals.</div>
              </div>

              {/* CARD 5 */}
              <div className='sm:w-[25.625rem] w-[280px] grid gap-y-2 relative lg:hidden'>
                <div className='relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl'>
                  <div className='absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110'>
                    <Image className='object-cover' src={picFive} />
                  </div>
                </div>
                <div className='font-medium text-blue sm:text-xl xsm:text-[0.66669rem]'>Professional Advancement</div>
                <div className='font-normal sm:text-xl xsm:text-[0.66669rem]'>Delegates gain practical experience, build networks, and receive mentorship, enhancing their employability and preparing them for leadership roles in their fields.</div>
              </div>

            </div>

            <div className="grid mt-[50px] gap-[50px] grid-cols-1 2xl:grid-cols-2">

              {/* CARD 4 */}
              <div className='sm:w-[25.625rem] w-[280px] grid gap-y-2 relative hidden 2xl:block'>
                <div className='relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl'>
                  <div className='absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110'>
                    <Image className='object-cover' src={picFour} />
                  </div>
                </div>
                <div className='font-medium text-blue sm:text-xl xsm:text-[0.66669rem]'>Personal Growth</div>
                <div className='font-normal sm:text-xl xsm:text-[0.66669rem]'>FYLP supports self-discovery and personal development with reflective practices, goal-setting exercises, and diverse perspectives, nurturing well-rounded individuals.</div>
              </div>

              {/* CARD 5 */}
              <div className='sm:w-[25.625rem] w-[280px] grid gap-y-2 relative hidden lg:block'>
                <div className='relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl'>
                  <div className='absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110'>
                    <Image className='object-cover' src={picFive} />
                  </div>
                </div>
                <div className='font-medium text-blue sm:text-xl xsm:text-[0.66669rem]'>Professional Advancement</div>
                <div className='font-normal sm:text-xl xsm:text-[0.66669rem]'>Delegates gain practical experience, build networks, and receive mentorship, enhancing their employability and preparing them for leadership roles in their fields.</div>
              </div>

            </div>
          </div>
          <div className="flex justify-center">
            <div className="font-normal md:text-xl text-base text-center pt-10">
              Be a part of this immersive leadership program with FYLP 2024.
            </div>
          </div>
          <div className="flex justify-center py-5">
            <MainButton href="/registration">Register Now</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
