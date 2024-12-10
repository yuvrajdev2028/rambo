import React from 'react'
import img1 from '../assets/pexels-anna-guerrero-788383-2998933.jpg'
import img2 from '../assets/pexels-dildar-dizman-1861814188-28847550.jpg'
import img3 from '../assets/pexels-mikhail-nilov-7469213.jpg'
import img4 from '../assets/pexels-mikhail-nilov-7474346.jpg'

const Community = () => {
  return (
    <div>
    <h2 className='font-semibold text-2xl text-green-600 border-b-2 border-b-green-600 w-[35%] mx-auto mb-4 pb-2 mt-2'>Community</h2>
    <div className='flex gap-2 flex-wraps p-4'>
      <img className='h-[500px] w-[300px]' src={img1}></img>
      <img className='h-[500px] w-[300px]'  src={img2}></img>
      <img className='h-[500px] w-[300px]'  src={img3}></img>
      <img className='h-[500px] w-[300px]'  src={img4}></img>
    </div>
    </div>
  )
}

export default Community