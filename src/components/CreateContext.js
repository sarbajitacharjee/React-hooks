/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

import react , { createContext , useContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const userData = {
        name: "Sarbajit Acharjee",
        age: 22,
      };
      
    return(
        <AppContext.Provider value={userData}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () =>{
    return useContext(AppContext);
}


export  {AppContext , AppProvider as MyProvider , useGlobalContext} ;
