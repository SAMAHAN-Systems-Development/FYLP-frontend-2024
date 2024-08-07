'use client';
import React, { useState } from 'react';

const CheckStatusButton = ({ text, handleButtonClick, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`justify-center p-5 w-1/6 min-w-40 max-w-48 rounded-md border-2 border-[#6b7280] transition duration-300 ease-in-out
        ${isHovered ? 'hover:border-[#FD1E0A] text-[#FD1E0A] font-semibold' : 'bg-orange'} }
        ${isSelected ? 'bg-[#FD1E0A] text-white border-0 font-semibold' : ''} 
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      value={text}
      onClick={(e) => {
        handleButtonClick(e);
      }}
    >
      {text}
    </button>
  );
};

export default CheckStatusButton;
