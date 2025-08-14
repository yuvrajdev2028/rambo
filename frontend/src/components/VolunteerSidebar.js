import React from 'react'
import SidebarTab from './SidebarTab'
import { FaRegUser } from "react-icons/fa6";
import { GrDocumentUser } from "react-icons/gr";
import { GrDocumentVerified } from "react-icons/gr";

const VolunteerSidebar = ({tab,setTab}) => {
  return (
    <div className='w-[200px] px-4 py-2'>
        <SidebarTab label={'Profile'} tab={tab} setTab={setTab} icon={<FaRegUser/>}/>
        <SidebarTab label={'Submit Report'} tab={tab} setTab={setTab} icon={<GrDocumentVerified/>}/>
        <SidebarTab label={'My Reports'} tab={tab} setTab={setTab} icon={<GrDocumentUser/>}/>
    </div>
  )
}

export default VolunteerSidebar