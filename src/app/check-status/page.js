'use client';
import React, { useState } from 'react';
import NavigationBar from '@/components/ui/NavigationBar';
import CheckStatusTxtField from '@/components/CheckStatusTxtField';
import CheckStatusComponent from '@/components/CheckStatusComponent';
import StayConnected from '@/components/StayConnected';
import Banner from '@/components/ui/Banner';
import axios from 'axios';

export default function Page() {
  const [formData, setFormData] = useState({
    email: '',
    type: '',
  });

  const [message, setMessage] = useState({
    content: '',
    success: true,
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage({
      content: 'Searching the database for your application...',
      success: true,
    });

    try {
      const response = await axios.post('/api/check-status', formData);

      setMessage({
        content: response.data.message[0],
        success: true,
      });
    } catch (error) {
      setMessage({
        content: error.response.data.message[0],
        success: false,
      });
    }
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner />
      <div
        id=""
        className="flex flex-col justify-center items-center font-poppins
        sm:px-24 md:px-40 lg:px-80"
      >
        <p className="font-extrabold py-20 text-lg">CHECK APPLICATION STATUS</p>
      </div>
      <div className="xsm:px-12 sm:px-24 md:px-40 lg:px-70 xl:px-80">
        <p>
          Welcome to the Application Status Check page. Please select your role
          and enter your email address.
        </p>

        <p className="mt-7">I am a:</p>
        <div className="mt-2">
          <CheckStatusComponent
            formData={formData}
            onChange={onChange}
          ></CheckStatusComponent>
        </div>
        <p className="mt-10 ">
          Enter your email address below and click
          <b> &quot;Check Status&quot;</b> to receive the latest update on your
          application.
        </p>

        <div className="flex items-center justify-center flex-col ">
          <CheckStatusTxtField onChange={onChange} onSubmit={onSubmit} />
          <p className={!message.success ? 'text-[#FD1E0A]' : ''}>
            {message.content}
          </p>
        </div>
        <div className="mt-36 mb-32">
          <StayConnected></StayConnected>
        </div>
      </div>
    </>
  );
}
