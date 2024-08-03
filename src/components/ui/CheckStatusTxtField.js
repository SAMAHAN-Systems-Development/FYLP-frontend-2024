import React from 'react';
import MainButton from '/src/components/ui/MainButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const CheckStatusTxtField = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="relative flex items-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] h-[54px] sm:h-[48px] md:h-[50px] lg:h-[52px] xl:h-[54px] rounded-full bg-gray-200">
        <div className="relative w-full h-full">
          <EmailOutlinedIcon className="ml-1 absolute left-4 top-1/2 transform -translate-y-1/2 text-black opacity-35 w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
          <input
            type="text"
            className="font-bold w-full h-full pl-12 pr-[150px] rounded-full border-[#B3B3B3] border-2 font-poppins focus:outline-none text-base sm:text-sm md:text-base lg:text-lg xl:text-xl xsm:pl-10 xsm:pr-[100px] sm:pl-12 sm:pr-[120px] md:pl-14 md:pr-[130px] lg:pl-16 lg:pr-[140px]"
            placeholder="Enter your email address"
          />
        </div>
        <div className="absolute right-0 flex justify-center items-center h-full">
            <div className="">
                <MainButton className="xsm:w-[100px] sm:w-[110px] md:w-[121px] lg:w-[130px]">Check Status</MainButton>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckStatusTxtField;
