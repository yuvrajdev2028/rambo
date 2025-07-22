import React from 'react'
import useUpdateReportStatus from '../hooks/useUpdateReportStatus'

const IncomingReportCard = ({title,date,description,image,id}) => {
  const mutation = useUpdateReportStatus();

  const acceptHandler = () => {
    mutation.mutate({reportId: id, newStatus: 'in progress'},
      {onSuccess: () => console.log('Status updated successfully.'),
        onError: (error) => console.log('Error: ',error)})
  }

  const rejectHandler = () => {
    mutation.mutate({reportId: id, newStatus: 'rejected'},
      {onSuccess: () => console.log('Status updated successfully.'),
        onError: (error) => console.log('Error: ',error)})
  }

  return (
    <div className='bg-slate-900 rounded-md my-4 w-1/2 mx-auto p-4'>
        <div className='flex justify-between mb-2'>
            <span className='font-bold text-green-600'>{title}</span>
            <span>{date}</span>
        </div>
        <img src={image} alt='Submitted to you for this report' className='w-1/4 mx-auto h-auto'/>
        <p className='mb-2'>{description}</p>
        <div className='flex justify-between'>
            <button className='border border-green-600 rounded-md py-2 px-4 hover:bg-green-600 hover:text-white' onClick={acceptHandler}>Accept</button>
            <button className='border border-red-600 rounded-md py-2 px-4 hover:bg-red-600 hover:text-white' onClick={rejectHandler}>Reject</button>
        </div>
    </div>
  )
}

export default IncomingReportCard