import React from 'react'
import Socials from './ui/Socials'

const StayConnected = () => {
    return (
        <div className="flex justify-center">
            <div className={`flex flex-col gap-y-[10px] justify-center text-center mx-[35px] max-w-[650px]`}>
                <div>
                    <p className="sm:text-[20px] xsm:text-[13.33px] sm:leading-[30px] xsm:leading-[20px] font-poppins font-semibold">
                        Stay Connected
                    </p>
                </div>
                <div>
                    <p className="sm:text-[16px] xsm:text-[10.67px] sm:leading-[24px] xsm:leading-[16px] font-poppins font-medium">
                    Follow us on social media to stay updated on the latest news and events related to the FYLP 2024!
                    </p>
                </div>
                <div>
                    <div className="scale-[50%] sm:scale-[100%]">
                        <Socials/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayConnected