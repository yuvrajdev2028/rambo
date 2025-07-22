import React,{useState, useContext} from 'react'
import useUpdateReportStatus from '../hooks/useUpdateReportStatus'
import AuthContext from '../contexts/AuthContext';

const apiUrl = process.env.REACT_APP_BASE_URL;

const SubmitResponseModal = ({reportId,setShowResponseModal}) => {
    const { accessToken } = useContext(AuthContext);
    const [response, setResponse] = useState('');
    const mutation = useUpdateReportStatus();
    
    const submitResponseHandler = async() =>{
        try{
            const res = await fetch(`${apiUrl}/addResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    reportId,
                    responseMessage: response
                })
            })
            if(res.ok){
                console.log('Response submitted successfully.');
                mutation.mutate({reportId, newStatus: 'resolved'},{
                    onSuccess: () => {
                        console.log('Report status updated successfully.');
                        setShowResponseModal(false);
                    },
                    onError: (error) => {
                        console.error('Error updating report status:', error);
                    }
                });
            }
        }
        catch(error){
            console.log('Error occured while submitting response: ', error);
        }
    }
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-slate-900 rounded-lg p-4 w-1/2'>
            <h4 className='text-green-600'>Fill in the response</h4>
            <textarea name='response' id='response' value={response} onChange={(e)=>{
                setResponse(e.target.value);
            }} className='w-full h-32 p-2 border border-gray-300 rounded-md bg-slate-950 focus:outline-none' placeholder='Write your response here...'></textarea>
            <div className='flex justify-between mt-4'>
                <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700' onClick={()=>{setShowResponseModal(false)}}>Cancel</button>
                <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700' onClick={submitResponseHandler}>Submit</button>
            </div>
            <div className='text-sm text-gray-500 mt-2'>
                <p>Note: Ensure your response is clear and concise.</p>
            </div>
        </div>
    </div>
  )
}

export default SubmitResponseModal