import React from 'react'
import { IoMdContact } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';



const Header = () => {
    return (
        <body className=' bg-[#FBEBB5] mr-6 ml-6'>
        <div className='flex justify-center '>

        <div className="flex gap-4  ml-[150px]  mt-[50px]">
            <ul  className='w-[370px]  h-[24px] flex gap-[48px] text-[#000000]'>
                <li className='font-poppins text-center font-normal text-[16px] w-[48px] h-[24px]'><Link href="/">Home</Link></li>
                <li className='font-poppins text-center font-normal text-[16px] w-[48px] h-[24px]' ><Link href="">Shop</Link></li>
                <li className='font-poppins text-center font-normal text-[16px] w-[48px] h-[24px]'><Link href="../about">About</Link></li>
                <li className='font-poppins text-center font-normal text-[16px] w-[48px] h-[24px]'><Link href="../contact">Contact</Link></li>
            </ul>
            <div className='flex gap-4'>
                <button className=' pb-[6px] rounded-[4px] text-[#000000]'><IoMdContact className='h-[28px] w-[28px] '/></button>
                <IoIosSearch className='w-[28px] h-[28px]  text-[#000000]'/>
                <FaRegHeart className='h-[28px] w-[28px]  text-[#000000]' />
                <MdOutlineShoppingCart className='h-[28px] w-[28px]  text-[#000000]'/>

            </div>
        </div>
        </div>
       
        <div className="flex items-center mt-[50px] ml-[50px]">
  {/* Left: Text Section */}
  <div className="flex flex-col justify-start space-y-4 w-[440px]">
    <p className="font-poppins text-[64px] text-[#000000]">
      Rocket single seater
    </p>
    <h2 className="font-poppins text-[24px] text-[#000000]">
      Shop Now
    </h2>
  </div>

  {/* Right: Image Section */}
  <div className="ml-[50px]">
    <Image
      src="/chair.jpeg"
      alt="chair"
      width={696}
      height={400}
      className="w-[696px] h-[400px]"
    />
  </div>
</div>

 </body>
    )
}


export default Header;