import React from 'react'
import logo from '../assets/rambo-high-resolution-logo-transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faXTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='p-8 flex justify-between border-t-4 border-t-green-600'>
        <div>
            <img className='w-[180px] h-[60px]' src={logo}></img>
            <p className='text-green-600 font-thin text-xs w-[180px] text-center'>Connecting Compassion.</p>
        </div>
        <div>
            <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
            <h4 className='mb-2 hover:text-green-500'>Home</h4>
            <h4 className='mb-2 hover:text-green-500'>About</h4>
            <h4 className='hover:text-green-500'>Contact Us</h4>
        </div>
        {/* <div>
            <h3 className='font-semibold text-lg mb-4'>Get In Touch</h3>
            <h4 className='mb-2 hover:text-green-500'>Contact Us</h4>
            <h4 className='hover:text-green-500'>Newsletter</h4>
        </div> */}
        <div>
            <h3 className='font-semibold text-lg mb-4'>Follow Us</h3>
            <div className='flex gap-4 justify-center'>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
            </div>
        </div>
    </div>
  )
}

export default Footer