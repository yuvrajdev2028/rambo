import React from 'react'
import SidebarTab from './SidebarTab'

const NGOSidebar = ({tab,setTab}) => {
  return (
    <div className='border-r-4 border-r-green-600 min-w-fit px-4'>
        <SidebarTab label={'Profile'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'Incoming Reports'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'Active Cases'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'Resolved Cases'} tab={tab} setTab={setTab}/>
    </div>
  )
}

export default NGOSidebar