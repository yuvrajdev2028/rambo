import React from 'react'

const IncomingReportCard = () => {
  return (
    <div className='border rounded-md my-4 w-1/2 mx-auto p-4'>
        <div className='flex justify-between mb-2'>
            <span className='font-bold text-green-600'>Sample Title</span>
            <span>17/01/2025</span>
        </div>
        <p className='mb-2'>Sample Description which is just long for the sake of filling space. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        <div className='flex justify-between'>
            <button className='border border-green-600 rounded-md py-2 px-4 hover:bg-green-600 hover:text-white'>Accept</button>
            <button className='border border-red-600 rounded-md py-2 px-4 hover:bg-red-600 hover:text-white'>Reject</button>
        </div>
    </div>
  )
}

export default IncomingReportCard