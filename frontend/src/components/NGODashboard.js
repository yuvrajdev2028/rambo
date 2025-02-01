import React from 'react'
import NGOSidebar from './NGOSidebar'
import NGODisplay from './NGODisplay'

const NGODashboard = () => {
  return (
    <div className='flex'>
        <NGOSidebar/>
        <NGODisplay/>
    </div>
  )
}

export default NGODashboard