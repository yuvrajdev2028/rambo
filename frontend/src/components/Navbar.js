import React, { useContext } from 'react'
import logo from '../assets/rambo-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const Navbar = () => {
  const { user,logout } = useContext(AuthContext)
  return (
    <div className='bg-slate-950 sticky top-0 z-[1]'>
      <div className='w-3/5 mx-auto'>
        <div className='flex justify-between bg-gradient-to-r from-transparent via-slate-900 to-transparent py-2'>
          <Link to='/'><img className='w-[120px] h-[40px]' src={logo} alt='Logo of Rambo with a vector of a dog and text Rambo written beside it.'/></Link>
          <div className='flex gap-3 text-green-600 items-center'>
              <Link to='/'><div className='hover:border-b-2 hover:border-b-green-600 hover:cursor-pointer transition-all'>Home</div></Link>
              <Link to='/about'><div className='hover:border-b-2 hover:border-b-green-600 hover:cursor-pointer transition-all'>About</div></Link>
              <Link to='/contact-us'><div className='hover:border-b-2 hover:border-b-green-600 hover:cursor-pointer transition-all'>Contact Us</div></Link>
          </div>
          {user?(
            <div className='flex gap-2 items-center'>
              <Link to='/dashboard'><button className='rounded-full px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-all'>Dashboard</button></Link>
              <Link to='/'><button onClick={()=>{logout()}} className='rounded-full px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-all'>Logout</button></Link>
            </div>):(
            <div className='flex gap-2 items-center'>
              <Link to='/login'><button className='rounded-full px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-all'>LogIn</button></Link>
              <Link to='/signup'><button className='rounded-full px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-all'>SignUp</button></Link>
            </div>
            )
          }
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
    </div>
  )
}

export default Navbar