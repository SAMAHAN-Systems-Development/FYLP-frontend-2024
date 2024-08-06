'use client';
import React from 'react';
import CheckStatusButton from '@/components/ui/CheckStatusButton';

const ButtonGroup = ({ formData, onChange }) => {
  return (
    <div>
      <CheckStatusButton
        text={'delegate'}
        name="type"
        handleButtonClick={onChange}
        isSelected={formData['type'] === 'delegate'}
      />
      <CheckStatusButton
        text={'mentor'}
        name="type"
        handleButtonClick={onChange}
        isSelected={formData['type'] === 'mentor'}
      />
    </div>
  );
};

export default ButtonGroup;
