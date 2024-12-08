import React from 'react';
import Image from 'next/image';
 const Login = () => {
    return (
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Log In
            </button>
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
              className= "w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring "
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>           
                
   </div>
    );
  }
 
  
  
 export default Login; 
  
  
  
  
  
  
  
  

  
  
