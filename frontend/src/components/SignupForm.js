import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import OTPInput from './OTPInput';
import PasswordInput from './PasswordInput';
import UtilsContext from '../contexts/UtilsContext';
const apiUrl=process.env.REACT_APP_BASE_URL;

const SignupForm = () => {
  const navigate=useNavigate();
  const { isEmailValid, isPasswordValid } = useContext(UtilsContext);


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
      if(!isPasswordValid(formData.password)){
        throw new Error('Password not valid.')
      }
      else{
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
    }
    catch(error)
    {
      setErrorAlert(error.message);
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
        <label htmlFor='email' className='text-left text-sm font-semibold mb-2'>EMAIL ID</label>
        <input type='email' name='email' id='email' value={formData.email} onChange={changeHandler} className='bg-slate-950 p-2 focus:outline-none' placeholder='Email ID' required></input>

        {/* <button type='button' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all' onClick={sendOTPHandler}>Send OTP</button> */}

        {/* <OTPInput length={4} onOTPSubmit={onOTPSubmit} /> */}

        <label htmlFor='name' className='text-left text-sm font-semibold mt-4 mb-2'>NAME</label>
        <input type='text' name='name' id='name' value={formData.name} onChange={changeHandler} className='bg-slate-950 p-2 focus:outline-none' placeholder='Name' required></input>

        <label htmlFor='password' className='text-left text-sm font-semibold mt-4 mb-2'>PASSWORD</label>
        <PasswordInput name={'password'} id={'password'} value={formData.password} changeHandler={changeHandler} placeholder={'Password'}/>

        <ul className='list-inside list-disc text-xs mt-2'>
            <li>Password must be at least 8 characters long.</li>
            <li>It must contain at least 1 number, 1 special character, 1 capital letter and 1 small letter.</li>
            <li>Special characters allowed are '@', '#', '$', '%', '&'.</li>
        </ul>
        
        <label htmlFor='role' className='text-left text-sm font-semibold mt-4 mb-2'>ROLE</label>
        <select name='role' id='role' form='signup-form' onClick={changeHandler} className='bg-slate-950 p-2 focus:outline-none'>
          <option value='volunteer' selected>Volunteer</option>
          <option value='ngo'>NGO</option>
        </select>
        {(formData.role === 'ngo') ? <div className='flex flex-col'>
          <label htmlFor='location' className='text-left text-sm font-semibold mt-4 mb-2'>LOCATION</label>
          <input type='text' name='location' id='location' value={formData.location} onChange={changeHandler} className='bg-slate-950 p-2 focus:outline-none' placeholder='Location' required></input>
          <label htmlFor='about' className='text-left text-sm font-semibold mt-4 mb-2'>ABOUT</label>
          <textarea name='about' id='about' value={formData.about} onChange={changeHandler} className='bg-slate-950 p-2 focus:outline-none' placeholder='About' required />
          </div>
          : (<></>)}
        {(errorAlert)?<p className='text-xs text-red-600'>{errorAlert}</p>:<></>}
        <button type='submit' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all'>SignUp</button>
        <div className='text-xs text-[#838383] text-center'>
          <span>Already signed up? </span>
          <Link to='/login'><span className='underline text-green-600'>LogIn</span></Link>
        </div>
      </form>
  )
}

export default SignupForm