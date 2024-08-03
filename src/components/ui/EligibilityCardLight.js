import Image from 'next/image';
import React from 'react';

function EligibilityCardLight({ icon, title, details }) {
  return (
    <div className='w-[18.75rem] border-blue border-4 rounded-[0.9375rem] transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center gap-2 py-6 px-5'>
      <div className='flex justify-center items-center'>
        <Image
          className='h-[50px] w-[50px] object-cover'
          src={icon}
          alt={title}
        />
      </div>
      <div className='text-xl text-blue font-medium text-center'>{title}</div>
      <div className='text-base text-blue font-normal text-center'>{details}</div>
    </div>
  );
}

export default EligibilityCardLight;
