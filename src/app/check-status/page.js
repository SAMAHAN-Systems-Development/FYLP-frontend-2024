import React from 'react';
import Image from 'next/image';
import NavigationBar from '@/components/ui/NavigationBar';
import CheckStatusTxtField from '@/components/CheckStatusTxtField';
import CheckStatusComponent from '@/components/CheckStatusComponent';
import StayConnected from '@/components/StayConnected';

export default function Page() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="flex sm:h-[342px] xsm:h-[228px] w-[calc(100%+175px)] opacity-20 overflow-hidden sm:-ml-[175px] xsm:-ml-[120px]">
        <div className="relative sm:min-w-[893.5px] xsm:min-w-[595.67px] overflow-hidden">
          <Image src="/assets/BannerPattern.png" alt="" fill />
        </div>
        <div className="relative sm:min-w-[893.5px] xsm:min-w-[595.67px] overflow-hidden">
          <Image src="/assets/BannerPattern.png" alt="" fill />
        </div>
      </div>
      <div
        id=""
        className="flex flex-col justify-center items-center font-poppins sm:px-24 md:px-40 lg:px-80"
      >
        <p className="font-extrabold py-20 text-lg">CHECK APPLICATION STATUS</p>
      </div>
      <div className="sm:px-24 md:px-40 lg:px-70 xl:px-80">
        <p>
          Welcome to the Application Status Check page. Please select your role
          and enter your email address.
        </p>

        <p className="mt-7">I am a:</p>
        <div className="mt-2">
          <CheckStatusComponent></CheckStatusComponent>
        </div>
        <p className="mt-10">
          Enter your email address below and click
          <b> &quot;Check Status&quot;</b> to receive the latest update on your
          application.
        </p>
        <CheckStatusTxtField />
        <div className="flex items-center justify-center flex-col ">
          {/* idk how to trigger the messages so i will be dispalying both */}
          <p>
            Success! Please check your email for the status of your application.
          </p>
          <p className="text-[#FD1E0A]">
            Email not found. Please check your email address and try again.
          </p>
        </div>
        <div className="mt-36 mb-32">
          <StayConnected></StayConnected>
        </div>
      </div>
    </>
  );
}
