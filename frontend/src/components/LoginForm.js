import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom';


const apiUrl = process.env.REACT_APP_BASE_URL;

const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
      email:"",
      password:""
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
        // console.log(`entry sent is: ${entry}`);
        console.log(formData)
        const request=new Request(`${apiUrl}/login`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData),
        });
        console.log(`req.body sent is: ${request.body}`);
        const response=await fetch(request);
        console.log(response);
        if(response.status===200){
          setIsLoggedIn(true);
          navigate('/dashboard');
        }
      }
      catch(error)
      {
        console.log('Errors Occured!!!')
        console.log(error);
      }
      setFormData({
        email:'',
        password:''
      })
    }


  return (
      <form onSubmit={submitHandler} className='flex flex-col'>
        <label htmlFor='email' className='text-left text-sm font-semibold'>EMAIL</label>
        <input type='email' name='email' id='email' value={formData.email} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Email' required></input>
        <label htmlFor='password' className='text-left text-sm font-semibold mt-2'>PASSWORD</label>
        <input type='password' name='password' id='password' value={formData.password} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Password' required></input>
        <button className='text-right text-xs mt-2 text-[#838383]'>Forgot Password?</button>
        <button type='submit' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all'>LogIn</button>
        <div className='flex items-center justify-between mb-10 mt-5'>
          <div className='h-[2px] bg-[#EFF0F2] w-[45%]'></div>
          <div className='text-xs text-[#838383]'>OR</div>
          <div className='h-[2px] bg-[#EFF0F2] w-[45%]'></div>
        </div>
        <div className='flex flex-col items-center'>
          <h5 className='text-xs text-[#838383]'>Log In Using</h5>
          <div className='mt-3 text-green-600'>
          <FontAwesomeIcon icon={faGoogle} />
          </div>
        </div>
      </form>
  )
}

export default LoginForm