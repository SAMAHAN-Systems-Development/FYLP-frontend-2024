import * as React from 'react';
 import Link from 'next/link';

 const MainButton = ({href, children}) => {

     return (
         <>
             <Link href={href || "/"} passHref={true}>
                 <button 
                 type='button'
                 className={'sm:w-fit sm:h-fit sm:rounded-[100px] xsm:rounded-[66.67px] bg-[#FD1E0A] hover:bg-[#FF7568] transition-colors duration-300 font-poppins text-[color:white] sm:py-[15px] sm:px-[35px] xsm:py-[10px] xsm:px-[23.33px] sm:text-[16px] xsm:text-[10.67px] leading-[24px] font-bold gap-[10px]'}>
                     {typeof(children) == 'string' ? children.toUpperCase() : 'BUTTON'}
                 </button>
             </Link>

         </>
     )

 }

 export default MainButton