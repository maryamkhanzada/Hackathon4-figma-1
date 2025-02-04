// import React from 'react'

// const Footer = () => {
//     return(
//         <div className='w-full h-auto flex flex-col md:flex-row md:justify-evenly items-center pt-[10%] bg-[#FFFFFF]'>
//             <div className='mb-6 md:mb-0'>
//                 <p className='w-[285px] h-auto text-center md:text-left font-poppins text-[16px] text-[#9F9F9F]'>
//                     400 University Drive Suite 200 Coral Gables, FL 33134 USA
//                 </p>
//             </div>
//             <div className='mb-6 md:mb-0'>
//                 <h2 className='text-[#9F9F9F] mb-4 text-center md:text-left font-poppins text-[16px] font-medium'>Links</h2>
//                 <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>Home</p>
//                 <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>Shop</p>
//                 <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>About</p>
//                 <p className='text-[#000000] text-center md:text-left font-poppins text-[16px] font-medium'>Contact</p>
//             </div>
//             <div className='mb-6 md:mb-0'>
//                 <h2 className='text-[#9F9F9F] mb-4 text-center md:text-left font-poppins text-[16px] font-medium'>Help</h2>
//                 <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>Payment Options</p>
//                 <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>Returns</p>
//                 <p className='text-[#000000] text-center md:text-left font-poppins text-[16px] font-medium'>Privacy Policies</p>
//             </div>
//             <div className='mb-6 md:mb-0'>
//                 <h2 className='text-[#9F9F9F] mb-4 text-center md:text-left font-poppins text-[16px] font-medium'>Newsletter</h2>
//                 <div className='flex flex-col items-center md:items-start'>
//                     <input 
//                         type="email" 
//                         placeholder='Enter Your Email Address' 
//                         className='mb-2 w-[200px] text-[14px] text-[#9F9F9F] font-poppins border p-2 outline-none'
//                     />
//                     <button className='text-sm text-[#000000] font-poppins border p-2 bg-[#F5F5F5]'>
//                         SUBSCRIBE
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer;

import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <div className="flex flex-col md:flex-row justify-around items-start gap-4 mt-10 py-20 px-10">
        {/* div 1 */}
        <p className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] w-[285px] h-[72px] md:mt-20">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>

        {/* div 2 */}
        <div className="flex flex-col justify-start items-start gap-4 rounded-[4px] mt-8 md:mt-0">
          <h1 className="font-poppins text-[16px] font-medium text-[#9f9f9f] leading-6">
            Links
          </h1>
          <nav className="flex flex-col items-center gap-10">
            <div className="relative cursor-pointer font-poppins font-medium text-[16px] leading-6 text-[#000000] mr-4">
              <Link href="/">Home</Link>
            </div>
            <div className="relative cursor-pointer font-poppins font-medium text-[16px] leading-6 text-[#000000] mr-6">
              <Link href="/shop">Shop</Link>
            </div>
            <div className="relative cursor-pointer font-poppins font-medium text-[16px] leading-6 text-[#000000] mr-6">
              <Link href="/about">About</Link>
            </div>
            <div className="relative cursor-pointer font-poppins font-medium text-[16px] leading-6 text-[#000000] mr-4">
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </div>

        {/* div 3 */}
        <div className="flex flex-col justify-start items-start gap-4 rounded-[4px] mt-8 md:mt-0">
          <h1 className="font-poppins text-[16px] font-medium text-[#9f9f9f] leading-6">
            Help
          </h1>
          <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4">
            Payment Options
          </p>
          <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4">
            Returns
          </p>
          <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
            Privacy Policies
          </p>
        </div>

        {/* div 4 */}
        <div className="flex flex-col justify-start items-start gap-4 rounded-[4px] mt-8 md:mt-0">
          <h1 className="font-poppins text-[16px] font-medium text-[#9f9f9f] leading-6">
            Newsletter
          </h1>
          <div className="flex flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b-[0.5px] border-[#000000] w-50 font-poppins font-normal text-[14px] leading-5 text-[#9f9f9f]"
            />
            <button className="font-poppins font-medium text-[14px] leading-[21px] text-[#000000] border-b-[0.5px] border-[#000000]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="text-center md:text-left border-t-[0.5px] border-[#d9d9d9] py-4 md:px-28 mt-auto">
        <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
          2022 Meubel House. All rights reverved
        </p>
      </div>
    </div>
  );
}

export default Footer;