import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
const apiUrl=process.env.REACT_APP_BASE_URL;

const SignupForm = () => {
  const navigate=useNavigate();

  const [errorAlert,setErrorAlert] = useState(null);

  const [formData,setFormData] = useState({
    email:'',
    name:'',
    password:'',
    role:'volunteer',
    location:'',
    about:''
  });

  const changeHandler = (event)=>{
    const {name, value} = event.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }));
  };

  const submitHandler = async(event)=>{
    event.preventDefault();
    try{
      console.log(formData)
      const request=new Request(`${apiUrl}/signup`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
      });
      console.log(`req.body sent is: ${request.body}`);
      const response=await fetch(request);
      console.log(response);
      if(response.status===201){
        navigate('/login')
      }
      else{
        throw new Error('Signup Failed!')
      }
    }
    catch(error)
    {
      console.log('Errors Occured!!!')
      console.log(error);

    }
  
    setFormData({
      email:"",
      name:"",
      password:"",
      role:"volunteer",
      location:'',
      about:''
    })
    const selectRole = document.querySelector('#role');
    selectRole.selectedIndex=0;
  }

  return (
      <form id='signup-form' onSubmit={submitHandler} className='flex flex-col'>
        <label htmlFor='email' className='text-left text-sm font-semibold'>EMAIL ID</label>
        <input type='email' name='email' id='email' value={formData.email} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Email ID' required></input>

        <label htmlFor='name' className='text-left text-sm font-semibold mt-2'>NAME</label>
        <input type='text' name='name' id='name' value={formData.name} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Name' required></input>
        <label htmlFor='password' className='text-left text-sm font-semibold mt-2'>PASSWORD</label>
        <input type='password' name='password' id='password' value={formData.password} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Password' required></input>
        <label htmlFor='role' className='text-left text-sm font-semibold mt-2'>ROLE</label>
        <select name='role' id='role' form='signup-form' onClick={changeHandler} className='bg-[#EFF0F2] p-2'>
          <option value='volunteer' selected>Volunteer</option>
          <option value='ngo'>NGO</option>
        </select>
        {(formData.role === 'ngo') ? <div className='flex flex-col'>
          <label htmlFor='location' className='text-left text-sm font-semibold mt-2'>LOCATION</label>
          <input type='text' name='location' id='location' value={formData.location} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Location' required></input>
          <label htmlFor='about' className='text-left text-sm font-semibold mt-2'>ABOUT</label>
          <textarea name='about' id='about' value={formData.about} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='About' required />
          </div>
          : (<></>)}
        {}
        <button type='submit' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all'>SignUp</button>
        <div className='text-xs text-[#838383] text-center'>
          <span>Already signed up? </span>
          <Link to='/login'><span className='underline text-green-600'>LogIn</span></Link>
        </div>
      </form>
  )
}

export default SignupForm