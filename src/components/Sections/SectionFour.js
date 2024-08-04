import React from 'react';
import EligibilityCardLight from '@/components/ui/EligibilityCardLight';
import EligibilityCardDark from '@/components/ui/EligibilityCardDark';
import Home from '../../../public/assets/home.png';
import Hand from '../../../public/assets/hand.png';
import Person from '../../../public/assets/person.png';

const SectionFour = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="uppercase text-2xl font-semibold">Eligibility</div>
      <div className="text-base font-normal text-center">
        Meet the criteria to qualify and participate in this program. Ensure you{' '}
        <br />
        satisfy all requirements outlined below.
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3  ">
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
