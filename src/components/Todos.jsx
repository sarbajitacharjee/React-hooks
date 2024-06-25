import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2 className="text-bold text-5xl mb-6 underline">My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}

      <button onClick={addTodo} className="bg-black text-white p-5 rounded-xl text-bold">Add Todo</button>
    </>
  );
};

export default memo(Todos);
