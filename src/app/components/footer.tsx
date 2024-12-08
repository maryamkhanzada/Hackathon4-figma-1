import React from 'react'

const Footer = () => {
    return(
       
        <div className='w-[1270px] h-[440px] flex justify-evenly pt-[10%] bg-[#FFFFFF]'>
         <div>
            <br />
            <br />
            <p className='w-[285px] h-[72px]  font-poppins text-[16px] text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</p>
         </div>
         <div>
            <h2 className='text-[#9F9F9F] mb-6 w-[40px] h-[24px] text-[16px] font-poppins wt-sm-w[500]'>Links</h2>
            <br />
            <p className=' text-[#000000] w-[48px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>Home</p>
            <br />
            <p className='  text-[#000000] w-[42px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>Shop</p>
            <br />
            <p className= '  text-[#000000] w-[49px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>About</p>
            <br />
            <p className='   text-[#000000] w-[66px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>Contact</p>
         </div>
         <div>
            <h2 className='  text-[#9F9F9F] w-[37px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>Help</h2>
            <br />
    <p className='  text-[#000000] w-[140px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>Payment Options</p>
    <br />
            <p className='  text-[#000000] w-[62px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>Returns</p>
            <br />
     <p className='  text-[#000000] w-[124px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>PrivacyPolicies</p>
         </div>
         <div>
            <h2 className='  text-[#9F9F9F] w-[86px] h-[24px] font-poppins text-[16px] wt-sm-w[500]'>Newsletter</h2>
            <br />
             <p> <input type="email" placeholder='Enter Your Email Address' className=' text-sm underline w-[173px] h-[21px] text-[14px] text-[#9F9F9F] wt-sm-w[500] font-poppins border-1px' /><span className='text-sm underline w-[75px] h-[21px] font-poppins text-[#000000] text-[14px] wt-sm-w[500]'>SUBSCRIBE</span></p>
          
         </div>
        </div>
       
    )
}

export default Footer;