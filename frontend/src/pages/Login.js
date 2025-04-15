import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='login-container w-[30%] drop-shadow-md bg-white my-8 mx-auto p-4'>
      <h3 className='font-thin text-2xl mb-10 text-green-600'>LogIn</h3>
      <LoginForm/>
    </div>
  )
}

export default Login