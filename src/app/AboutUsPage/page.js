import React from 'react';

import SectionOne from '@/components/Sections/AboutUsSections/SectionOne';
import SectionTwo from '@/components/Sections/AboutUsSections/SectionTwo';
import SectionThree from '@/components/Sections/AboutUsSections/SectionThree';
import Divider from '@/components/Divider';
import StayConnected from '@/components/StayConnected';
// for testing purposes
export default function AboutUsPage() {
  return (
    <div>
      <Divider title={'About Us'}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <StayConnected />
      </Divider>
    </div>
  );
}
