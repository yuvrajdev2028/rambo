import React,{useState} from 'react'
import VolunteerSidebar from './VolunteerSidebar'
import VolunteerDisplay from './VolunteerDisplay'

const VolunteerDashboard = () => {
    const [tab,setTab] = useState('Profile');
  return (
    <div className='flex h-full'>
        <VolunteerSidebar tab={tab} setTab={setTab}/>
        <VolunteerDisplay tab={tab} setTab={setTab}/>
    </div>
  )
}

export default VolunteerDashboard