import React from 'react';
import MainButton from '/src/components/ui/MainButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const CheckStatusTxtField = () => {
  return (
    <div className="flex justify-center items-center mt-20 mb-6  px-4">
      <div className="relative flex items-center max-w-[699px] max-h-[54px]  rounded-full bg-gray-200 w-[320px] h-[45px] sm:w-[480px] sm:h-[45px] md:w-[550px] md:h-[54px] lg:w-[650px] lg:h-[54px] xl:w-[699px] xl:h-[54px]">
        <div className="relative w-full h-full">
          <EmailOutlinedIcon className="ml-1 absolute left-4 top-1/2 transform -translate-y-1/2 text-black opacity-35 w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
          <input
            type="text"
            className="sm:text-[16px] xsm:text-[10.67px] md:text-md lg:text-lg xl:text-lg font-bold w-full h-full pl-16 pr-[150px] rounded-full border-[#B3B2B2] border-2 font-poppins focus:outline-none"
            placeholder="Enter your email address"
          />
        </div>
        <div className="absolute right-0 flex justify-center items-center h-full">
          <div className="">
            <MainButton className="">Check Status</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckStatusTxtField;
