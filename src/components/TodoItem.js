import React from "react";
import { FaTrash } from "react-icons/fa";

function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  const handleToggleCompleted = () => {
    toggleCompleted(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      <span onClick={handleToggleCompleted}>{todo.task}</span>
      <button onClick={handleDeleteTodo}>
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
