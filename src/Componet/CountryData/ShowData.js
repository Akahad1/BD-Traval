import React from 'react';
import { addtocart, removeDb } from '../../Router/fackdb';

const ShowData = ({data}) => {
    
    const {title,userId,id}=data
    const addcart=(id)=>{
       
        // localStorage.setItem(1,id)
        addtocart(id)

    }

    const removecart=(id)=>{
        removeDb(id)
       

    }

    return (
        <div className='flex justify-center'>
            <div className='mt-10 border border-zinc-800 p-4 h-52 w-72'>
             <p >UserId:{userId}</p>
             <p>Id:{id}</p>
            <p className=''>{title}</p>
            <button className='btn btn-info' onClick={()=>addcart(id)}>add data</button>
            <button className='btn btn-info' onClick={()=>removecart(id)}>Remove data</button>
           
        </div>
        </div>
    );
};

export default ShowData;