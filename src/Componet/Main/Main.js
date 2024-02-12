import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main=()=>{
    return(
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}
export default Main