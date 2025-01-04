import React from 'react';
import { IoMdContact } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="bg-[#FBEBB5] px-4 md:px-8 lg:px-16">
            {/* Navbar */}
            <div className="flex justify-between items-center py-6">
                {/* Navigation Links */}
                <ul className="flex gap-6 md:gap-8 text-[#000000]">
                    <li className="font-poppins text-[16px]">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="font-poppins text-[16px]">
                        <Link href="../shop">Shop</Link>
                    </li>
                    <li className="font-poppins text-[16px]">
                        <Link href="../about">About</Link>
                    </li>
                    <li className="font-poppins text-[16px]">
                        <Link href="../contact">Contact</Link>
                    </li>
                </ul>

                {/* Icon Buttons */}
                <div className="flex gap-4">
                    <button className="text-[#000000]">
                        <IoMdContact className="h-[24px] w-[24px]" />
                    </button>
                    <IoIosSearch className="h-[24px] w-[24px] text-[#000000]" />
                    <FaRegHeart className="h-[24px] w-[24px] text-[#000000]" />
                    <MdOutlineShoppingCart className="h-[24px] w-[24px] text-[#000000]" />
                </div>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center mt-8 gap-8">
                {/* Left: Text Section */}
                <div className="text-between lg:text-left">
                    <p className="font-poppins text-[32px] md:text-[48px] lg:text-[64px] text-[#000000] mb-4">
                        Rocket single seater
                    </p>
                    <h2 className="font-poppins text-[20px] md:text-[24px] text-[#000000]">
                        Shop Now
                    </h2>
                </div>

                {/* Right: Image Section */}
                <div className="w-full lg:w-auto">
                    <Image
                        src="/sofa 1.png"
                        alt="sofa"
                        width={200}
                        height={200}
                        className="w-full lg:w-[696px] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
