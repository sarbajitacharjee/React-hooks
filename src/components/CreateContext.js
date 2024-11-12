/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

import react , { createContext , useContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const user1 = {
        name: "Sarbajit Acharjee",
        age: 23,
      };
      const user2 ={
        name: "Rahul Kumar",
        age: 25,
      }
      
    return(
        <AppContext.Provider value={{user1,user2}}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () =>{
    return useContext(AppContext);            // use global context as option 2 for Accessing data
}


export  {AppContext , AppProvider as MyProvider , useGlobalContext} ;
