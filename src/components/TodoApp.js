import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "../App.scss";
import { loadTodos, saveTodos } from "../data/utils";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    saveTodos([...todos, todo]);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoApp;
