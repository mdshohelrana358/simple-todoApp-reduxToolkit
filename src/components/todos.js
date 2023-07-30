import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.todos);
  console.log("from alltodos :", data);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      All Todos:
      <ul>
        {data.map((item, index) => {
          const { id, name } = item;
          return (
            <div key={index}>
              <li>{name}</li>
              <button onClick={() => handleDeleteTodo(id)}>Remove</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
