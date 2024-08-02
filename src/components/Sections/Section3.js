import React from 'react'
import MainButton from '../ui/MainButton'

const Section3 = () => {
    return (
        <div>
            <div className='w-full h-[750px] relative'>
                <div id='right-group' className='2xl:w-[576px] h-[237px] relative mx-[9.5rem] z-30'>
                    <div className='font-poppins font-semibold text-[25px]'>
                        <span className="text-blue">Filipino</span>
                        <span className="text-red"> Youth</span>
                        <span className="text-yellow"> Leadership</span>
                        <span className="text-skyblue"> Program</span>
                        <span className="text-black"> 2024</span>
                    </div>
                    <div className='font-poppins text-base xl:text-left xsm:text-center'>
                        <p>
                            Ateneo de Davao University
                        </p>
                        <p className='mt-[30px] absolute'>
                            Join the Mindanaon Youth Leaders in developing their skills, expanding their knowledge, and ignite their passion for making a meaningful impact in their communities and beyond!
                        </p>
                    </div>
                    <div className='flex absolute bottom-0'>
                        <MainButton>Register Now</MainButton>
                    </div>
                    <p className='absolute bottom-[15px] flex uppercase font-poppins text-base text-red left-[200px] hover:underline cursor-pointer transition-transform duration-300 hover:scale-105'>
                        Download Primer
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section3