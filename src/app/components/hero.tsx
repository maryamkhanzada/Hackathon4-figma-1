import React from 'react';

import Image from 'next/image';





export const ImageSection = () => {
    return (
        <div className="flex flex-col items-center justify-center  bg-[#FAF4F4] gap-8 px-4 py-10 md:flex-row md:gap-16">
            {/* First Image Block */}
            <div className="flex flex-col items-center">
                {/* Image */}
                <Image
                    src="/table.png"
                    alt="Side Table 1"
                    width={300}
                    height={300}
                    className="rounded-md object-cover"
                />
                {/* Caption */}
                <p className="text-lg font-semibold text-black mt-4">Side Table</p>
                <p className="text-sm text-[#9F9F9F] cursor-pointer hover:underline">View More</p>
                {/* Black Line */}
                <div className="w-14 h-[2px] bg-black mt-4"></div>
            </div>

            {/* Second Image Block */}
            <div className="flex flex-col items-center">
                {/* Image */}
                <Image
                    src="/sofa.png"
                    alt="Side Table 2"
                    width={300}
                    height={300}
                    className="rounded-md object-cover"
                />
                {/* Caption */}
                <p className="text-lg font-semibold text-black mt-4">Side Table</p>
                <p className="text-sm text-[#9F9F9F] cursor-pointer hover:underline">View More</p>
                {/* Black Line */}
                <div className="w-14 h-[2px] bg-black mt-4"></div>
            </div>
        </div>
    );
};





     
   



  export const Hero = () => {
    return(

        <div className="flex bg-[#FFF9E5] flex-col md:flex-row items-center gap-8 p-8">
      {/* Left Side - Image */}
      <div className="flex-1">
        <Image
          src="/bigsofa.png" // Replace with your image path
          alt="New Arrival Image"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          className="w-full h-auto"
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-lg text-[#000000] font-bold mb-4">New Arrival</h2>
        <p className="text-4xl text-[#000000] mb-6">Asgraad Sofa</p>
        <button
          className="w-[50px] h-[20px]  text-[#000000] text-lg font-medium rounded-lg shadow-md"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};



export const BlogSection = () => {
    return (
        <div className="flex flex-col items-center px-4 md:px-20 lg:px-40 py-10 bg-white">
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold text-black text-center mb-4">
                Our Blog
            </h1>

            {/* Paragraph */}
            <p className="text-[#9F9F9F] text-center text-lg md:text-xl mb-8">
                Find a bright idea to suit your taste with our great selection.
            </p>

            {/* Image Section */}
            <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
                <div className="transition-transform transform hover:scale-105">
                    <Image
                        src="/Rectangle 13.png"
                        alt="Blog 1"
                        width={500}
                        height={500}
                        className="w-72 h-48 object-cover rounded-lg"
                    />
                    <p className="text-center mt-4 text-black font-medium">
                        Going all-in with millennial design
                    </p>
                </div>
                <div className="transition-transform transform hover:scale-105">
                    <Image
                        src="/Rectangle 14.png"
                        alt="Blog 2"
                        width={500}
                        height={500}
                        className="w-72 h-48 object-cover rounded-lg"
                    />
                    <p className="text-center mt-4 text-black font-medium">
                        Going all-in with millennial design
                    </p>
                </div>
                <div className="transition-transform transform hover:scale-105">
                    <Image
                        src="/Rectangle 15.png"
                        alt="Blog 3"
                        width={500}
                        height={500}
                        className="w-72 h-48 object-cover rounded-lg"
                    />
                    <p className="text-center mt-4 text-black font-medium">
                        Going all-in with millennial design
                    </p>
                </div>
            </div>

            {/* Read More */}
            <p className="text-lg font-medium text-black mb-6 cursor-pointer hover:underline">
                Read More
            </p>

            {/* Black Line */}
            <div className="w-14 h-1 bg-black mb-8"></div>

            {/* Clock and Calendar Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-xs">
                        🕒
                    </div>
                    <p className="text-[#9F9F9F] text-sm font-medium">5 min</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-xs">
                        📅
                    </div>
                    <p className="text-[#9F9F9F] text-sm font-medium">12 Oct 2022</p>
                </div>
            </div>
        </div>
    );
};




export const Hero1 = () => {
    return(
        <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/Group 43.png')" }}>
      <div className="flex items-center justify-center min-h-screen text-center px-4">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-lg">
          <h1 className="text-white text-3xl font-bold mb-4">Our Instagram</h1>
          <p className="text-white mb-6">Follow our store on Instagram</p>
          <button className="bg-white text-black py-2 px-4 rounded-md">Follow Us</button>
        </div>
      </div>
    </div>
    )
}










   