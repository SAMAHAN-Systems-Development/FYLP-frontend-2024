'use client'

import React from 'react';
import Image from 'next/image';
import FYLPLogo from '/public/assets/images/LOGO_FYLP.png';
import Link from 'next/link';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as Separator from '@radix-ui/react-separator';


const Footer = () => {
  return (
   
    <div id='main' className='w-full flex flex-col px-[50px] md:px-[100px] items-center'>
  
      <div className='bg-[#202020] opacity-15 w-full h-[2px]'></div>
          <div id='logo' className='flex flex-col items-center mt-10'> 
            <Image src={FYLPLogo} alt="FYLP Logo" width={150} height={72} className='block xl:hidden'/>
            <p className='font-poppins text-xs w-[220px] h-[40px] mt-2  font-thin block xl:hidden text-center xl:text-left'>Fostering Leadership and Innovation for a Better Tomorrow</p>
          </div>
      <div id='content' className='flex flex-col lg:flex-row mt-[52px] w-full ml-auto mr-auto items-center lg:items-start lg:justify-between'>
        <div id='left' className='  flex flex-col lg:flex-row'>
          <div id='logo' className='hidden xl:block'> 
            <Image src={FYLPLogo} alt="FYLP Logo" width={150} height={72} />
            <p className='font-poppins text-xs w-[200px] h-[40px] mt-2 text-left font-thin'>Fostering Leadership and Innovation for a Better Tomorrow</p>
          </div>
          <div id='links' className='w-[200px] h-[180px] ml-0 xl:ml-20 flex flex-col space-y-3 text-center lg:text-left mb-[25px] lg:mb-0'>
            <p className='font-poppins font-bold text-[15px] w-[200px] h-[30px]'>Quick Links</p>
            <Link href="#" className='font-poppins text-sm hover:text-[#FD1E0A] transition-colors duration-300'>Home</Link>
            <Link href="#" className='font-poppins text-sm hover:text-[#FD1E0A] transition-colors duration-300'>About Us</Link>
            <Link href="#" className='font-poppins text-sm hover:text-[#FD1E0A] transition-colors duration-300'>FAQ</Link>
            <Link href="#" className='font-poppins text-sm hover:text-[#FD1E0A] transition-colors duration-300'>Check Status</Link>
            <Link href="#" className='font-poppins text-sm hover:text-[#FD1E0A] transition-colors duration-300'>Meet The Developers</Link>
          </div>
          <div id='address' className='w-[200px] h-[169px] ml-0 lg:ml-20 flex flex-col space-y-2 text-center lg:text-left my-[25px] lg:my-0'>
            <p className='font-poppins font-bold text-[15px] '>Address</p>
            <p className='font-poppins h-[139px] w-[200px] text-sm font-normal leading-[21px] '>6/F Community Center of the First Companions, Ateneo de Davao University, Roxas Ave, Poblacion District, Davao City, 8000 Davao del Sur</p>
          </div>
        </div>
        <div id='right' className='h-[198px] w-[200px]'>
          <div id='email' className='flex flex-col space-y-2 text-center lg:text-right my-[25px] lg:my-0'>
            <p className='font-poppins font-[600] text-center lg:text-right text-[15px]'>E-mail</p>
            <p className='font-poppins w-full text-sm font-normal text-center leading-5 lg:text-right'>contact@fylp.com</p>
            <div className='mt-6'></div>
            <p className='font-poppins font-[600]  text-[15px] text-center lg:text-right'>Telephone</p>
            <p className='font-poppins w-full text-sm font-normal leading-5 text-center lg:text-right'>+63 970 376 3758</p>
            <div className='mt-6'></div>
           
            <div className='text-center lg:text-right'>
              <p className='font-poppins font-[600] text-[15px] text-center lg:text-right'>Socials</p>
              <Link href="https://www.facebook.com/phfylp" target="_blank" aria-label="Facebook">
                <FacebookRoundedIcon className='icon hover:text-[#FD1E0A] transition-colors duration-300' />
              </Link>
              <Link href="https://www.instagram.com/phfylp/" target="_blank" aria-label="Instagram">
                <InstagramIcon className='icon hover:text-[#FD1E0A] transition-colors duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id='credits' className='flex flex-col lg:flex-row items-center lg:justify-between lg: ml-auto mr-auto w-full mt-[58px]'>
        <p className='font-poppins text-sm font-normal'>Organized by PIGLASAPAT © 2024 FYLP</p>
        <p className='font-poppins text-sm'>Developed by <Link href="#" className='font-poppins font-bold hover:text-[#FD1E0A] transition-colors duration-300'>SAMAHAN Systems Development</Link></p>
      </div>
    </div>
  );
}

export default Footer;
