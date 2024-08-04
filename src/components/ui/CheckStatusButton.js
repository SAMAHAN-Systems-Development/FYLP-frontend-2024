'use client';
import { useState } from 'react';
const CheckStatusButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`mx-5 w-1/6 rounded-md outline outline-[#6b7280] p-5 ${isHovered ? 'hover:bg-[#FF7568]' : 'bg-orange'} `}
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hello
    </button>
  );
};

export default CheckStatusButton;
