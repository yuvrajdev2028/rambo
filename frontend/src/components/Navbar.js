import React, { useContext } from 'react'
import logo from '../assets/rambo-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const Navbar = () => {
  const { user,logout } = useContext(AuthContext)
  return (
    <div className='py-2 px-8 border-b-4 border-b-green-600 flex justify-between bg-white'>
        <Link to='/'><img className='w-[120px] h-[40px]' src={logo} alt='Logo of Rambo with a vector of a dog and text Rambo written beside it.'/></Link>
        <div className='flex gap-3 text-green-600 items-center'>
            <Link to='/'><div className='hover:border-b-2 hover:border-b-green-600 hover:cursor-pointer transition-all'>Home</div></Link>
            <Link to='/about'><div className='hover:border-b-2 hover:border-b-green-600 hover:cursor-pointer transition-all'>About</div></Link>
            <Link to='/community'><div className='hover:border-b-2 hover:border-b-green-600 hover:cursor-pointer transition-all'> Community</div></Link>
        </div>
        {user?(
          <div className='flex gap-2 items-center'>
            <Link to='/dashboard'><button className='border-4 border-green-600 text-green-600 rounded-2xl px-3 hover:text-white hover:bg-green-600 transition-all'>Dashboard</button></Link>
            <Link to='/'><button onClick={()=>{logout()}} className='border-4 border-green-600 text-green-600 rounded-2xl px-3 hover:text-white hover:bg-green-600 transition-all'>Logout</button></Link>
          </div>):(
          <div className='flex gap-2 items-center'>
            <Link to='/login'><button className='border-4 border-green-600 text-green-600 rounded-2xl px-3 hover:text-white hover:bg-green-600 transition-all'>LogIn</button></Link>
            <Link to='/signup'><button className='border-4 border-green-600 text-green-600 rounded-2xl px-3 hover:text-white hover:bg-green-600 transition-all'>SignUp</button></Link>
          </div>
          )
        }
        
    </div>
  )
}

export default Navbar