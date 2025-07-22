import React from 'react'
import logo from '../assets/rambo-high-resolution-logo-transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faXTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-3/5 bg-slate-950 mx-auto p-8 flex justify-between'>
        <div>
            <img className='w-[180px] h-[60px]' src={logo} alt='Logo of Rambo'></img>
            <p className='text-green-600 font-thin text-xs w-[180px] text-center'>Connecting Compassion.</p>
        </div>
        <div>
            <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
            <Link to='/'><h4 className='mb-2 hover:text-green-500 cursor-pointer'>Home</h4></Link>
            <Link to='/about'><h4 className='mb-2 hover:text-green-500 cursor-pointer'>About</h4></Link>
            <Link to='/contact-us'><h4 className='hover:text-green-500 cursor-pointer'>Contact Us</h4></Link>
        </div>
        {/* <div>
            <h3 className='font-semibold text-lg mb-4'>Get In Touch</h3>
            <h4 className='mb-2 hover:text-green-500'>Contact Us</h4>
            <h4 className='hover:text-green-500'>Newsletter</h4>
        </div> */}
        <div>
            <h3 className='font-semibold text-lg mb-4'>Follow Us</h3>
            <div className='flex gap-4 justify-center'>
                <a href='https://x.com/yuvraj_codes' target='_blank' rel='nopener noreferrer'><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer