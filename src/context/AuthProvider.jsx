import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage ,setLocalStorage} from '../utils/localStorage'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null)
    const [loading, setLoading] = useState(true)
    
   useEffect(() => {
    const loadData=async()=>{
        await setLocalStorage();
       const {employees,admins}=getLocalStorage()
    setuserData({employees,admins})
    setLoading(false);
    };
    loadData();
      
   
     
   }, []);
   if(loading){
    return <div>Loading...</div>
   }
   
  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider