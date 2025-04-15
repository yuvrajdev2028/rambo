import React, { useState } from 'react'
import ShowPassword from './ShowPassword';

const PasswordInput = ({name, id, value, changeHandler, placeholder}) => {
    const [hidePassword,setHidePassword] = useState(true);
    
  return (
    <div className='flex'>
        {
            (hidePassword)?
            (
                <input type='password' name={name} id={id} value={value} onChange={changeHandler} className='bg-[#EFF0F2] p-2 flex-1' placeholder={placeholder} required></input>
            ):
            (
                <input type='text' name={name} id={id} value={value} onChange={changeHandler} className='bg-[#EFF0F2] p-2 flex-1' placeholder={placeholder} required></input>
            )
        }
        <ShowPassword hidePassword={hidePassword} setHidePassword={setHidePassword}/>
    </div>
  )
}

export default PasswordInput