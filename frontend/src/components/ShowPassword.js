import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const ShowPassword = ({hidePassword,setHidePassword}) => {

    const clickHandler = (event)=>{
        event.preventDefault();
        if(hidePassword) setHidePassword(false);
        else setHidePassword(true);
    }
  return (
    <button onClick={clickHandler} className='bg-slate-950 p-2 w-10'>
        {(hidePassword)?(<FontAwesomeIcon icon={faEyeSlash} />):(<FontAwesomeIcon icon={faEye} />)}
    </button>
  )
}

export default ShowPassword