import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import "./TodoForm.scss";
const TodoForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState(""); //state to handle todo change
  const [priority, setPriority] = useState("urgent"); //state to handle priority change
  //event handler, to handle form submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    //send to the callback from parent the todo and priority to update todos array with the new objects
    onSubmit({ id: Math.floor(Math.random() * 1000), todo, priority });
    //clear input value after submitting form
    setTodo("");
  };
  //event handler, to handle input change
  const onInputChange = (e) => {
    //update state
    setTodo(e.target.value);
  };
  //event handler, to handle select priority
  const onSelectPriority = (e) => {
    // console.log(e.target.value);
    //update state
    setPriority(e.target.value);
  };
  return (
    <form className="todo__form" onSubmit={onFormSubmit}>
      <Input
        onChange={onInputChange}
        value={todo}
        htmlSize={20}
        width="40%"
        placeholder="Basic usage"
      />
      <Select
        onChange={onSelectPriority}
        size="md"
        width="15%"
        style={{ backgroundColor: "white" }}
      >
        <option value="urgent">Urgent</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </Select>
      {/* <button>ADD</button> */}
    </form>
  );
};
export default TodoForm;
