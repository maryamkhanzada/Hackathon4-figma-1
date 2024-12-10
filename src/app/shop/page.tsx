import React from 'react';
import Image from 'next/image';

const Shop = () => {
    return (
        <div>
        <Image src="/abc1.png" alt="abc" width={1000} height={1000} className="w-[1440px] h-[316px]"/>


        <div className="py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Image 1 */}
        <div className="relative  rounded-lg shadow-lg">
          <Image
            src="/table1.png" // Replace with your image path
            alt="table"
            width={500} // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="rounded-t-lg" // To round only the top corners
          />
          <div className="p-4 text-center">
            <p className="mb-4">Trenton modular sofa_3</p>
            <div className="mt-4 text-xl font-semibold">Rs 25,000.00</div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative rounded-lg shadow-lg">
          <Image
            src="/table2.png" // Replace with your image path
            alt="table"
            width={500} // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="rounded-t-lg" // To round only the top corners
          />
          <div className="p-4 text-center">
            <p className="mb-4">Granite dining table with dining chair</p>
            <div className="mt-4 text-xl font-semibold">Rs 25,000.00</div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative  rounded-lg shadow-lg">
          <Image
            src="/sideboard 1.png" // Replace with your image path
            alt="sideboard"
            width={500} // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="rounded-t-lg" // To round only the top corners
          />
          <div className="p-4 text-center">
            <p className="mb-4">Reclaimed teak Sideboard</p>
            <div className="mt-4 text-xl font-semibold">Rs 25,000.00</div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative  rounded-lg shadow-lg">
          <Image
            src="/plain5.png" // Replace with your image path
            alt="plain"
            width={500} // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="rounded-t-lg" // To round only the top corners
          />
          <div className="p-4 text-center">
            <p className="mb-4">Plain console_</p>
            <div className="mt-4 text-xl font-semibold">Rs 25,000.00</div>
          </div>
        </div>

        {/* Image 5 */}
        <div className="relative  rounded-lg shadow-lg">
          <Image
            src="/table3.png" // Replace with your image path
            alt="table"
            width={500} // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="rounded-t-lg" // To round only the top corners
          />
          <div className="p-4 text-center">
            <p className="mb-4">Outdoor bar table and stool</p>
            <div className="mt-4 text-xl font-semibold">Rs 25,000.00</div>
          </div>
        </div>
      </div>
    </div>



  
         
      </div>
    );
  }
  
  
  
  
 
  
  


export default Shop;