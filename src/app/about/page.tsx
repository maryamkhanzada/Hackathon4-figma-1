import React from 'react';
import Image from 'next/image';

 const Login = () => {
    return (
      <body className='bg-[#ffffff]'>
      
        <div>
          
            <Image src="/abc1.png" alt="abc" width={1000} height={1000} className="w-[1440px] h-[316px]"/>
            
            <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Container for both forms */}
      <div className="flex w-full max-w-6xl space-x-8">
        {/* Login Form */}
        <div className="w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Log In</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username or Email Address
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username or email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <div className='flex justify-start items-center p-8'>
            <button
            type='submit'
              
              
              className="w-full bg-blue-600 text-[#000000] py-2 px-4 rounded hover: bg-white-200 focus:outline-none focus:ring focus:ring-blue-300"
          
            
            >
              Log In
            </button>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className="w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Register</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring "
              />
            </div>
            <div className="mb-6">
              <p className="text-sm text-[#000000] mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm text-[#000000] mb-6">
                <span className="font-600 text-[#000000]">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                </span>
              </p>
            </div>
            <button
              type="submit"
              className= "w-full bg-blue-600 text-[#000000] py-2 px-4 rounded hover: bg-white-200 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      

        </div>
       
         {/* Feature Section */}
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-8">
        {/* Free Delivery Section */}
        <div className="flex-1 text-left">
          <h2
            className="text-[#000000] text-2xl font-bold mb-4"
            style={{ width: '205px', height: '48px' }}
          >
            Free Delivery
          </h2>
          <p className='text-[#9F9F9F]'>For all orders over $50 consectetur adipiscing elit.</p>
        </div>

        {/* 90 Days Return Section */}
        <div className="flex-1 text-left">
          <h2
            className="text-[#000000] text-2xl font-bold mb-4"
            style={{ width: '205px', height: '48px' }}
          >
            90 Days Return
          </h2>
          <p className='text-[#9F9F9F]'>If goods have problems consectetur adipiscing elit.</p>
        </div>
         {/* Secure Payment Section */}
         <div className="flex-1 text-left">
          <h2
            className="text-[#000000] text-2xl font-bold mb-4"
            style={{ width: '205px', height: '48px' }}
          >
            Secure Payment
          </h2>
          <p className='text-[#9F9F9F]'>100% secure payment consectetur adipiscing elit.</p>
         
        </div>
        </div>

    
          
   
           
        
   </div>
   </body>
   
   
    );
  }
 
  
  
 export default Login; 
  
  
  
  
  
  
  
  

  
  
