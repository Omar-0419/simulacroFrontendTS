import { createContext, useContext, useState } from "react";
import type { User } from "../types/interfaces";

type authContextType ={
    user:User|null,
    isAusthenticated: boolean,
    login(token:string, user:User): void
    logout():void
    register(token:string, user:User): void
}

export const AuthContext = createContext<authContextType|null>(null)
    
function AuthProvider({children}:{children: React.ReactNode}){
    const [isAusthenticated, setIsAuthenticated] = useState<boolean>(()=>!!localStorage.getItem("is authenticated"))
    const [user, setUser] = useState<User|null>(()=>{
        const storedUser = localStorage.getItem("User")
        if(!storedUser){
            return null
        }

        return JSON.parse(storedUser)
    })

    function login(token:string, user:User){
        localStorage.setItem("accessToken", token)
        localStorage.setItem("User",JSON.stringify(user))
        localStorage.setItem("is authenticated", "true")
        setUser(user)
        setIsAuthenticated(true)
    }

    function logout(){
        localStorage.clear()
        setUser(null)
        setIsAuthenticated(false)
    }

    function register(token: string, user:User){
        localStorage.setItem("accessToken", token)
        localStorage.setItem("User",JSON.stringify(user))
        localStorage.setItem("is authenticated", "true")
        setUser(user)
        setIsAuthenticated(true)
    }


    return(<AuthContext.Provider value={{user,isAusthenticated,login,logout, register}}>  {children} </AuthContext.Provider>)

}

export function useAuth (){
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("utilizar use context dentro de authprovider")
    }

    return context

}

export default AuthProvider