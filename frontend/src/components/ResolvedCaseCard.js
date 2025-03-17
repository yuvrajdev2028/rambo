import React from 'react'

const ResolvedCaseCard = () => {
  return (
    <div className='border rounded-md my-4 w-1/2 mx-auto p-4'>
        <div className='flex justify-between mb-2'>
            <span className='font-bold text-green-600'>Sample Title</span>
            <span>17/01/2025</span>
        </div>
        <p className='mb-2'>Sample Description which is just long for the sake of filling space. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        <div>
            <h6 className='font-medium text-green-600 mb-2'>Response</h6>
            <p>Sample Response</p>
        </div>
    </div>
  )
}

export default ResolvedCaseCard