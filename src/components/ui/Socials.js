import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

import Facebook from '/public/assets/ICON - Facebook.png';
import Instagram from '/public/assets/ICON - Instagram.png';

const Socials = () => {
    return (
        <div className="flex gap-[8.5px] justify-center">
            <Link target="_blank" href="https://www.facebook.com/phfylp">
                <Image className="w-[35px] h-[35px]" src={Facebook} alt="Facebook"/>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/phfylp/">
                <Image className="w-[35px] h-[35px]" src={Instagram} alt="Instagram"/>
            </Link>
        </div>
    )
}

export default Socials