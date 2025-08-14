import React, { useContext, useState } from 'react'
import logo from '../assets/rambo-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const { user,logout } = useContext(AuthContext)
  const [menuVisible,setMenuVisible] = useState(false);
  return (
    <div className='bg-slate-950 sticky top-0 z-[1]'>
      <div className='md:w-3/5 mx-auto min-[900px]:block hidden'>
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
      <div className='md:w-3/5 mx-auto min-[900px]:hidden flex py-2 max-[768px]:px-8 items-center'>
        <div>
          <div className='text-green-600' onClick={()=>{setMenuVisible(true)}}><FontAwesomeIcon icon={faBars} /></div>
          {menuVisible && <div className='bg-green-600 w-[200px] min-[900px]:hidden z-[20] absolute top-0'>
            <div className='p-2' onClick={()=>{setMenuVisible(false)}}>
              <FontAwesomeIcon icon={faClose} />
            </div>
            <Link to='/'><h3 className='text-white border-b-2 border-white p-2 hover:bg-gradient-to-t from-green-800 via-green-700 to-green-600' onClick={()=>{setMenuVisible(false)}}>Home</h3></Link>
            <Link to='/about'><h3 className='text-white border-b-2 border-white p-2 hover:bg-gradient-to-t from-green-800 via-green-700 to-green-600' onClick={()=>{setMenuVisible(false)}}>About Us</h3></Link>
            <Link to='/contact-us'><h3 className='text-white border-b-2 border-white p-2 hover:bg-gradient-to-t from-green-800 via-green-700 to-green-600' onClick={()=>{setMenuVisible(false)}}>Contact Us</h3></Link>
            {user?(
              <>
              <Link to='/dashboard'><h3 className='text-white border-b-2 border-white p-2 hover:bg-gradient-to-t from-green-800 via-green-700 to-green-600' onClick={()=>{setMenuVisible(false)}}>Dashboard</h3></Link>
              <Link to='/logout'><h3 className='text-white p-2 hover:bg-gradient-to-t from-green-800 via-green-700 to-green-600' onClick={()=>{setMenuVisible(false)}}>Logout</h3></Link>
              </>):(
              <>
              <Link to='/login'><h3 className='text-white border-b-2 border-white p-2 hover:bg-gradient-to-t from-green-800 via-green-700 to-green-600' onClick={()=>{setMenuVisible(false)}}>LogIn</h3></Link>
              <Link to='/signup'><h3 className='text-white p-2 hover:bg-gradient-to-t from-green-800 via-green-700 to-green-600' onClick={()=>{setMenuVisible(false)}}>SignUp</h3></Link>
              </>
            )}
            
            </div>}
        </div>
        <div className='flex justify-center items-center w-full'>
          <Link to='/'><img className='w-[120px] h-[40px]' src={logo} alt='Logo of Rambo with a vector of a dog and text Rambo written beside it.'/></Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent z-10"></div>
    </div>

  )
}

export default Navbar