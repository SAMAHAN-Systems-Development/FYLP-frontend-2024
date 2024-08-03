import Image from 'next/image';
import React from 'react';

function EligibilityCardDark({ icon, title, details }) {
  return (
    <div  className='w-[18.75rem] sm:max-w-xs md:max-w-sm lg:max-w-md bg-blue rounded-[0.9375rem] transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center gap-2 py-6 px-5'
    style={{
        background: 'linear-gradient(121deg, #0364FD 0%, #00B4FF 100%)'
      }}
    >
      <div className='flex justify-center items-center'>
        <Image
          className='h-[50px] w-[50px] object-cover'
          src={icon}
          alt={title}
        />
      </div>
      <div className='text-xl text-white font-medium text-center'>{title}</div>
      <div className='text-base text-white font-normal text-center'>{details}</div>
    </div>
  );
}

export default EligibilityCardDark;
