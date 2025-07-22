import React ,{useState} from 'react'
import useNGOReportData from '../hooks/useNGOReportData'
import ActiveCaseCard from './ActiveCaseCard'

const ActiveCase = () => {
    const [label,setLabel] = useState(false);    

    const query = useNGOReportData();
    if(query.isLoading) {
        return <div>Loading...</div>;
    }
    if(query.error) {
        return <div>Error: {query.error.message}</div>;
    }
  return (
    <div className='p-2 flex-grow overflow-auto scrollbar-hidden'>
        {
          query?.data.map((report,index) => {
            return (report.status==='in progress') && (label===false?setLabel(true):<></>) && <ActiveCaseCard key={index} 
            title={report.title} 
            date={new Date(report.createdAt).toLocaleDateString('en-GB')} 
            description={report.description} 
            image={report.image_url} 
            reportId={report._id}
            />
          })
        }
        {!label && <div className='text-center text-slate-600 font-bold text-3xl'>No Active Cases!</div>}
    </div>
  )
}

export default ActiveCase