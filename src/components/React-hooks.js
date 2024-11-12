/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

// This line uSed for My Custom Hook useglobalcontext
import { useGlobalContext } from "./CreateContext";

// This two lines are used for Normal Use context
// import { useContext } from 'react'
// import { AppContext } from "./CreateContext";



const VideoList = () => {
  const [count, setcount] = useState(0);
  const [windowsize, setwindowsize] = useState(window.screen.width);

  // const user = useContext(AppContext)                   used for normal use context

  const {user1,user2} = useGlobalContext();          // This line uSed for My Custom Hook 'useglobalcontext'


  const windowresizer = () => {
    setwindowsize(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", windowresizer);
    document.title = `Count ${count}`;
    
    
    return () => {
      window.removeEventListener("resize", windowresizer);
    };

  }, [count]);

  function update() {
    console.log("clicked");
    setcount(count + 1);
  }

  return (
    <>
      <div className=" w-full h-96 flex flex-col gap-10 justify-center items-center  bg-green-600">
        <h1 className="text-4xl text-Black">Clicked : {count}</h1>

        <button
          className="w-32 h-16 bg-black text-white rounded-lg text-bold"
          onClick={update}
        >
          Click
        </button>
        <h1 className="text-4xl text-Black">Window Size : {windowsize}</h1>
      </div>
{/* --------------------- Code for Context =========================== */}
      <div className="w-full h-96 text-black text-3xl flex flex-col gap-10 justify-center items-center  bg-blue-600">
      <h1 className="underline mb-3">My CONTEXTHOOK</h1>
      <h1>
        My Username : {user1.name} , 
      </h1>
        My Age is {user1.age} 😉
    </div>  
    </>
  );
};

export default VideoList;
