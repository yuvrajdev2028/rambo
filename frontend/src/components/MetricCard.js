import React from 'react'

const MetricCard = ({heading,metric}) => {
  return (
    <div className='rounded-md p-2 bg-slate-900 shadow-green-600 shadow-md hover:shadow-green-600 hover:shadow-lg transition-shadow duration-300'>
        <h3 className='font-thin text-3xl text-green-600 mb-5'>{heading}</h3>
        <p className='font-bold text-5xl'>{metric}</p>
    </div>
  )
}

export default MetricCard