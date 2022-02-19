import React, { createContext, useState } from "react";

type UserType={
    cpf:string | null,
    senha:string | null
    
}

type UserProps = {
state:UserType,
setState: React.Dispatch<React.SetStateAction<UserType>>
}

const cpf = window.localStorage.getItem('cpf')
const senha = window.localStorage.getItem('senha')
const DEFAULT_VALUE = {
    state:{
        cpf:cpf,
        senha:senha
    },
    
    setState: ()=>{},
};

export const AuthContext = createContext<UserProps>(DEFAULT_VALUE);

export default function AuthProvider({children}:any){

     
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return(
        <AuthContext.Provider value={{state, setState}}>
            {children}
        </AuthContext.Provider>        
    );
}