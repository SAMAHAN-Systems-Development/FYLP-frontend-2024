'use client';
import React, { useState } from 'react';
import CheckStatusButton from '@/components/ui/CheckStatusButton';

const ButtonGroup = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleButtonClick = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className='flex gap-4'>
      <CheckStatusButton
        text={'DELEGATE'}
        handleButtonClick={handleButtonClick}
        isSelected={selectedRole === 'DELEGATE'}
      />
      <CheckStatusButton
        text={'MENTOR'}
        handleButtonClick={handleButtonClick}
        isSelected={selectedRole === 'MENTOR'}
      />
    </div>
  );
};

export default ButtonGroup;
