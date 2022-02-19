import React, { createContext, ReactNode, useState } from "react";

type ModalContextProps = {
    children: ReactNode
}

type ModalType={
    openIsModal:boolean,
    setOpenIsModal: (newState: boolean) => void   
}

const VALUE_INICIAL = {
    openIsModal: false,
    setOpenIsModal: ()=>{} 
}

export const ModalContext = createContext<ModalType>(VALUE_INICIAL)    

export default function ModalProvider({children}:ModalContextProps){

    const [openIsModal, setOpenIsModal] = useState(VALUE_INICIAL.openIsModal)

    
    return(
        <ModalContext.Provider value={{openIsModal, setOpenIsModal}}>
            {children}
        </ModalContext.Provider>
    )

}

