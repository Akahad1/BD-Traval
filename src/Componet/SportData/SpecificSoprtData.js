import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { MdOutlineWatchLater } from 'react-icons/md';


  

const SpecificSoprtData = () => {
    const {name,Review,Detail,PriceIncludes,img1,img2,img3,img4,img5,price}=useLoaderData()
    console.log(name)
    
    return (
        <div>

            <div className='lg:ml-20 mb-20 mt-20 md:ml-5'>
                <p className='text-5xl'>{name}</p>
                <Rating className='inline mt-5 ' style={{ maxWidth: 100 }} value={Review} readOnly />
    <span className='inline text-xs'>({Review}Review)</span>

    <p className='mt-5'><MdOutlineWatchLater  className='inline h-10 w-10' /> {PriceIncludes.slice(0,8) + ' 2 days'}</p>

    <div className='grid lg:grid-cols-10 md:grid-cols-10 mt-12 grid-cols-6'>
        <div className=' grid md:col-span-6 lg:col-span-6 col-span-6 lg:mr-0 md:ml-0 lg:ml-0 md:mr-0 mr-3 ml-3 md:mb-0 lg:mb-0 mb-5'>
            <img className='w-full' src={img1} alt=''></img>
        </div>
        <div className='grid md:col-span-2 lg:col-span-2 mr-3 ml-3 col-span-3'>
            <img className='h-full' src={img2} alt=''></img>
            <img src={img4} className='h-full mt-1' alt=''></img>
            

        </div>
        <div className='grid md:col-span-2 lg:col-span-2 mr-5 col-span-3'>
            <img className='h-full' src={img3} alt=''></img>
            <img  className='h-full mt-1'src={img5} alt=''></img>

        </div>
        
    </div>
    <div className='grid grid-cols-10'>
           <div className='grid col-span-6'>
           <p className='text-2xl mt-5 mb-5'>Detail</p>
            <p className='text-xl'>{Detail}</p>

           </div>
           <div className='grid col-span-4'>
            <form>
                <p>From <span>{price}</span></p>
               
            </form>

           </div>
        </div>

            </div>
            
        </div>
    );
};

export default SpecificSoprtData;