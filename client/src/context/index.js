import React,{createContext, useContext, useState} from 'react';

const appContext = createContext();

export const Context=({children})=>{
    const [reload,setReload] = useState(null);
    const [mbSidebar,setMbSiderbar] = useState(false);

    const setMbsiderbar =()=>setMbSiderbar(prev=>!prev);

    const handleReload=(data)=>setReload(data);

   return <appContext.Provider value={{
        reload,handleReload,
        mbSidebar,setMbsiderbar
    }}>
        {children}
    </appContext.Provider>
}

export const useGlobalContext=()=>useContext(appContext);
