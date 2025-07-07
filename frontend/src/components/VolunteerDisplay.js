import React, { useContext, useState } from 'react'
import AuthContext from '../contexts/AuthContext'
import MetricCard from './MetricCard';
import MyReportsCard from './MyReportsCard';
import SubmitReport from './SubmitReport';

const apiUrl = process.env.REACT_APP_BASE_URL;

const VolunteerDisplay = ({tab,setTab}) => {
  const { user } = useContext(AuthContext);

  if(tab==='Profile'){
    return (
      <div className='p-2 flex-grow'>
        <h1>Welcome, {user.id}</h1>
        <p>Here's an overview of reports you're managing</p>
        <div className='flex justify-around'>
          <MetricCard heading={'Total Reports'} metric={5} />
          <MetricCard heading={'Pending Reports'} metric={2} />
          <MetricCard heading={'Resolved Reports'} metric={1} />
        </div>
        <div className='flex justify-center gap-8 mt-8'>
          <button className='py-2 px-4 text-white bg-green-600 hover:bg-green-500 rounded-md' onClick={()=>{setTab('My Reports')}}>See All Reports</button>
          <button className='py-2 px-4 text-white bg-green-600 hover:bg-green-500 rounded-md' onClick={()=>{setTab('Submit Report')}}>Submit a new Report</button>
        </div>
      </div>
    )
  }
  else if(tab==='Submit Report'){
    return(
      <>
        <SubmitReport />
      </>
    )
  }
  else if(tab==='My Reports'){
    return(
      <div className='p-2 flex-grow overflow-auto scrollbar-hidden'>
        <MyReportsCard />
        <MyReportsCard />
        <MyReportsCard />
      </div>
    )
  }
}

export default VolunteerDisplay