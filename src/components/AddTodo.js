import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      toast.error("Please enter a task");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false
    };
    addTodo(newTodo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
}

export default AddTodo;
