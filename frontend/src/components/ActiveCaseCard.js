import React, { useState } from 'react'
import SubmitResponseModal from './SubmitResponseModal';

const ActiveCaseCard = ({title,date,description,image,reportId,ngoId}) => {
  const [showResponseModal,setShowResponseModal] = useState(false);

  return (
    <div className='bg-slate-900 rounded-md my-4 w-1/2 mx-auto p-4'>
        <div className='flex justify-between mb-2'>
            <span className='font-bold text-green-600'>{title}</span>
            <span>{date}</span>
        </div>
        <img src={image} alt='Submitted to you for this report' className='w-1/4 mx-auto h-auto'/>
        <p className='mb-2'>{description}</p>
        <div>
            <button className='border border-green-600 rounded-md py-2 px-4 hover:bg-green-600 hover:text-white' onClick={()=>{setShowResponseModal(true)}}>Resolve</button>
        </div>
        {showResponseModal && <SubmitResponseModal reportId={reportId} ngoId={ngoId} setShowResponseModal={setShowResponseModal}/>}
    </div>
  )
}

export default ActiveCaseCard