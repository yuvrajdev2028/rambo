import React,{useContext} from 'react'
import AuthContext from '../contexts/AuthContext'
import MetricCard from './MetricCard';
import IncomingReportCard from './IncomingReportCard';
import ActiveCaseCard from './ActiveCaseCard';
import ResolvedCaseCard from './ResolvedCaseCard';

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
      <div className='p-2 flex-grow overflow-auto scrollbar-hidden'>
        <IncomingReportCard />
        <IncomingReportCard />
        <IncomingReportCard />
        <IncomingReportCard />
        <IncomingReportCard />
        <IncomingReportCard />
        <IncomingReportCard />
      </div>
    )
  }
  else if(tab==='Active Cases'){
    return(
      <div className='p-2 flex-grow overflow-auto scrollbar-hidden'>
        <ActiveCaseCard />
        <ActiveCaseCard />
        <ActiveCaseCard />
      </div>
    )
  }
  else if(tab==='Resolved Cases'){
    return(
      <div className='p-2 flex-grow overflow-auto scrollbar-hidden'>
        <ResolvedCaseCard />
        <ResolvedCaseCard />
        <ResolvedCaseCard />
      </div>
    )
  }
}

export default NGODisplay