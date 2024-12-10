import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-[200px] bg-green-600'>
            <input className='p-2 rounded-l-3xl border-r-2 border-r-[#cdcdcd] drop-shadow-md' type='text' placeholder='Location'></input>
            <input className='p-2 rounded-r-3xl w-[25%] drop-shadow-md' type='search' placeholder='Enter the name of NGO or Doctor'></input>
            <button className='px-4 py-2 bg-white text-green-700 rounded-3xl ml-4 hover:text-white hover:bg-green-700 transition-all drop-shadow-md'>Search</button>
        </div>
        <div className='bg-green-400 py-4'>
          <h3 className='font-thin text-xl border-b-4 border-b-green-600 w-[30%] mx-auto mb-4'>Make a Post</h3>
          <form action='#' className='flex flex-col w-[30%] mx-auto items-start'>
            <label className='mb-2' for='post-desc-input'>Post Description:</label>
            <textarea className='resize-none p-2' name='post-desc-input' id='post-desc-input' rows={6} cols={50}></textarea>
            <label className='mb-2 mt-4' for='post-img-input'>Upload an image:</label>
            <input type='file' name='post-img-input' id='post-img-input'></input>
            <button className='rounded-3xl bg-green-700 px-4 py-2 text-white hover:bg-green-600 mt-4' type='submit'>Post</button>
          </form>
        </div>
        <div className='p-8'>
          <h3 className='font-bold text-2xl mb-4'>Top NGOs</h3>
          <Carousel isNGO={true}/>
        </div>
        <div className='p-8'>
          <h3 className='font-bold text-2xl mb-4'>Top Vets</h3>
          <Carousel isNGO={false}/>
        </div>
        <div className='h-[200px] bg-green-400 flex justify-between items-center px-10 '>
            <h2 className='text-4xl font-thin text-green-700'>Contribute to saving Dogs. Contribute to saving Society.</h2>
            {/* <Link to='/community'> */}
            <button className='rounded-3xl px-4 py-2 text-white
             bg-green-700 hover:bg-green-600 transition-all'>Contribute</button>
             {/* </Link> */}
        </div>
    </div>
  )
}

export default Home