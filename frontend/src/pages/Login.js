import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='login-page flex-1 w-full flex items-center justify-center mx-auto'>
      <div className='login-container w-[30%] drop-shadow-md bg-slate-900 rounded-xl p-4'>
        <h3 className='font-thin text-2xl mb-10 text-green-600'>LogIn</h3>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login