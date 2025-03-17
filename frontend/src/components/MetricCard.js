import React from 'react'

const MetricCard = ({heading,metric}) => {
  return (
    <div className='border rounded-md p-2'>
        <h3 className='font-bold text-green-600 mb-5'>{heading}</h3>
        <p>{metric}</p>
    </div>
  )
}

export default MetricCard