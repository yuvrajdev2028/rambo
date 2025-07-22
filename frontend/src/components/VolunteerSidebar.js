import React from 'react'
import SidebarTab from './SidebarTab'

const VolunteerSidebar = ({tab,setTab}) => {
  return (
    <div className='w-[12%] px-4 py-2'>
        <SidebarTab label={'Profile'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'Submit Report'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'My Reports'} tab={tab} setTab={setTab}/>
    </div>
  )
}

export default VolunteerSidebar