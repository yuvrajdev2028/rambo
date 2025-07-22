import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../contexts/AuthContext';

const apiUrl = process.env.REACT_APP_BASE_URL;

const ResolvedCaseCard = ({title,date,description,image,id}) => {
  const { accessToken } = useContext(AuthContext);

  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    const fetchResponse = async() =>{
      try{
        const res = await fetch(`${apiUrl}/getResponses/${id}`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
        if(res.ok){
          const data = await res.json();
          setResponseMessage(data[0].responseMessage);
        }
        else{
          throw new Error('Failed to fetch response');
        }
      }
      catch(error){
        console.log('Error occured while fetching responses: ', error);
      }
    }
    fetchResponse();
  },[]);

  return (
    <div className='bg-slate-900 rounded-md my-4 w-1/2 mx-auto p-4'>
        <div className='flex justify-between mb-2'>
            <span className='font-bold text-green-600'>{title}</span>
            <span>{date}</span>
        </div>
        <img src={image} alt='Submitted to you for this report' className='w-1/4 mx-auto h-auto'/>
        <p className='mb-2'>{description}</p>
        <div>
            <h6 className='font-medium text-green-600 mb-2'>Response</h6>
            <p>{responseMessage}</p>
        </div>
    </div>
  )
}

export default ResolvedCaseCard