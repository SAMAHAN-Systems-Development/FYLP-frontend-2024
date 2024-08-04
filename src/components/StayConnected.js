import React from 'react';
import Socials from './ui/Socials';

const StayConnected = () => {
  return (
    <div className="flex flex-col justify-center pt-[9.38rem] gap-6">
      <h1 className="font-semibold text-xl text-center font-poppins">
        Stay Connected
      </h1>
      <p className="text-center font-poppins">
        Follow us on social media to stay updated on the latest news and events
        related to the FYLP 2024!
      </p>
      <div className="scale-[50%] sm:scale-[100%]">
        <Socials />
      </div>
    </div>
  );
};

export default StayConnected;
