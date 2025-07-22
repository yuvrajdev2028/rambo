import React, {useContext, useState} from 'react'
import AuthContext from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
  const { login } = useContext(AuthContext);

  const [formData,setFormData] = useState({
      email:'',
      password:''
  });

  const [errorAlert,setErrorAlert] = useState(null);
  
  const changeHandler = (event)=>{
    const {name, value} = event.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }));
  };
  
  const submitHandler = async(event)=>{
    event.preventDefault();
    
    const result = await login(formData.email, formData.password);

    if(result===401){
      setErrorAlert('Invalid Email or Password.');
    }
    else if(result===500){
      setErrorAlert('Login failed! Please try again.');
    }
    else{
      setFormData({
        email:'',
        password:''
      })
    }
  }


  return (
      <form onSubmit={submitHandler} className='flex flex-col'>
        <label htmlFor='email' className='text-left text-sm font-semibold mb-2'>EMAIL</label>
        <input type='email' name='email' id='email' value={formData.email} onChange={changeHandler} className='bg-slate-950 p-2 focus:outline-none' placeholder='Email' required></input>

        <label htmlFor='password' className='text-left text-sm font-semibold mt-4 mb-2'>PASSWORD</label>
        <PasswordInput name={'password'} id={'password'} value={formData.password} changeHandler={changeHandler} placeholder={'Password'}/>

        <Link to='/forgot-password'><button type='button' className='text-xs mt-2 text-[#838383]'>Forgot Password?</button></Link>
        {(errorAlert)?<p className='text-xs text-red-600'>{errorAlert}</p>:<></>}
        <button type='submit' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all'>LogIn</button>
        <div className='text-xs text-[#838383] text-center'>
          <span>Don't have an account? </span>
          <Link to='/signup'><span className='underline text-green-600'>SignUp</span></Link>
        </div>
      </form>
  )
}

export default LoginForm