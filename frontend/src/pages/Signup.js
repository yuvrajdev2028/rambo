import React from 'react'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className='login-container w-[30%] drop-shadow-md bg-white my-8 mx-auto p-4'>
      <h3 className='font-thin text-2xl mb-10 text-green-600'>SignUp</h3>
      <SignupForm/>
    </div>
  )
}

export default Signup