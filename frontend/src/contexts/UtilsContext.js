import React, { createContext } from 'react'

const UtilsContext = createContext();

export const UtilsProvider = ({children})=>{
    const isEmailValid = (email)=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    return(
        <UtilsContext.Provider value={{isEmailValid}}>
            {children}
        </UtilsContext.Provider>
    )
}

export default UtilsContext;