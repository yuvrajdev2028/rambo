import React from 'react'
import VolunteerSidebar from './VolunteerSidebar'
import VolunteerDisplay from './VolunteerDisplay'

const VolunteerDashboard = () => {
  return (
    <div className='flex'>
        <VolunteerSidebar/>
        <VolunteerDisplay/>
    </div>
  )
}

export default VolunteerDashboard