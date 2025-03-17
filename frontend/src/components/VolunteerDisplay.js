import React, { useContext, useState } from 'react'
import AuthContext from '../contexts/AuthContext'
import MetricCard from './MetricCard';
import MyReportsCard from './MyReportsCard';

const VolunteerDisplay = ({tab,setTab}) => {
  const { user } = useContext(AuthContext);

  const [formData,setFormData] = useState({
    title:"",
    description:"",
    location:"",
    imageUrl:"",
    ngo:"",
  });

  const changeHandler = (event)=>{
    const {name, value} = event.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }));
  };

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
      <div className='flex-grow'>
        <form className='flex flex-col h-[70%] w-[30%] drop-shadow-md bg-white my-8 mx-auto p-4'>
        <label htmlFor='title' className='text-left text-sm font-semibold'>Title</label>
        <input type='text' name='title' id='title' value={formData.title} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Title' required />
        <label htmlFor='description' className='text-left text-sm font-semibold'>Description</label>
        <textarea name='description' id='description' value={formData.description} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Description' required />
        <label htmlFor='location' className='text-left text-sm font-semibold'>Location</label>
        <input type='text' name='location' id='location' value={formData.location} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Location' required />
        <label htmlFor='image' className='text-left text-sm font-semibold'>Image</label>
        <input type='text' name='image' id='image' value={formData.imageUrl} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Image' required />
        <label htmlFor='ngo' className='text-left text-sm font-semibold'>NGO</label>
        <input type='text' name='ngo' id='ngo' value={formData.ngo} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='NGO' required />
        <button type='submit' className='bg-green-600 w-36 p-2 text-white mx-auto rounded-md my-5 hover:bg-green-500 transition-all'>Submit Report</button>
        </form>
      </div>
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