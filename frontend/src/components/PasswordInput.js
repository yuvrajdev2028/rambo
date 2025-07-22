import React, { useState } from 'react'
import ShowPassword from './ShowPassword';

const PasswordInput = ({name, id, value, changeHandler, placeholder}) => {
    const [hidePassword,setHidePassword] = useState(true);
    
  return (
    <div className='flex bg-slate-950'>
        {
            (hidePassword)?
            (
                <input type='password' name={name} id={id} value={value} onChange={changeHandler} className='bg-slate-950 w-full p-2 focus:outline-none' placeholder={placeholder} required></input>
            ):
            (
                <input type='text' name={name} id={id} value={value} onChange={changeHandler} className='bg-slate-950 p-2 w-full focus:outline-none' placeholder={placeholder} required></input>
            )
        }
        <ShowPassword hidePassword={hidePassword} setHidePassword={setHidePassword}/>
    </div>
  )
}

export default PasswordInput