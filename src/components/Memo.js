/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useEffect } from "react";

const MemoHook = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    // console.log(myNum + 1);
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

    const CheckData = useMemo(() => {
      return countNumber(myNum);
    }, [myNum]);

//   const CheckData = () => {
//     return countNumber(myNum);
//   };

  return (
    <div className="flex flex-col w-full h-96 bg-pink-500 items-center justify-center text-4xl">
      <button onClick={getValue} className="bg-black hover:border-2 hover:border-white text-white p-4 rounded-lg">
        Counter
      </button>

       <p> My new number : {CheckData} </p>      {/* ------- For use memo */}
      {/* <p> My new number : {<CheckData/>} </p>  -------  For Normal Function */}

      <button
        onClick={() => setShow(!show)}
        className="bg-green-800 text-white p-4 mt-4 focus- rounded-lg hover:border-2 hover:border-white "
      >
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </div>
  );
};

export default MemoHook;
