'use client';
import React, { useState } from 'react';

const CheckStatusButton = ({ text, handleButtonClick, isSelected, name }) => {
  return (
    <button
      name={name}
      className={`justify-center m-2 p-5 w-1/6 min-w-40 max-w-48 rounded-md border-2 border-[#6b7280] transition duration-300 ease-in-out uppercase hover:border-[#FD1E0A] hover:text-[#FD1E0A] hover:font-semibold bg-orange' 
        ${isSelected ? 'bg-[#FD1E0A] text-white border-0 font-semibold' : ''} 
        `}
      value={text}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default CheckStatusButton;
