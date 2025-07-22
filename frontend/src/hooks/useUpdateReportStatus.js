import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const apiUrl = process.env.REACT_APP_BASE_URL;


const useUpdateReportStatus = () => {
    const queryClient = useQueryClient();
    const { accessToken } = useContext(AuthContext);

    const updateStatus = async({reportId,newStatus}) => {
      try{
        const response = await fetch(`${apiUrl}/ngo/updateStatus`,{
          method:'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            reportId,
            newStatus,
          })
        })
        if(!response.ok){
          throw new Error('Error occured while updating report status.')
        }
        const data = await response.json();
        console.log(data);
        return data
      }
      catch(error){
        console.log(error)
      }
    }
  return useMutation({
    mutationFn: updateStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(['ngoReports']);
    }
  })
}

export default useUpdateReportStatus