import React,{useContext} from 'react'
import AuthContext from '../contexts/AuthContext'
import MetricCard from './MetricCard';
import IncomingReports from './IncomingReports';
import ActiveCase from './ActiveCase';
import ResolvedCase from './ResolvedCase';

const NGODisplay = ({tab}) => {
  const { user } = useContext(AuthContext);

  if(tab==='Profile'){
    return (
      <div className='p-2 flex-grow'>
        <h1>Welcome, {user.id}</h1>
        <p>Here's an overview of reports you're managing</p>
        <div className='flex justify-around'>
          <MetricCard heading={'Total Incoming Cases'} metric={7} />
          <MetricCard heading={'Active Cases'} metric={10} />
          <MetricCard heading={'Resolved Cases'} metric={82} />
        </div>
      </div>
    )
  }
  else if(tab==='Incoming Reports'){
    return(
      <IncomingReports />
    )
  }
  else if(tab==='Active Cases'){
    return(
      <ActiveCase />
    )
  }
  else if(tab==='Resolved Cases'){
    return(
      <ResolvedCase />
    )
  }
}

export default NGODisplay