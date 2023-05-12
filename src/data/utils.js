export const defaultTodos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Do laundry", completed: true },
  { id: 3, text: "Call mom", completed: false }
];

export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function loadTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : defaultTodos;
}
