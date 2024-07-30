import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FYLPLogo from 'public/assets/images/FYLP_Logo.png'
import Pattern from 'public/assets/images/Pattern.png'

const HeroSection = () => {
    return (
        <div className='w-full h-[46.875rem] mt-[205px] relative'>
            <div id='left-group' className='2xl:w-[36.1875rem] h-[25.9375rem] relative mx-[9.5rem] lg:mx-[10.5rem] md:mx-[94px]'>
                <Image src={FYLPLogo} alt='FYLP Logo' className='w-[522px] h-[188px] xl:left-0 lg:left-[60px] md:left-[25px] top-0 absolute justify-center items-center inline-flex' />
                <div className="w-[579px] h-20 xl:left-0 top-[202px] absolute xl:text-left xsm:text-center xsm:left-[30px] md:-left-[20px] text-black text-[25px] font-semibold font-poppins">Join us on this unparalleled adventure where leadership meets community</div>
                <button className='h-[54px] px-[35px] py-[15px] xl:left-0 top-[322px] xsm:left-[220px] md:left-[178px] absolute bg-red hover:bg-[#ff7468] transition-colors duration-300 rounded-[100px] justify-center items-center gap-2.5 inline-flex text-white text-base font-bold font-poppins'>
                    REGISTER NOW
                </button>
                <div className="flex items-center xl:left-0 xsm:left-[185px] md:left-[143px] bottom-0 absolute space-x-2">
                    <div className="text-[#202020] text-base font-poppins font-medium">Already registered?</div>
                    <div className="text-red text-base font-medium font-poppins hover:underline cursor-pointer transition-transform duration-300 hover:scale-105">Check Status</div>
                </div>
            </div>
            <div id='right-group'>
                <Image src={Pattern} alt='Pattern' placeholder='blur' className='2xl:w-[893.50px] h-[893.50px] absolute right-0 top-[-200px] overflow-visible xsm::w-0 xsm:h-0 xl:w-[630.50px] xl:h-full'/>
            </div>
        </div>
    )
}
export default HeroSection;
