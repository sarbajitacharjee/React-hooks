/* eslint-disable react-hooks/exhaustive-deps */
// The React useCallback Hook returns a memoized callback function.

import { useCallback, useState } from "react";
import Todos from "./Todos";


const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  return (
    <div className="w-full h-96 flex flex-col justify-center items-center bg-lime-400">
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div className="text-xl mt-4 ">
        Count: {count}
        <button onClick={increment} className="bg-red-500 p-3 rounded-full mx-3">+</button>
      </div>
    </div>
  );
};


export default Callbackhook;
