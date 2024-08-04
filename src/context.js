import { createContext, useState } from "react";

export const InitialContext = createContext({darkMode:false,changeThemeMode:()=>{},menu:false,changeMenu:()=>{}})

const ContextProvider = ({children}) =>{
    const [darkMode,setDarkMode] = useState(false)
    const [menu,setMenu] = useState(false)
    const changeThemeMode = () =>{
        setDarkMode(prev => !prev)
    }
    const changeMenu = () =>{
        setMenu(prev => !prev)
    }
    return <InitialContext.Provider value={{darkMode,changeThemeMode,menu,changeMenu}}>
        {children}
    </InitialContext.Provider>
}

export default ContextProvider
