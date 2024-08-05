'use client';

import React from 'react';
import Image from 'next/image';
import FYLPLogo from '/public/assets/images/LOGO_FYLP.png';
import Link from 'next/link';
import Socials from '/src/components/ui/Socials.js';

const Footer = () => {
  return (
    <div
      id="main"
      className="w-full flex flex-col px-[50px] md:px-[100px] items-center"
    >
      <div className="bg-[#202020] opacity-15 w-full h-[2px]"></div>
      <div id="logo" className="flex flex-col items-center mt-10">
        <Image
          src={FYLPLogo}
          alt="FYLP Logo"
          width={150}
          height={72}
          className="block xl:hidden"
        />
        <p className="font-poppins text-xs w-[220px] h-[40px] mt-2  font-thin block xl:hidden text-center xl:text-left">
          Fostering Leadership and Innovation for a Better Tomorrow
        </p>
      </div>
      <div
        id="content"
        className="flex flex-col lg:flex-row mt-[52px] w-full ml-auto mr-auto items-center lg:items-start lg:justify-between"
      >
        <div id="left" className="  flex flex-col lg:flex-row">
          <div id="logo" className="hidden xl:block">
            <Image src={FYLPLogo} alt="FYLP Logo" width={150} height={72} />
            <p className="font-poppins text-xs w-[200px] h-[40px] mt-2 text-left font-thin">
              Fostering Leadership and Innovation for a Better Tomorrow
            </p>
          </div>
          <div
            id="links"
            className="font-poppins w-[200px] h-[180px] ml-0 xl:ml-20 flex flex-col space-y-3 text-center lg:text-left mb-[25px] lg:mb-0"
          >
            <p className=" font-bold text-[15px] w-[200px] h-[30px]">
              Quick Links
            </p>
            <Link
              href="/"
              className=" text-sm hover:text-[#FD1E0A] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/AboutUsPage"
              className="text-sm hover:text-[#FD1E0A] transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-[#FD1E0A] transition-colors duration-300"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-[#FD1E0A] transition-colors duration-300"
            >
              Check Status
            </Link>
            <Link
              href="check-status"
              className="text-sm hover:text-[#FD1E0A] transition-colors duration-300"
            >
              Meet The Developers
            </Link>
          </div>
          <div
            id="address"
            className="font-poppins w-[200px] h-[169px] ml-0 lg:ml-20 flex flex-col space-y-2 text-center lg:text-left my-[25px] lg:my-0"
          >
            <p className=" font-bold text-[15px] ">Address</p>
            <p className=" h-[139px] w-[200px] text-sm font-normal leading-[21px] ">
              6/F Community Center of the First Companions, Ateneo de Davao
              University, Roxas Ave, Poblacion District, Davao City, 8000 Davao
              del Sur
            </p>
          </div>
        </div>
        <div id="right" className="h-[198px] w-[200px] font-poppins">
          <div
            id="email"
            className="flex flex-col space-y-2 text-center lg:text-right my-[25px] lg:my-0"
          >
            <p className=" font-[600] text-center lg:text-right text-[15px]">
              E-mail
            </p>
            <a href='mailto:fylp2024@gmail.com' className=" w-full text-sm font-normal text-center leading-5 lg:text-right hover:underline">
              contact@fylp.com
            </a>
            <div className="mt-6"></div>
            <p className=" font-[600]  text-[15px] text-center lg:text-right">
              Telephone
            </p>
            <p className=" w-full text-sm font-normal leading-5 text-center lg:text-right">
              +63 970 376 3758
            </p>
            <div className="mt-6"></div>

            <div className="text-center lg:text-right">
              <p className="font-[600] text-[15px]">Socials</p>
              <div className=" flex text-center justify-center mt-1  lg:text-right lg:justify-end">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="credits"
        className="font-poppins flex flex-col text-center lg:flex-row items-center lg:justify-between mx-[20px] lg:mx-[100px] w-full mt-[58px]"
      >
        <p className=" text-sm font-normal">
          Organized by{' '}
          <Link
            target="_blank"
            href="https://www.facebook.com/ateneopiglas"
            className="hover:text-[#FD1E0A] transition-colors duration-300 font-semibold"
          >
            PIGLASAPAT{' '}
          </Link>
          © 2024 FYLP
        </p>
        <p className=" text-sm">
          Developed by{' '}
          <Link
            target="_blank"
            href="https://www.facebook.com/SAMAHANSysDev"
            className="font-bold hover:text-[#FD1E0A] transition-colors duration-300"
          >
            SAMAHAN Systems Development
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;