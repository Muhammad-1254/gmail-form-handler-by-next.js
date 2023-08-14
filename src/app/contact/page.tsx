'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Contact = () => {
  const formData = {
    name:'',
    email:"",
    company:"",
    message:""
  }
  const [user, setUser] = useState(formData);
  const [buttonDisalbed,setButtonDisalbed] = useState(true)
const [emailSent, setEmailSent] = useState<any>(null)
  

// sneding data to post api 

  const buttonHandler = async ()=>{
    try {
     await axios.post('/api/email',user)
    setEmailSent(true)  
    setUser(formData)
    } catch (error) {
      console.log(error);
      setEmailSent(false)
    }
    


  }

  useEffect(()=>{
    if(user.name.length > 0 && user.email.length > 0 && user.message.length > 0 ){
setButtonDisalbed(false)


    }else{
        setButtonDisalbed(true)
    }

  },[user])

  return (
  <div className="flex flex-col items-center justify-center gap-10  bg-gray-600  rounded text-black
  w-[40%] h-[80%]">
  
  {/* name  */}
  <div className='flex flex-col '>
    <label className='p-1 text-xl text-white'>name</label>
    <input className='text-base ' onChange={(e)=> setUser({...user,name:e.target.value})}
    type='text' placeholder='enter your name' required/>
    </div>  

 {/* email  */}
 <div className='flex flex-col '>
    <label className='p-1 text-xl text-white'>email</label>
    <input className='text-base ' onChange={(e)=> setUser({...user,email:e.target.value})}
    type='text' placeholder='enter your email' required/>
    </div>   


 {/* your company  */}
 <div className='flex flex-col '>
    <label className='p-1 text-xl text-white'>Company</label>
    <input className='text-base ' onChange={(e)=> setUser({...user,company:e.target.value})}
    type='text' placeholder='enter your Company' required/>
    </div>  

 {/* message  */}
 <div className='flex flex-col '>
    <label className='p-1 text-xl text-white'>message</label>
    <textarea className='text-base ' onChange={(e)=> setUser({...user,message:e.target.value})}
 placeholder='message' required/>
    </div>  

<div className='bg-orange-500 rounded-full w-[30%]  text-center'>
    <button onClick={buttonHandler} disabled={buttonDisalbed}
    className='px-5 py-1  text-white '>
        {buttonDisalbed ? "complete the field":"Submit here"}
    </button>
</div>


{/* email send  */}

{
   emailSent !== null &&(  emailSent == true ?(

    
<div className=' bg-green-500 text-white  px-3 py-1 rounded-full '>
    <p>
        your message is send
    </p>
</div>
):
<div className=' bg-red-500 text-white  px-3 py-1 rounded-full '>
    <p>
        Error occured!
    </p>
</div>
   )
}
  </div>
  )
};

export default Contact;
