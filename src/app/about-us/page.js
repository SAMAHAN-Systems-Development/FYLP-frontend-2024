import React from 'react';

import SectionOne from '@/components/Sections/AboutUsSections/SectionOne';
import SectionThree from '@/components/Sections/AboutUsSections/SectionThree';
import Divider from '@/components/Divider';
import StayConnected from '@/components/StayConnected';
import CoreOfficersSection from '@/components/Sections/CoreOfficersSection';
import Banner from '@/components/ui/Banner';

// for testing purposes
export default function AboutUsPage() {
  return (
    <div>
      <Banner />
      <Divider title={'About Us'}>
        <SectionOne />
        <CoreOfficersSection />

        <SectionThree />
        <StayConnected />
      </Divider>
    </div>
  );
}
