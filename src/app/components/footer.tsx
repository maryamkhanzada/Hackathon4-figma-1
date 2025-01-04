import React from 'react'

const Footer = () => {
    return(
        <div className='w-full h-auto flex flex-col md:flex-row md:justify-evenly items-center pt-[10%] bg-[#FFFFFF]'>
            <div className='mb-6 md:mb-0'>
                <p className='w-[285px] h-auto text-center md:text-left font-poppins text-[16px] text-[#9F9F9F]'>
                    400 University Drive Suite 200 Coral Gables, FL 33134 USA
                </p>
            </div>
            <div className='mb-6 md:mb-0'>
                <h2 className='text-[#9F9F9F] mb-4 text-center md:text-left font-poppins text-[16px] font-medium'>Links</h2>
                <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>Home</p>
                <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>Shop</p>
                <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>About</p>
                <p className='text-[#000000] text-center md:text-left font-poppins text-[16px] font-medium'>Contact</p>
            </div>
            <div className='mb-6 md:mb-0'>
                <h2 className='text-[#9F9F9F] mb-4 text-center md:text-left font-poppins text-[16px] font-medium'>Help</h2>
                <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>Payment Options</p>
                <p className='text-[#000000] mb-2 text-center md:text-left font-poppins text-[16px] font-medium'>Returns</p>
                <p className='text-[#000000] text-center md:text-left font-poppins text-[16px] font-medium'>Privacy Policies</p>
            </div>
            <div className='mb-6 md:mb-0'>
                <h2 className='text-[#9F9F9F] mb-4 text-center md:text-left font-poppins text-[16px] font-medium'>Newsletter</h2>
                <div className='flex flex-col items-center md:items-start'>
                    <input 
                        type="email" 
                        placeholder='Enter Your Email Address' 
                        className='mb-2 w-[200px] text-[14px] text-[#9F9F9F] font-poppins border p-2 outline-none'
                    />
                    <button className='text-sm text-[#000000] font-poppins border p-2 bg-[#F5F5F5]'>
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;

