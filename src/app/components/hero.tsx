import React from 'react';
import Card from './card';
import Image from 'next/image';







const CardDetails = () =>{
        const data=[
            {
                id:1,
                img:"/sofa.png",
                title:"Side table",
                view:"view more",
                
            },
            {
                id:2,
                img:"/table.png",
                title:"Side table",
                view:"view more",
            },
          
        ]
    return(
        <div className='flex  w-[1250px] h-[750px]  ml-[300px] mt-[-10px]'>
        {data.map((item)=> (
    
     <Card
     key= {item.id}
     img={item.img}
     title={item.title}
     view={item.view}
     
    ></Card>
        ))}
     </div>
  
    )
}
  export default CardDetails;



  export const Hero = () => {
    return(

        <div className="flex flex-col md:flex-row items-center gap-8 p-8">
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










   