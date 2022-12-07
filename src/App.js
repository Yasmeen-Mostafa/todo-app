import { useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard/TodoCard";

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
function App() {
  const [todos, setTodos] = useState([]); //array of objects, each object inside todos is a todo=>todo name, priority
  const handleTodoForm = (todo) => {
    //recieve todo object from TodoForm
    // console.log([...todos, todo]);
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
    // const rendered = todos.map((todo) => {
    //   if (todo.id === id) {
    //     if (todo.priority != "") {
    //       return { ...todo, todo: newTitle, priority: newPriority };
    //     } else {
    //       return { ...todo, todo: newTitle, priority: todo.priority };
    //     }
    //   }
    //   return todo;
    // });

    console.log(rendered);
    setTodos(rendered);
  };
  return (
    <div className="App">
      <TodoForm onSubmit={handleTodoForm} />
      <TodoList onEdit={onEdit} todosList={todos} onDelete={onDelete} />
      <div className="todo__cards">
        <TodoCard priority="Low" />
        <TodoCard priority="Medium" />
        <TodoCard priority="High" />
        <TodoCard priority="Urgent" />
      </div>
    </div>
  );
}

export default App;
