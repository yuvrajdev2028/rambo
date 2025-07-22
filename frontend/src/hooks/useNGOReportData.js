import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';

const apiUrl = process.env.REACT_APP_BASE_URL;

const useNGOReportData = () => {
    const { accessToken } = useContext(AuthContext);

    const fetchReports = async()=>{
        try{
            const response = await fetch(`${apiUrl}/ngo/getAllReports`, {
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
                throw new Error('Failed to fetch NGO reports');
            }
        }
        catch(error){
            console.log(error);
        }
    }
  return useQuery({
        queryKey: ['ngoReports'], 
        queryFn: fetchReports, 
        staleTime: 1000 * 10, 
        refetchOnWindowFocus: false
    });
}

export default useNGOReportData