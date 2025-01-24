import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <div className='hero-section px-8 py-3 text-left flex flex-col gap-4'>
        <h3 className='text-5xl font-bold text-green-600'>Connecting compassion.</h3>
        <p className='font-thin text-3xl '>Rambo is a platform devoted to connecting compassionate volunteers to NGOs working to save lives of humankind's best freinds.</p>
        <div className='flex gap-2'>
          <button className='text-xl rounded-full px-4 py-2 bg-green-600 text-white hover:bg-green-700'>Get Started</button>
          <button className='text-xl border-2 border-green-600 rounded-full px-4 py-2 text-green-600 hover:text-green-700 hover:border-green-700'>Know More</button>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='key-features w-3/5'>
          <h3 className='text-4xl font-bold text-green-600 border-b-[6px] border-b-green-600 pb-2'>Key Features</h3>
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

      <div className='flex justify-center'>
        <div className='about-us w-3/5'>
          <h3 className='text-4xl font-bold text-green-600 border-b-[6px] border-b-green-600 pb-2'>About Us</h3>
          <p></p>
        </div>
      </div>

      <div className='h-[200px] bg-green-400 flex justify-between items-center px-10 '>
          <h2 className='text-4xl font-thin text-green-700'>Connect now to make a difference. Join Us.</h2>
          <div className='flex gap-3'>
            <button className='rounded-3xl px-4 py-2 text-white
            bg-green-700 hover:bg-green-600 transition-all'>Sign Up as a Volunteer</button>
            <button className='rounded-3xl px-4 py-2 text-white
            bg-green-700 hover:bg-green-600 transition-all'>Sign Up as an NGO</button>
          </div>
      </div>
    </div>
  )
}

export default Home