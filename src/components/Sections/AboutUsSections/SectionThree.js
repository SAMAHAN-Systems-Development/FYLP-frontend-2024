import MainButton from '@/components/ui/MainButton';
import React from 'react';

const SectionThree = () => {
  return (
    <div className="gap-14 flex flex-col items-center">
      <div className="grid gap-4">
        <h1 className="text-center font-poppins font-semibold xl:text-xl xsm:text-[1.04169rem]">
          Our Mission
        </h1>
        <p className="text-center font-poppins lg:text-base xsm:text-[0.83331rem]">
          The FYLP Core Team is dedicated to providing an exceptional experience
          for all participants by leveraging our diverse backgrounds and skills.
          We are committed to fostering a supportive environment that encourages
          growth, collaboration, and leadership development.
        </p>
      </div>
      <div className="grid gap-4">
        <h1 className="text-center font-poppins font-semibold xl:text-xl xsm:text-[1.04169rem]">
          Contact Us
        </h1>
        <p className="text-center font-poppins lg:text-base xsm:text-[0.83331rem]">
          For any questions or further information, feel free to reach out to
          our team at Filipino Youth Leadership Program. We are here to help and
          excited to engage with you throughout the program!
        </p>
      </div>
      <MainButton href="mailto:fylp2024@gmail.com">Send us a Message</MainButton>
    </div>
  );
};

export default SectionThree;
