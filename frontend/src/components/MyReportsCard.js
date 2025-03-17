import React from 'react'

const MyReportsCard = () => {
  return (
    <div className='border rounded-md my-4 w-1/2 mx-auto p-4'>
        <div className='flex justify-between mb-2'>
            <span className='font-bold text-green-600'>Sample Title</span>
            <span className='text-green-600 mb-2'>Resolved</span>
            <span>17/01/2025</span>
        </div>
        <p className='mb-2'>Sample Description which is just long for the sake of filling space. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        <p className='font-medium text-green-600 mb-2'>Sample NGO Name</p>
    </div>
  )
}

export default MyReportsCard