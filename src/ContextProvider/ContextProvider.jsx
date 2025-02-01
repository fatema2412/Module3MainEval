import React, { createContext, useState } from 'react'

export default function ContextProvider({children}) {
    const UserAuth=createContext()
    const login=(Auth)=>{
        if(Auth){
            return setIsAuth(true)
        }

    }
    const [isAuth,setIsAuth]=useState(false)
  return (
    <div>
      <UserAuth.Provider value={{login,isAuth}}>
      {children}
      </UserAuth.Provider>
    </div>
  )
}
