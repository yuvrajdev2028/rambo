import React,{useState} from 'react'
import NGOSidebar from './NGOSidebar'
import NGODisplay from './NGODisplay'

const NGODashboard = () => {
  const [tab,setTab] = useState('Profile');
  return (
    <div className='flex h-full'>
        <NGOSidebar tab={tab} setTab={setTab}/>
        <NGODisplay tab={tab}/>
    </div>
  )
}

export default NGODashboard