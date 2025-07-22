import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-3/5 mx-auto'>

      <div className='hero-section text-left py-12 flex flex-col gap-4'>
        <h3 className='text-7xl font-bold text-green-600'>Connecting compassion.</h3>
        <p className='font-thin text-3xl '>Rambo is a platform devoted to connecting compassionate volunteers to NGOs working to save lives of humankind's best freinds.</p>
        <div className='flex gap-2'>
          <Link to='/signup'><button className='text-xl rounded-full px-4 py-2 bg-green-600 text-white hover:bg-green-700'>Get Started</button></Link>
          <Link to='/about'><button className='text-xl border-2 border-green-600 rounded-full px-4 py-2 text-green-600 hover:text-green-700 hover:border-green-700'>Know More</button></Link>
        </div>
      </div>

      <div>
        <div className='key-features mb-4'>
          <div className='relative text-center mb-4'>
            <h3 className='text-4xl font-bold text-green-600 pb-2'>Key Features</h3>
            <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </div>
          <div className='flex justify-center gap-3 m-3'>
            <div className='volunteers w-1/2'>
              <h4 className='text-xl font-semibold mb-2'>For Volunteers:</h4>
              <ul className='list-disc list-inside'>
                <li>Reoprt stray dogs requiring assistance.</li>
                <li>Track status of your reports.</li>
              </ul>
            </div>
            <div className='ngos w-1/2'>
              <h4 className='text-xl font-semibold mb-2'>For NGOs:</h4>
              <ul className='list-disc list-inside'>
                <li>Receive reports from volunteers.</li>
                <li>Respond timely to these reports.</li>
              </ul>
            </div>
          </div>
          <div className='m-3'>
            <h4 className='text-xl font-semibold mb-2'>Upcoming Features:</h4>
            <ul className='list-disc list-inside'>
              <li>Chat feature between Volunteers and NGOs.</li>
              <li>Platinum Volunteers Program.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className='about-us mb-4'>
          <div className='relative text-center mb-4'>
            <h3 className='text-4xl font-bold text-green-600 pb-2'>About Us</h3>
            <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </div>
          <p className='p-2'>At Rambo, we believe that every dog deserves care, safety, and love. Our platform connects compassionate volunteers with dedicated NGOs 
            to create a network of support for stray and injured dogs. By working together, we aim to rescue, rehabilitate, and provide a better future 
            for animals in need.Our platform empowers volunteers to report cases of dogs in distress, ensuring that help reaches them quickly and efficiently. 
            NGOs can respond to these reports, track cases, and provide real-time updates — creating a transparent and collaborative rescue process.</p>
        </div>
      </div>

      <div className='h-[200px] bg-gradient-to-tl from-green-500 via-transparent via-40% to-transparent flex flex-col justify-center gap-6 p-4'>
          <h2 className='text-4xl font-thin text-green-700'>Connect Now To Make A Difference. Join Us. One Rescue At A Time.</h2>
          <Link to='/signup'><button className='rounded-full px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-all'>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Home