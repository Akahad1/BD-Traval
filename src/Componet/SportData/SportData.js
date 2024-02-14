import React, { useEffect, useState } from 'react';
import ShowSpotData from './ShowSpotData';

const SportData = () => {

    const [AllSportData,setSportData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/sportdata')
        .then(res=>res.json())
        .then(data=>setSportData(data))
    },[])
    const sliceSoprtData=AllSportData.slice(0,6)
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-24 lg:mr-20 mt-20 '>
            {
                sliceSoprtData.map(SportData=><ShowSpotData
                SportData={SportData}
                key={SportData.codeid}
                ></ShowSpotData>)
            }
            </div>
        </div>
    );
};

export default SportData;