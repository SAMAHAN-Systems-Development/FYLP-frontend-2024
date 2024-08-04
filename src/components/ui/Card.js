import React from 'react';
import Image from 'next/image';

const Card = ({ name, position, imageUrl }) => {
  return (
    <div className="w-[18.75rem] h-[28.125rem] rounded-[0.9375rem] relative overflow-hidden">
      <Image
        draggable={false}
        fill
        src={imageUrl}
        className="rounded-card object-cover object-center"
        alt="/"
      />
      <div className="absolute bottom-0 left-0 px-5 pb-7 pl-5 z-10 font-poppins text-[#ffffff]">
        <span className="text-2xl font-semibold ">{name}</span>
        <h1 className="text-sm font-medium ">{position}</h1>
      </div>
    </div>
  );
};

export default Card;
