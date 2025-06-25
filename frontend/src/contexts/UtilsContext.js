import React, { createContext } from 'react'

const UtilsContext = createContext();

export const UtilsProvider = ({children})=>{
    const isEmailValid = (email)=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    const isPasswordValid = (password)=>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&])[A-Za-z\d@#$%&]{8,}$/;
        return passwordRegex.test(password);

    }
    return(
        <UtilsContext.Provider value={{isEmailValid, isPasswordValid}}>
            {children}
        </UtilsContext.Provider>
    )
}

export default UtilsContext;