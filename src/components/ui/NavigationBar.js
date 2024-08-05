'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FYLPLogo from '/public/assets/images/FYLP_Logo.png';
import Burger from '/public/assets/ICON.png';
import ExitBurger from '/public/assets/X_ICON.png';

const NavigationBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isAnimating, setAnimating] = useState(false);

    const toggleDropdown = () => {
        setAnimating(true);
        setDropdownOpen(!isDropdownOpen);
    };

    const handleTransitionEnd = () => {
        setAnimating(false);
    };

    return (
        <div className="relative">
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={toggleDropdown}
                ></div>
            )}
            <div className={`fixed top-0 w-full z-50 ${isDropdownOpen ? 'bg-white' : 'bg-gradient-to-b from-white via-white/50 to-transparent'}`}>
                <div className="p-[1.5625rem] flex flex-col lg:flex-row justify-between items-start">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[7.8125rem] py-1 flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="h-[2.8125rem] justify-center items-center inline-flex relative">
                                <Link href="/">
                                <Image src={FYLPLogo} alt='FYLP Logo' />
                                </Link>
                            </div>
                        </div>
                        <div className="block lg:hidden" onClick={toggleDropdown}>
                            <Image src={isDropdownOpen ? ExitBurger : Burger} alt='Burger Icon' className='cursor-pointer sm:w-[65px] sm:h-[53px] xsm:w-[43.33px] xsm:h-[35.33px]' />
                        </div>
                    </div>
                    <div className={`w-full lg:flex lg:w-auto lg:mt-0`}>
                        <div
                            id='NavLinks'
                            className={`flex flex-col lg:flex-row justify-start items-center transition-all duration-300 ease-in-out ${isDropdownOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'} lg:opacity-100 lg:max-h-screen lg:flex w-full lg:w-auto mt-4 lg:mt-0 whitespace-nowrap`}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About', href: '#' },
                                { label: 'FAQ', href: '#' },
                                { label: 'Check Status', href: '#' },
                            ].map((nav) => (
                                <Link key={nav.label} href={nav.href}>
                                    <div className="inline-flex items-center justify-center relative px-[25px] py-3 gap-2.5">
                                        <div className="text-center text-black sm:text-lg xsm:text-xs font-semibold font-poppins hover:text-red cursor-pointer transition-colors duration-300">
                                            {nav.label}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;