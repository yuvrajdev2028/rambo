import React from 'react'
import SidebarTab from './SidebarTab'

const VolunteerSidebar = ({tab,setTab}) => {
  return (
    <div className='border-r-4 border-r-green-600 min-w-fit px-4'>
        <SidebarTab label={'Profile'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'Submit Report'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'My Reports'} tab={tab} setTab={setTab}/>
    </div>
  )
}

export default VolunteerSidebar