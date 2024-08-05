import React from 'react';
import Image from 'next/image';
import MainButton from '/src/components/ui/MainButton';
import FYLPLogo from '/public/assets/images/FYLP_Logo.png';
import Pattern from '/public/assets/images/Pattern.png';

const HeroSection = () => {
  return (
    <div className="w-full sm:h-[750px] xsm:h-[500px] mt-[205px] relative">
      <div
        id="left-group"
        className="2xl:w-[36.1875rem] h-[25.9375rem] relative mx-[9.5rem] lg:mx-[10.5rem] md:mx-[94px] sm:mx-[53px] xsm:mx-[35.33px] z-30 flex flex-col items-center xl:items-start"
      >
        <div className="flex justify-center xl:justify-start w-full">
          <Image
            src={FYLPLogo}
            alt="FYLP Logo"
            className="md:w-[522px] md:h-[188px] sm:w-[430.37px] sm:h-[155px] xsm:w-[286.91px] xsm:h-[103.33px] xl:left-[60px]"
          />
        </div>
        <div className="md:w-[579px] xsm:w-[310px] sm:w-[450px] h-20 flex justify-center xl:justify-start xl:left-0 xsm:top-[115px] md:top-[200px] sm:top-[170px] absolute xl:text-left xsm:text-center text-black sm:text-[25px] xsm:text-[16.67px] font-semibold font-poppins">
          Join us on this unparalleled adventure where leadership meets
          community
        </div>
        <div
          id="Button"
          className="flex justify-center xl:justify-start absolute sm:top-[330px] xsm:top-[210px]"
        >
          <div className="sm:left-[140px] md:left-[190px] lg:left-[230px] xl:left-0">
            <MainButton href='/RegistrationPage'>Register Now</MainButton>
          </div>
        </div>
        <div className="flex justify-center xl:justify-start items-center absolute xl:left-0 xsm:bottom-[140px] sm:bottom-0 space-x-2">
          <div className="text-[#202020] sm:text-base xsm:text-[10.67px] font-poppins font-medium">
            Already registered?
          </div>
          <div className="text-red sm:text-base xsm:text-[10.67px] font-medium font-poppins hover:underline cursor-pointer transition-transform duration-300 hover:scale-105">
            Check Status
          </div>
        </div>
      </div>
      <div id="right-group">
        <Image
          src={Pattern}
          alt="Pattern"
          placeholder="blur"
          className="2xl:w-[893.50px] 2xl:h-[950px] absolute right-0 top-[-200px] overflow-visible xsm:w-0 xsm:h-0 xl:w-[630.50px] xl:h-[950px]"
        />
      </div>
      {/* <Image src={DotPattern} alt='Dot Pattern' placeholder='blur' className='absolute -left-[30px] top-[-800px] overflow-visible w-[929px] h-[1329px]' />
            <Image src={DotPattern} alt='Dot Pattern' placeholder='blur' className='absolute right-[170px] top-[-500px] overflow-visible w-[929px] h-[1329px] rotate-90' /> */}
    </div>
  );
};

export default HeroSection;
