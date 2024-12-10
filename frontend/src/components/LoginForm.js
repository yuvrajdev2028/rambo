import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'

const LoginForm = () => {
  return (
      <form action='#' className='flex flex-col'>
        <label for='username' className='text-left text-sm font-semibold'>USERNAME</label>
        <input type='text' name='username' id='username' className='bg-[#EFF0F2] p-2' placeholder='Username'></input>
        <label for='password' className='text-left text-sm font-semibold mt-2'>PASSWORD</label>
        <input type='text' name='password' id='password' className='bg-[#EFF0F2] p-2' placeholder='Password'></input>
        <button className='text-right text-xs mt-2 text-[#838383]'>Forgot Password?</button>
        <button type='submit' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all'>LogIn</button>
        <div className='flex items-center justify-between mb-10 mt-5'>
          <div className='h-[2px] bg-[#EFF0F2] w-[45%]'></div>
          <div className='text-xs text-[#838383]'>OR</div>
          <div className='h-[2px] bg-[#EFF0F2] w-[45%]'></div>
        </div>
        <div>
          <h5 className='text-xs text-[#838383]'>Log In Using</h5>
          <div className='mt-3'>
          <FontAwesomeIcon icon={faGoogle} />
          </div>
        </div>
      </form>
  )
}

export default LoginForm