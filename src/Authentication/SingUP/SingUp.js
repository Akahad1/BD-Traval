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
      
      



    </div>)
}

export default SingUp;