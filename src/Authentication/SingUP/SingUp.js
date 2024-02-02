import React from "react";



const SingUp=()=>{
    const getInformation=(event)=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value;
        const email=form.email.value;
        const phoneNumber=form.phoneNumber.value;
        const password=form.password.value;
        console.log(name,password,email,phoneNumber)
    
      }
    return(
    <div>
       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="text-xl text-center text-orange-500">Log In</h3>
    <p className="py-4"></p>
    <form onSubmit={getInformation}>
      <div className="flex justify-between"><p className="text-orange-500">Name</p>
       <p className="mr-52 text-orange-500">Email</p></div>
        <input name="name" className="p-1 border border-zinc-800 rounded" placeholder="Please Enter your Name"/> 
        <input name="email" className="ml-6 p-1 mt-2 border border-zinc-800 rounded" placeholder="Please Enter your email"/>

        <div className="mt-10">
        <div className="flex justify-between text-orange-500"><p>Phone-Number</p>
       <p className="mr-44 text-orange-500">Password</p></div>
        <input name="phoneNumber" className="p-1 border border-zinc-800 rounded" placeholder="Please Enter your phoneNumber"/> 
        <input name="password" className="ml-8 p-1 mt-2 border border-zinc-800 rounded" placeholder="Please Enter your Password"/>
          
        </div>

      <button className="btn-sm mt-9 btn-ghost" type="submit">Submit</button>

    </form>
    <div className="modal-action">
      <form method="dialog">
       
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      



    </div>)
}

export default SingUp;