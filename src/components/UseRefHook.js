/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";

function UseRefHook() {
  const InputRef = useRef();
  const text = useRef(null);
  const name = useRef("");

  const changecolor = () => {
    // InputRef.current.focus();
    InputRef.current.style.backgroundColor = `${text.current.value}`;

    console.log(name.current.value);
    console.log(text.current.value);

    // Set the name inside the div
    InputRef.current.innerText = `My Name is : ${name.current.value}`;
  };

  return (
    <div className="w-full h-96 flex flex-col justify-center items-center bg-purple-500">
      <label className="text-3xl flex gap-6">
        Your first name:
        <input name="firstName" type="text" ref={name} placeholder="Enter something..." />
      </label>
      <label className="text-3xl flex gap-6 mt-4">
        Enter Fav Color:
        <input name="firstName" type="text" ref={text} placeholder="Enter something..." />
      </label>
      <button className="text-white bg-black p-6 rounded-lg mt-4" onClick={changecolor}>
        Click
      </button>
      <div className="bg-green-300 rounded-lg w-1/2 text-center mt-10 h-12 text-4xl" ref={InputRef}>
        <h1>My Name is : </h1>
      </div>
    </div>
  );
}

export default UseRefHook;
