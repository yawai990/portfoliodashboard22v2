import React,{createContext, useContext, useState} from 'react';

const appContext = createContext();

export const Context=({children})=>{
    const [reload,setReload] = useState(null);

    const handleReload=(data)=>setReload(data);

   return <appContext.Provider value={{
        reload,handleReload
    }}>
        {children}
    </appContext.Provider>
}

export const useGlobalContext=()=>useContext(appContext);
