/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

import react , { createContext } from "react";

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


export  {AppContext , AppProvider as MyProvider};
