import React from 'react'
import Image from 'next/image'
import MainButton from '../ui/MainButton'
import Primer from '/public/assets/images/Primer.png'

const Section3 = () => {
    return (
        <div className='w-full max-w-[1700px] xl:h-[750px] xsm:h-[1100px] relative flex xl:justify-end justify-center'>
            <div id='float'>
                <Image
                    src={Primer}
                    alt='Primer'
                    placeholder='blur'
                    className='absolute 2xl:left-[555px] xl:left-[390px] xl:top-[-40px] sm:top-[-0px] xsm:top-[0] xsm:left-1/2 xsm:-translate-x-1/2 xsm:w-[30px] xsm:h-[09px] sm:w-[500px] sm:h-[629.06px] xl:w-[647px] xl:h-[814px] overflow-visible'
                />
            </div>
            <div id='right-group' className='2xl:w-[576px] xl:w-[526px] xsm:h-[189.33px] xsm:w-[189.33px] sm:h-[284px] relative xsm:mt-[650px] xl:my-[232px] xl:mr-[50px] z-30 flex flex-col items-center xl:items-start '>
                <div className='font-poppins font-semibold sm:text-[25px] text-[16.67px] flex justify-center xl:justify-start w-full space-x-2'>
                    <span className="text-blue"> Filipino</span>
                    <span className="text-red"> Youth</span>
                    <span className="text-yellow"> Leadership</span>
                    <span className="text-skyblue"> Program</span>
                    <span className="text-black"> 2024</span>
                </div>
                <div className='flex justify-center xl:justify-start font-poppins sm:text-base xsm:text-[10.67px] font-medium xl:text-left xsm:text-center w-[220px]'>
                    <p>
                        Ateneo de Davao University
                    </p>
                    <p className='sm:mt-[60px] xsm:mt-[30px] absolute sm:w-[550px] xsm:w-[370px]'>
                        Join the Mindanaon Youth Leaders in developing their skills, expanding their knowledge, and ignite their passion for making a meaningful impact in their communities and beyond!
                    </p>
                </div>
                <div className='flex flex-col xl:flex-row justify-start items-center w-full absolute bottom-0 gap-[5.76px]'>
                    <MainButton>Register Now</MainButton>
                    <p className='uppercase font-poppins sm:text-base text-[10.67px] text-red hover:underline cursor-pointer transition-transform duration-300 hover:scale-105'>
                        Download Primer
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section3
