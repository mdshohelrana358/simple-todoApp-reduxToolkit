import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../features/todo/todoSlice";

export default function NewTodo() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(name));
    // console.log(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Todo Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" on>
          Add New Todo
        </button>
      </form>
    </div>
  );
}
