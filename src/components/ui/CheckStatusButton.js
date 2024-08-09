'use client';
import React, { useState } from 'react';

const CheckStatusButton = ({ text, handleButtonClick, isSelected, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      name={name}
      className={`justify-center p-5 w-1/6 min-w-28 max-w-48 rounded-md transition duration-300 ease-in-out uppercase
        ${isHovered ? 'hover:border-[#FD1E0A] text-[#FD1E0A] font-semibold' : 'bg-orange'}
        ${isSelected ? 'bg-[#FD1E0A] text-white font-semibold border-0' : 'border-2 border-[#6b7280]'}
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      value={text}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default CheckStatusButton;
