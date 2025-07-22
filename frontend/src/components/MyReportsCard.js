import React from 'react'

const MyReportsCard = ({title,status,date,description,ngo,image}) => {
  return (
    <div className='bg-slate-900 rounded-md w-1/2 mx-auto my-4 p-4'>
        <div className='flex justify-between items-center mb-2'>
            <div className='font-bold text-green-600'>{title}</div>
            <div className='text-green-600 mb-2 bg-slate-800 p-2 rounded-lg'>{status.charAt(0).toUpperCase() + status.slice(1)}</div>
            <div>{date}</div>
        </div>
        <img src={image} alt='Submitted by you for this report.' className='w-1/4 mx-auto h-auto'/>
        <p className='mb-2'>{description}</p>
        <p className='font-medium text-green-600 mb-2'>{ngo}</p>
    </div>
  )
}

export default MyReportsCard