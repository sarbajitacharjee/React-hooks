import { useContext } from 'react'
import React from 'react'
import { AppContext } from './CreateContext'
// import { useContext } from 'react';

const MyHook = () => {

    const {user1,user2} =useContext(AppContext);
  return (
    <div className="w-full h-96 text-black text-3xl flex flex-col gap-10 justify-center items-center  bg-blue-600">
      <h1 className="underline mb-3">My CONTEXTHOOK</h1>
      <h1>
        My Username : {user2.name} , 
      </h1>
        My Age is {user2.age} 😉
    </div> 
  )
}

export default MyHook
