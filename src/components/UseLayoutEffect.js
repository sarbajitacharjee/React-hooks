
// useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations. Useful for reading layout and synchronizing re-renderings.

import { useState, useLayoutEffect, useEffect } from "react"


export default function  UseLayoutEffect()
{

    const [Random, setRandom] = useState(0);

    useEffect(()=>{
        console.log("First effect 1");
    })
    useLayoutEffect(()=>{
        console.log("Second effect 2");  // useLayoutEffect printed first in the console 
    })
    useEffect(()=>{
        console.log("Third effect 3");
    })


    // Using useLayoutEffect makes the code updated before screen updated
    useLayoutEffect(() => {
        if(Random === 0 ) 
          setRandom(Math.floor(Math.random() * 100));
    },[Random]);
    return (
        <div className="w-full h-96 bg-red-400 flex flex-col justify-center items-center">
            <h1 className="text-3xl">THE RANDOM VALUE IS : {Random}</h1>
            <button className="text-2xl p-4 text-white bg-black" onClick={()=>{setRandom(0)}}>Click To get</button>
        </div>
    )


};