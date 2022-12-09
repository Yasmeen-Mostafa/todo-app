import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard/TodoCard";
import TodoForm from "./components/TodoForm/TodoForm";
const baseUrl = "http://localhost:3001/todos";
let id = 0; //set id for each object, to overwrite json-server id
function App() {
  const [todos, setTodos] = useState([]); //array of objects, each object inside todos is a todo=>todo name, priority
  const fetchTodos = async () => {
    const rendered = await axios.get(baseUrl);
    id = rendered.data.length; //set id to be the same length as array of objects length
    setTodos(rendered.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  /***********Events handlers*************/
  const handleTodoForm = async (todo) => {
    //recieve todo object from TodoForm
    if (todo.todo && todo.priority) {
      id = ++id; //increment id for every new todo
      await axios.post(
        baseUrl,
        JSON.stringify({ ...todo, id, completed: false }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setTodos([...todos, { ...todo, id, completed: false }]);
    }
  };
  const onDelete = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    const rendered = todos.filter((todo) => todo.id !== id);
    setTodos(rendered);
  };
  const onEdit = async (newTodo) => {
    await axios.put(`${baseUrl}/${newTodo.id}`, JSON.stringify(newTodo), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const rendered = [...todos];
    const index = todos.findIndex((todo) => todo.id === newTodo.id); //find index of the object
    rendered[index] = newTodo; //overwrite the current object by the new one
    setTodos(rendered); //set state by the updated todos array
  };
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
