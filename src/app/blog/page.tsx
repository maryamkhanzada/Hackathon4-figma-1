import React from "react";
import dynamic from "next/dynamic";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const DynamicImage = dynamic(() => import('next/image'), {
  ssr: false, 
});

function Page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden bg-white">
      <div
        className="w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <DynamicImage
              src="/abc1.png"
              alt="Image"
              width={1300}
              height={1300}
              className="ml-2"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              Blog
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
                Home ...
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                Blog
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-8 gap-12 mt-20 md:gap-20">
        <main className="flex flex-col gap-12 md:gap-20 md:w-3/4">
          <div className="flex flex-col items-center">
            <DynamicImage
              src="/Rectangle 13.png"
              alt="Image 1"
              width={393}
              height={393}
              className="w-full sm:w-[250px] md:w-[393px] h-auto"
            />
            <div className="flex flex-col items-start w-full sm:w-[250px] md:w-[393px] mt-4">
              <div className="flex flex-row items-center space-x-4 text-sm text-[#9f9f9f]">
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                  <FaUser /> <span>Admin</span>
                </span>
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                  <FaCalendarAlt /> <span>12 Oct 2022</span>
                </span>
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                  <FaMapMarkerAlt /> <span>Wood</span>
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-left font-poppins font-bold text-[20px] text-[#000000]">
                  Going all-in with millennial design
                </h3>
                <p className="text-sm mt-1 font-poppins font-normal text-[#9f9f9f] leading-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur nemo aspernatur minus doloribus itaque est
                  provident rem pariatur officia velit dolorum nesciunt, facere
                  deleniti ut? Recusandae illum omnis quae et.
                </p>
                <button className="mt-4 text-[18px] font-poppins font-medium text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </main>

        <aside className="w-full md:w-[200px] flex flex-col space-y-6">
          <div className="flex items-center border-[1px] border-[#000000] p-2 rounded-[4px] mb-4">
            <input
              type="text"
              className="flex-1 text-[14px] py-1"
              placeholder="Search"
            />
            <FaSearch className="black" />
          </div>

          <div>
            <h2 className="font-poppins font-medium text-[20px] leading-6 text-[#000000] mb-8">
              Categories
            </h2>
            <ul className="space-y-2">
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Crafts
              </li>
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Design
              </li>
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Handmade
              </li>
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Interior
              </li>
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Wood
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Page;
