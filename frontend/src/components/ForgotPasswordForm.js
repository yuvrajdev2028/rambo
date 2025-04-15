import React, { useContext, useState } from 'react'
import UtilsContext from '../contexts/UtilsContext';
import AuthContext from '../contexts/AuthContext';
import OTPInput from './OTPInput';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import PasswordInput from './PasswordInput';

const ForgotPasswordForm = () => {
    const { isEmailValid } = useContext(UtilsContext);
    const { validateUser, sendOTP, verifyOTP, changePassword } = useContext(AuthContext);

    const [emailValid,setEmailValid] = useState(true);
    const [userExists,setUserExists] = useState(true);
    const [resend,setResend] = useState(false);
    const [otpWarning, setOtpWarning] = useState(null);
    const [verified,setVerified] = useState(false);
    const [warning,setWarning] = useState(false);
    const [passwordChangeRequested,setPasswordChangeRequested] = useState(false);
    const [passwordChanged,setPasswordChanged] = useState(false);

    const [formData,setFormData] = useState({
          email:'',
          password:'',
          confirmPassword:'',
    });

    const changeHandler = (event)=>{
        const {name, value} = event.target;
        setFormData((prev)=>({
          ...prev,
          [name]:value
        }));
    };

    const resendOTPHandler = async()=>{
        
        // make api call to send otp to registered email.
        await sendOTP(formData.email);
        console.log("OTP Sent")
    }

    const sendOTPHandler = async()=>{
        // validate email 
        const isValid = isEmailValid(formData.email);
        // check if account exists
        if(isValid){
            //make api call to check if email exist
            //if exist
            setEmailValid(true);
            if(await validateUser(formData.email))
            {
                setUserExists(true);
                setResend(true);
                // call sendOTP
                await sendOTP(formData.email);
            }
            else{
                setUserExists(false);
            }
        }
        else{
            //show warning prompting user to enter correct OTP
            setEmailValid(false);
        }
    }

    const onOTPSubmit = async(otp) => {
        // console.log("Login Successful", otp);
        const {status,message} = await verifyOTP(formData.email,otp);
        if(status===400){
            setOtpWarning(message);
        }
        else{
            setOtpWarning(null);
            setVerified(true);
        }

    };

    const submitHandler = async(event)=>{
        event.preventDefault();
        if(formData.confirmPassword!==formData.password){
            setWarning(true);
        }
        else{
            const result = await changePassword(formData.email, formData.password);
            if(result){
                setFormData({
                    email:'',
                    password:'',
                    confirmPassword:'',
                });
                setPasswordChanged(true);
            }
            else{

            }
            setWarning(false);
            setPasswordChangeRequested(true);
        }
    }

    const tryAgainHandler = ()=>{
        setEmailValid(true);
        setUserExists(true);
        setResend(false);
        setVerified(false);
        setOtpWarning(null);
        setPasswordChangeRequested(false);
        setPasswordChanged(false);
        setWarning(false);
        setFormData({
            email:'',
            password:'',
            confirmPassword:'',
        });
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col'>
        {
            (!passwordChangeRequested)?
            (
                (!verified)?
                <>
                    <label htmlFor='email' className='text-left text-sm font-semibold'>EMAIL</label>
                    <input type='email' name='email' id='email' value={formData.email} onChange={changeHandler} className='bg-[#EFF0F2] p-2' placeholder='Email' required></input>
                    {
                        (emailValid)?
                        (<>
                            {
                                (userExists)?
                                (<></>):
                                (<div className='text-xs text-red-600'>User does not exist.</div>)
                            }
                        </>):
                        (<div className='text-xs text-red-600'>Enter Valid Email.</div>)
                    }
                    {
                        (!resend)?
                        <button type='button' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all' onClick={sendOTPHandler}>Send OTP</button>:
                        <>
                        {/* disable resend otp for one minute */}
                            <button type='button' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all' onClick={resendOTPHandler}>Resend OTP</button>
                            <label htmlFor='password' className='text-left text-sm font-semibold mt-2'>OTP</label>
                            <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
                            {(otpWarning)?(<div className='text-xs text-red-600'>{otpWarning}</div>):<></>}
                            <button type='button' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all' onClick={onOTPSubmit}>Verify Email</button>
                        </>
                    }
                </>:
                <>
                    <label htmlFor='password' className='text-left text-sm font-semibold mt-2'>NEW PASSWORD</label>
                    <PasswordInput name={'password'} id={'password'} value={formData.password} changeHandler={changeHandler} placeholder={'Enter New Password'}/>

                    <label htmlFor='password' className='text-left text-sm font-semibold mt-2'>CONFIRM NEW PASSWORD</label>
                    <PasswordInput name={'confirmPassword'} id={'confirmPassword'} value={formData.confirmPassword} changeHandler={changeHandler} placeholder={'Confirm New Password'}/>

                    {(warning)?<div className='text-xs text-red-600'>New Password and Confirm Password fields do not match.</div>:<></>}

                    <button type='submit' className='bg-green-700 w-36 p-2 text-white mx-auto rounded-3xl my-5 hover:bg-green-600 transition-all'>Submit</button>
                </>
            ):
            (
                <>
                    {
                        (passwordChanged)?
                        (
                            <div>
                                <div className='text-green-600 flex justify-center text-8xl mb-10'><FontAwesomeIcon icon={faCircleCheck} /></div>
                                <p className='text-center'>Password changed successfully.</p>
                                <p className='text-center mb-8'>Go back to <Link to='/login'><span className='underline text-green-600'>Login</span></Link></p>
                            </div>
                        ):
                        (
                            <div>
                                <div className='text-red-600 flex justify-center text-8xl mb-10'><FontAwesomeIcon icon={faCircleExclamation} /></div>
                                <p className='text-center'>Error occured while changing password.</p>
                                <p className='text-center mb-8'><button className='underline text-green-600' onClick={tryAgainHandler}>Try Again</button></p>
                            </div>
                        )
                    }
                </>
            )
        }
    </form>
  )
}

export default ForgotPasswordForm