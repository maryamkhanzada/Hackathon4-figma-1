import React from 'react'
import Image from 'next/image';
interface Propstype{
    img:string;
    title:string;
    view:string;
   
}

const Card:React.FC<Propstype>= ({img,title,view,}) => {
    return(
        <div>
            <div className=' text-[#000000]'>
                <div><Image src={img} alt="card" width={500} height={500} className='w-[400px] h-[420px] text-[#000000] p-[20px]'/> </div>
                <h2>{title}</h2>
                <p>{view}</p>
               
            </div>
           
        </div>
    )
}

export default Card;
