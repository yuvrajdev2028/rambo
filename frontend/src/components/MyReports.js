import React from 'react'
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import MyReportsCard from './MyReportsCard';
import { useQuery } from '@tanstack/react-query';

const apiUrl = process.env.REACT_APP_BASE_URL;

const MyReports = () => {
    const { accessToken } = useContext(AuthContext);

    const fetchReports = async()=>{
            try{
                const response = await fetch(`${apiUrl}/volunteer/getAllReports`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
                const reportList = await response.json();
                console.log(reportList);
                if(response.ok){
                    return reportList;
                }
                else{
                    throw new Error('Failed to fetch reports');
                }
            }
            catch(error){
                console.log(error);
            }
        }

    const query = useQuery({queryKey: ['volunteerReports'], queryFn: fetchReports, staleTime: 1000 * 60 * 5, refetchOnWindowFocus: false});
  return (
    <div className='w-full px-8'>
        {
            (query?.isError || !query?.data) ? (<div>No reports found. If you have not submitted a report kindly submit a report first, else try again later.</div>) : 
            query?.data.map((report,index)=>{
                return <MyReportsCard key={index} title={report.title} status={report.status} date={new Date(report.createdAt).toLocaleDateString('en-GB')} description={report.description} ngo={report.ngoId} image={report.image_url}/>
            })
        }
    </div>
  )
}

export default MyReports