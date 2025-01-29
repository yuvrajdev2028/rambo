import React, { useState } from 'react'
import SidebarTab from './SidebarTab'

const VolunteerSidebar = () => {
    // const [isActive,setIsActive] = useState(true);
  return (
    <div>
        <SidebarTab label={"Dashboard"}/>
        <SidebarTab label={"Submit Report"}/>
        <SidebarTab label={"My Reports"}/>
        <SidebarTab label={"Profile"}/>
    </div>
  )
}

export default VolunteerSidebar