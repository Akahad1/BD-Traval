import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const SingUp=()=>{
  const {createEmailPassword}=useContext(AuthContext)

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
   
  };

  const [errormessages,seterrormessges]=useState('')

  const getInformation=(event)=>{

    event.preventDefault()
    const form=event.target;
    const username=form.username.value;
    const firstname=form.firstname.value;
    const lastname=form.lastname.value;
    const password=form.password.value;
    const confrimpassworld=form.confrimpassworld.value;
    const BirthDate=form.BirthDate.value;
    const email=form.email.value;
    const Country=form.Country.value;
   

    console.log(username,password,confrimpassworld,BirthDate,Country,isChecked,email,firstname,lastname)

    createEmailPassword(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
      form.reset()
    })
    .catch(error=>{console.log(error)
      const messages =error.message;
      seterrormessges(messages)
     
    })
    seterrormessges('')

  }
 
    
    return(
    <div>
        <div className='bg-[#e1e1e1]  flex justify-center lg:pb-32 md:pb-32 lg:pt-24 md:pt-24 pb-20 pt-16'>
      <div>
      
      <p className='lg:text-5xl md:text-5xl text-3xl font-sans'>Register</p>

      </div>
    </div>

    <div className=" flex justify-center mt-20 mb-10">
      <form  onSubmit={getInformation}>

        <p className="text-xl">Username*</p>
        <input name='username'required className="border border-spacing-10 border-gray-400 mt-3 p-2  lg:w-80 w-80" placeholder="Enter your Username"></input>
        {/* 1 */}
        <div className=" lg:flex md:flex mt-5 ">
          <div className="">
          <p className="text-xl">Password*</p>
          <input name="password" className="border border-spacing-10 border-gray-400 mt-3 p-2 w-80 " type="password" required ></input>
          </div>
          <div className="lg:ml-10 md:ml-6">
            <p className="text-xl">Confrim Password</p>
            <input name="confrimpassworld" type="password" className="border border-spacing-10 border-gray-400 mt-3 p-2 w-80"></input>
          </div>
        
        </div>
        {/* 2 */}

        <div className=" lg:flex md:flex mt-5 ">
          <div className="">
          <p className="text-xl">First Name*</p>
          <input name="firstname" className="border border-spacing-10 border-gray-400 mt-3 p-2 w-80 "  ></input>
          </div>
          <div className="lg:ml-10 md:ml-6">
            <p className="text-xl">Last Name</p>
            <input name="lastname" className="border border-spacing-10 border-gray-400 mt-3 p-2 w-80"></input>
          </div>
        
        </div>
        {/* 3 */}
        <div className=" lg:flex md:flex mt-5 ">
          <div className="">
          <p className="text-xl">Birth Date*</p>
          <input name="BirthDate" type="date" className="border border-spacing-10 border-gray-400 mt-3 p-2 w-80 "  ></input>
          </div>
          <div className="lg:ml-10 md:ml-6">
            <p className="text-xl">Email*</p>
            <input name="email" type="email" className="border border-spacing-10 border-gray-400 mt-3 p-2 w-80" required></input>
          </div>
        
        </div>
          {/* 4 */}
          <div className=" lg:flex md:flex mt-5 ">
          <div className="">
          <p className="text-xl">Phone*</p>
          <input name="phone" type="number" className="border border-spacing-10 border-gray-400 mt-3 p-2 w-80 "  ></input>
          </div>
          <div className="lg:ml-10 md:ml-6">
            <p className="text-xl">Country</p>
            <input name="Country" type="Country" className="border border-spacing-10 border-gray-400 mt-3 p-2 w-80"></input>
          </div>
        
        </div>
        <div><p className="text-red-500">{errormessages}</p></div>

        <label >
          <input onChange={handleCheckboxChange} className="mt-10 " type="checkbox"  name="checkbox" />   Terms of Service and Privacy Statement.
        </label>

        <button type="submit" className={isChecked?'btn mt-10 w-full btn-info':'btn mt-10 w-full btn-info btn-disabled'}>Sing Up</button>
      </form>
    </div>

       
      



    </div>)
}

export default SingUp;