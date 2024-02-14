import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css'

import { MdOutlineWatchLater } from "react-icons/md";
const ShowSpotData = ({SportData}) => {
    const {name,img1,Review,PriceIncludes,price}=SportData
    return (
        <div className='mb-10 ml-5 mr-5 '>
            <div className="card card-compact  bg-base-100 shadow-xl shadow-slate-500">
  <figure><img className='max-h-52 w-full' src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
   
    
    
    <Rating className='inline ' style={{ maxWidth: 90 }} value={Review} readOnly />
    <span className='inline text-xs'>({Review}Review)</span>
<p><MdOutlineWatchLater  className='inline' /> {PriceIncludes.slice(0,8) + ' 2 days'}</p>

<p ><span>From</span>  <span  className='text-xl'>$ {price}</span></p>
    
      
    </div>
  </div>
</div>
            
      
    );
};

export default ShowSpotData;