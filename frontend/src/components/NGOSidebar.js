import React from 'react'
import SidebarTab from './SidebarTab'

const NGOSidebar = () => {
  return (
    <div>
        <SidebarTab label={"Dashboard"}/>
        <SidebarTab label={"Incoming Reports"}/>
        <SidebarTab label={"Active Cases"}/>
        <SidebarTab label={"Resolved Cases"}/>
        <SidebarTab label={"Profile"}/>
    </div>
  )
}

export default NGOSidebar