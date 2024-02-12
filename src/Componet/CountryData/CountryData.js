import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowData from './ShowData';


const CountryData = () => {
    const [classDatas,setClassData]=useState([])
    const allData =useLoaderData()
    // console.log(allData[0])
    
    

//   useEffect(()=>{
//      fetch('fackdata.json')
//      .then(res=>res.json())
//      .then(data=>console.log(data))
//   },[])
  
    return (
        <div>
        {
           allData.map(data=><ShowData key={data.id} data={data}></ShowData>)
        }
            
        </div>
    );
};

export default CountryData;