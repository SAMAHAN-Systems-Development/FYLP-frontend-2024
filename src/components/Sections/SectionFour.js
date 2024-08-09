import React from 'react';
import EligibilityCardLight from '@/components/ui/EligibilityCardLight';
import EligibilityCardDark from '@/components/ui/EligibilityCardDark';
import Home from '../../../public/assets/home.png';
import Hand from '../../../public/assets/hand.png';
import Person from '../../../public/assets/person.png';

const SectionFour = () => {
  return (
    <div className="xl:py-[5.12rem] xl:px-[13.5rem] xsm:py-[2.75rem] xsm:px-[1rem] flex flex-col gap-2 justify-center items-center">
      <div className="uppercase sm:text-2xl xsm:text-md font-semibold font-poppins">
        Eligibility
      </div>
      <div className="sm:text-base xsm:text-[0.66669rem] font-normal text-center font-poppins">
        Meet the criteria to qualify and participate in this program. Ensure you
        <br />
        satisfy all requirements outlined below.
      </div>
      <div className="grid grid-cols-1 xl:gap-8 xsm:gap-3 lg:grid-cols-1 xl:grid-cols-3 py-2 px-2">
        <EligibilityCardLight
          icon={Home}
          title={'Mindanao Resident'}
          details={
            'A Filipino living in Mindanao, actively involved in local community activities.'
          }
        />
        <EligibilityCardLight
          icon={Person}
          title={'Passionate Advocate'}
          details={
            'Individuals committed to creating positive change and empowering future leaders.'
          }
        />
        <EligibilityCardDark
          icon={Hand}
          title={'Active Leader'}
          details={
            'An individual dedicated to serving and positively impacting their community.'
          }
        />
      </div>
    </div>
  );
};

export default SectionFour;
