import React from 'react';
import { Link } from 'react-router-dom';

const Navber=()=>{

  return ( <div >
    <div className="navbar lg:bg-[#e1e1e1] md:bg-[#e1e1e1] bg-white pt-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/blogs'>Blogs</Link></li>
        <li> <Link to='/'>Tour List</Link></li>
        <li> <Link to='/'>Room List</Link></li>
        <li className='lg:hidden md:hidden'> <Link to='/singup'>Sing Up</Link></li>
        <li className='lg:hidden md:hidden'><Link to='/login'>Log In</Link></li>

       
        
      </ul>
    </div>
    <a className=" lg:inline  md:inline hidden  ml-5 text-2xl">BD <span className='text-blue-600'>Travel</span></a>
  </div>

  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <p className='mr-10 text-xl'><Link to='/'>Home</Link></p>
        <p className='mr-10 text-xl'><Link to='/blogs'>Blogs</Link></p>
        <p className='mr-10 text-xl'><Link to='/'>Tour List</Link></p>
        <p className='mr-10 text-xl'><Link to='/'>Room List</Link></p>
        
    </ul>
  </div>
  <div className="navbar-end">
  <a className="btn btn-ghost lg:hidden  md:hidden text-xl">BD Travel</a>
  <p className='lg:inline md:inline hidden text-xl mr-10'><Link to='/singup'>Sign Up</Link></p>
  <p className='lg:inline md:inline hidden text-xl mr-10'><Link to='/login'>Log In</Link></p>
  </div>
</div>
    <div className='bg-[#e1e1e1]  flex justify-center lg:pb-32 md:pb-32 lg:pt-24 md:pt-24 pb-20 pt-16'>
      <div>
      <p className='text-xl mb-5 lg:ml-14 md:ml-12 ml-5 font-serif'>Destination</p>
      <p className='lg:text-5xl md:text-5xl text-3xl font-sans'>Bangladesh</p>

      </div>
      


    </div>

  </div>
  )

};

export default Navber;