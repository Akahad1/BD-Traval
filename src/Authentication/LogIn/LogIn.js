import React from  "react";
import { Link } from "react-router-dom";

const LogIn =()=>{

  const getInformation=(event)=>{
    event.preventDefault()
    const form=event.target
    
    const email=form.email.value;
    
    const password=form.password.value;
    console.log(password,email)

  }
    return(<div>
       

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="text-xl text-center text-orange-500">Log In</h3>
    <p className="py-4"></p>
    <form onSubmit={getInformation}>
      <div className="flex justify-between">
        
       <p className="mr-52 text-orange-500">Email</p></div>
        
        <input name="email" className=" w-full p-1 mt-2 border border-zinc-800 rounded" placeholder="Please Enter your email"/>

        <div className="mt-5">
        <div className="flex justify-between text-orange-500">
          
       <p className="mr-44 text-orange-500">Password</p></div>
       
        <input name="password" className=" p-1 mt-2 w-full  border border-zinc-800 rounded" placeholder="Please Enter your Password"/>
          
        </div>

      <button className=" btn btn-sm mt-9  btn-info" type="submit">Submit</button>

    </form>
    <p className="divider"></p>


    <div>
    <p className="text-center text-2xl">Do not have an account?</p>
    
       
        <Link to='/singup'><p className="text-center mt-5 text-blue-800">Create an Account </p></Link>
     
    {/* <div className="modal-action">

</div> */}
    </div>


    <div className="modal-action">
      <form method="dialog">
       
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>)
}

export default LogIn;