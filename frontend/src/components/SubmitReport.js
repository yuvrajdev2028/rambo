import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

const apiUrl = process.env.REACT_APP_BASE_URL;

const SubmitReport = () => {
    const { accessToken } = useContext(AuthContext);

    const [formData,setFormData] = useState({
        title:"",
        description:"",
        location:"",
        ngo:"",
    });

    const [image, setImage] = useState(null);

    const [errorAlert,setErrorAlert] = useState(null);

    const [ngoList,setNGOList] = useState(null);

    const changeHandler = (event)=>{
        const {name, value} = event.target;
        setFormData((prev)=>({
        ...prev,
        [name]:value
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const formDataNew = new FormData();
        formDataNew.append('image', image);
        for(let key in formData) {
        formDataNew.append(key, formData[key]);
        }

        try{
        const response = await fetch(`${apiUrl}/createReport`, {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Authorization': `Bearer ${accessToken}`,
            },
            body: formDataNew,
        });
        console.log('Response:', response);
        if(response.status === 200) {
            const data = await response.json();
            setFormData({
                title:"",
                description:"",
                location:"",
                ngo:"",
            })
            setImage(null);
            errorAlert && setErrorAlert(null);
            console.log('Report submitted successfully:', data);
        }
        }
        catch(error){
            console.log('Error submitting report:', error);
            setErrorAlert('Unable to submit report. Please try again later.');
        }
    };

    

    useEffect(()=>{
        const fetchNGOList = async() =>{
            try{
                const response = await fetch(`${apiUrl}/getNGOList`,{
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                    },
                })
                const list = await response.json();
                console.log('Response from backend for ngo list',list);
                setNGOList(list.data);
            }
            catch(error)
            {
                console.log(error);
            }                                                                     
        }

        fetchNGOList();
    },[])

  return (
    <div className='flex-grow'>
        <form id='submit-form' className='flex flex-col h-[70%] w-[30%] drop-shadow-md bg-white my-8 mx-auto p-4' encType='multipart/form-data' onSubmit={submitHandler}>
        <label htmlFor='title' className='text-left text-sm font-semibold'>Title</label>
        <input type='text' name='title' id='title' value={formData.title} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Title' required />
        <label htmlFor='description' className='text-left text-sm font-semibold'>Description</label>
        <textarea name='description' id='description' value={formData.description} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Description' required />
        <label htmlFor='location' className='text-left text-sm font-semibold'>Location</label>
        <input type='text' name='location' id='location' value={formData.location} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Location' required />
        <label htmlFor='image' className='text-left text-sm font-semibold'>Image</label>
        {/* <input type='text' name='image' id='image' value={formData.imageUrl} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Image' required /> */}

        <input type='file' name='image' id='image' className='bg-[#EFF0F2] p-2' placeholder='Image' onChange={(e)=>{setImage(e.target.files[0])}} required />

        <label htmlFor='ngo' className='text-left text-sm font-semibold'>NGO</label>
        <select name='ngo' id='ngo' form='submit-form' onClick={changeHandler} className='bg-[#EFF0F2] p-2'>
            {(ngoList) && (ngoList.map((ngo,index)=>{
                return <option key={index} value={ngo.id}>{ngo.name}</option>
            }))}
        </select>
        {/* <input type='text' name='ngo' id='ngo' value={formData.ngo} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='NGO' required /> */}
        {(errorAlert) && <p className='text-xs text-red-500'>{errorAlert}</p>}
        <button type='submit' className='bg-green-600 w-36 p-2 text-white mx-auto rounded-md my-5 hover:bg-green-500 transition-all'>Submit Report</button>
        </form>
    </div>
  )
}

export default SubmitReport