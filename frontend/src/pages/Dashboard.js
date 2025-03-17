import React, { useContext } from 'react'
import NGODashboard from '../components/NGODashboard'
import VolunteerDashboard from '../components/VolunteerDashboard'
import AuthContext from '../contexts/AuthContext'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const role = user.role;
  return (
    <div className='flex-grow overflow-hidden'>
      {role==="ngo"?(<NGODashboard/>):(<VolunteerDashboard/>)}
    </div>
  )
}

export default Dashboard