import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const apiUrl = process.env.REACT_APP_BASE_URL;

const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [accessToken, setAccessToken] = useState(null);
    const [user,setUser]=useState(null);
    const [otpToken, setOtpToken] = useState(null);
    const navigate = useNavigate();

    const login = async(email, password)=>{
        try{
            // Request object sent
            const request=new Request(`${apiUrl}/login`,{
                method:'POST',
                credentials: 'include',
                headers:{
                'Content-Type':'application/json'
                },
                body:JSON.stringify({email,password}),
            });
            console.log(`req.body sent is: ${request.body}`);
            // send request using fetch api
            const response=await fetch(request);
            console.log(response);
            // if login successful convert response to json data, store the accesstoken
            if(response.status===200){
                const data = await response.json();
                console.log('Data: ',data);
                setAccessToken(data.accessToken);
                const decode = jwtDecode(data.accessToken)
                setUser({id: decode.userId, role: decode.role});
                navigate('/dashboard')
            }
            else if(response.status===401) return 401;
            else{
                throw new Error("Login failed")
            }
        }
        catch(error){
            console.log('Errors Occured!!!')
            console.log(error);
            return 500;
        }
    }

    const logout=async()=>{
        await fetch(`${apiUrl}/logout`,{
            method: 'POST',
            credentials: 'include'
        });
        setAccessToken(null);
        setUser(null);
    }

    const validateUser = async(email)=>{
        try{
            const response = await fetch(`${apiUrl}/validateUser`,{
                method:'POST',
                credentials: 'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email}),
            });
    
            if(response.status===200) return true;
            else if(response.status===401) return false;
            else{
                throw new Error('Validation failed');
            }
        }
        catch(error){
            console.log('Error occured!!!');
            console.log(error);
        }
    }

    const sendOTP = async(email)=>{
        try{
            const response = await fetch(`${apiUrl}/sendOTP`,{
                method:'POST',
                credentials: 'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email}),
            });

            if(response.status===200){
                const data = await response.json();
                setOtpToken(data.otpToken);
            }
            else{
                throw new Error('OTP can\'t be sent')
            }
        }
        catch(error){
            console.log('Error occured!!!');
            console.log(error);
        }
    }

    const verifyOTP = async(email,otp)=>{
        try{
            const response = await fetch(`${apiUrl}/verifyOTP`,{
                method:'POST',
                credentials: 'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email,otp,otpToken}),
            });

            if(response.status === 500){
                throw new Error('OTP couldn\'t be validated.');
            }
            else{
                const data = await response.json();
                return {
                    status: response.status,
                    message: data.message
                };
            }
        }
        catch(error){
            console.log('Error Occured!!!');
            console.log(error);
        }
    }

    const changePassword = async(email,newPassword)=>{
        try{
            const response = await fetch(`${apiUrl}/changePassword`,{
                method:'POST',
                credentials: 'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email,newPassword}),
            });

            if(response.status===200) return true
            else throw new Error('Password couldn\'t be changed');
        }
        catch(error){
            console.log('Error occured!!!');
            console.log(error);
        }
    }

    const refreshAccessToken = useCallback(async()=>{
        try{
            const res = await fetch(`${apiUrl}/refresh`,{
                method: 'POST',
                credentials: 'include'
            });

            if(!res.ok){
                logout();
                throw new Error('Login Again!');
            }

            const data=await res.json();
            setAccessToken(data.accessToken);
        }
        catch(error){
            console.log(error);
            logout();
        }
    },[]);

    useEffect(()=>{
        if(!accessToken) return;

        const refreshTime = 14*60*1000;
        const interval = setInterval(refreshAccessToken, refreshTime);

        return () => clearInterval(interval);
    },[accessToken, refreshAccessToken]);

    /**Note to self:
     * The reason we use a separate restoreSession function is because useEffect does not support async/await.
     * useEffect must return a cleanup function () or nothing
     * async function returns a promise, that is not allowed as a cleanup function.
     * Why is this useEffect required? --> To ensure that user remains logged in after a refresh.
     */
    useEffect(()=>{
        const restoreSession = async()=>{
            try{
                console.log('restoring session')
                const res = await fetch(`${apiUrl}/refresh`,{
                    method: 'POST',
                    credentials: 'include'
                });

                if(!res.ok){
                    throw new Error('Login Again!')
                }

                const data = await res.json();
                setAccessToken(data.accessToken);
                const decode = jwtDecode(data.accessToken);
                setUser({id: decode.userId, role: decode.role});
                console.log('session restored successfully');
            }
            catch(error){
                console.log(error);
            }
        }

        restoreSession();
    },[]);

    return (
        <AuthContext.Provider value={{ accessToken, user, login, logout, validateUser, sendOTP, verifyOTP, changePassword}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;