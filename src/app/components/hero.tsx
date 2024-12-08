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
        <div>
             <Image src= "/bigsofa.png" alt="big" width={800} height={800} className="ml-[10px]"/> 

            <div>
                <h2 className='w-[149px] h-[36px]  text-[24px] text-center sm:text-left ml-[920px] text-[#000000]  font-poppins'>New Arrivals</h2>
                <p className='w-[331px] h-[72px] text-[48px] text-center sm:text-left  ml-[850px] font-poppins text-[#000000]'>Asgaard sofa</p>
                <button className='w-[106px] h-[30px] ml-[850px] text-center sm:text-left  text-[20px] font-poppins text-[#000000]'>Order Now</button>
            </div>
        </div>
    )
  }