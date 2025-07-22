import React from 'react'
import SidebarTab from './SidebarTab'

const NGOSidebar = ({tab,setTab}) => {
  return (
    <div className='w-[12%] px-4 py-2'>
        <SidebarTab label={'Profile'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'Incoming Reports'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'Active Cases'} tab={tab} setTab={setTab}/>
        <SidebarTab label={'Resolved Cases'} tab={tab} setTab={setTab}/>
    </div>
  )
}

export default NGOSidebar