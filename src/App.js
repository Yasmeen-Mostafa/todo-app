import { useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard/TodoCard";
import TodoForm from "./components/TodoForm/TodoForm";
function App() {
  const [todos, setTodos] = useState([]); //array of objects, each object inside todos is a todo=>todo name, priority
  const handleTodoForm = (todo) => {
    //recieve todo object from TodoForm
    if (todo.todo && todo.priority) {
      setTodos([...todos, todo]);
    }
  };
  const onDelete = (id) => {
    const rendered = todos.filter((todo) => todo.id !== id);
    setTodos(rendered);
  };
  const onEdit = (id, newTitle, newPriority) => {
    const rendered = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: newTitle, priority: newPriority } : todo
    );
    setTodos(rendered);
  };
  // const lowPriotyTodos = todos.filter((todo) => todo.priority === "low");
  return (
    <div className="App">
      <TodoForm onSubmit={handleTodoForm} />
      <div className="todo__cards">
        <TodoCard
          onEdit={onEdit}
          onDelete={onDelete}
          todos={todos}
          priority="Low"
        />
        <TodoCard
          onEdit={onEdit}
          onDelete={onDelete}
          todos={todos}
          priority="Medium"
        />
        <TodoCard
          onEdit={onEdit}
          onDelete={onDelete}
          todos={todos}
          priority="High"
        />
        <TodoCard
          onEdit={onEdit}
          onDelete={onDelete}
          todos={todos}
          priority="Urgent"
        />
      </div>
    </div>
  );
}

export default App;
