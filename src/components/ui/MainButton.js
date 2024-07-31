import * as React from 'react';
 import Link from 'next/link';

 const MainButton = ({href, children}) => {

     return (
         <>
             <Link href={href || "/"} passHref={true}>
                 <button 
                 type='button'
                 className={'w-fit h-fit rounded-[100px] bg-[#FD1E0A] hover:bg-[#FF7568] transition-colors duration-300 font-poppins text-[color:white] py-[15px] px-[35px] text-[16px] leading-[24px] font-bold gap-[10px]'}>
                     {typeof(children) == 'string' ? children.toUpperCase() : 'BUTTON'}
                 </button>
             </Link>

         </>
     )

 }

 export default MainButton