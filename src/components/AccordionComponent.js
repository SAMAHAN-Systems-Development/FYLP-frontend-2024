'use client';
import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { IoIosArrowForward } from 'react-icons/io';

const AccordionComponent = ({ question, answer }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <Accordion.Root type="single" collapsible className="py-2 px-4">
      <Accordion.Item
        value="item-1"
        className="p-1 border-2 border-[#9CA3AF] rounded-lg lg:w-[38.5626rem] sm:w-full md:w-full "
      >
        <div
          className={`transition-all duration-300 rounded-[0.625rem] shadow-sm`}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={`bg-white flex justify-between items-center w-full text-left p-4 cursor-pointer`}
              onClick={handleAccordionClick}
            >
              <span className="font-semibold font-poppins sm:text-base text-[12.67px] flex-1">
                {question}
              </span>
              <IoIosArrowForward
                className={`text-[#9CA3AF] transform transition-transform duration-300 ml-2 ${isAccordionOpen ? 'rotate-90' : ''}`}
                style={{ width: '1.5rem', height: '1.5rem' }}
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className={`overflow-hidden transition-all duration-300 ${isAccordionOpen ? 'max-h-screen py-4 animate-fadeIn' : 'max-h-0 py-0 opacity-0 animate-fadeOut'}`}
          >
            <div>
              <p className="px-4 font-normal font-poppins sm:text-base text-[12.67px]">
                {answer}
              </p>
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionComponent;
