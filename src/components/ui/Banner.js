import React from 'react';
import bannerPattern from '/public/assets/BannerPattern.png';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerPattern.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
  };

  return (
    <div className='w-full'>
      <div className="flex sm:h-[342px] xsm:h-[228px] max-w-[1920px] w-full opacity-20 overflow-visible" style={bannerStyle}></div>
    </div>
  );
};

export default Banner;
