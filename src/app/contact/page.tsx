import React from 'react'
import Image from 'next/image';

const Contact = () => {
    return(
    <div>
        <Image src="/abc1.png" alt="abc" width={1000} height={1000} className='w-[1440px] h-[316px]'/>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-8">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-bold mb-4">Get in Touch with Us</h1>
        <p className="mb-8">
          For more information about our product and services, please feel free to drop us an email. Our staff is always there to help you out. Do not hesitate!
        </p>
        <h2 className="text-xl font-bold mb-2">Address</h2>
        <p className="mb-6">236 5th SE Avenue, New York, NY 10000, United States</p>
        <h2 className="text-xl font-bold mb-2">Phone</h2>
        <p className="mb-6">Mobile: +(84) 546-6789</p>
        <p className="mb-6">Hotline: +(84) 456-6789</p>
        <h2 className="text-xl font-bold mb-2">Working Time</h2>
        <p className="mb-2">Monday - Friday: 9:00 - 22:00</p>
        <p>Saturday - Sunday: 9:00 - 21:00</p>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
        <form className="flex flex-col gap-4">
          <label className="block">
            <span className="text-gray-700">Your Name</span>
            <input
              type="text"
              placeholder="Abc"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email Address</span>
            <input
              type="email"
              placeholder="abc@def.com"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Subject</span>
            <input
              type="text"
              placeholder="This is optional"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              placeholder="Hey, I'd like to ask about..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
     </div>
      
      
      
      
      
      
      
      
    )
}   


export default Contact;