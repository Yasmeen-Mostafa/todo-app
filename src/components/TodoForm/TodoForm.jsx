import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import "./TodoForm.scss";
const TodoForm = ({ onSubmit }) => {
  // const [todo, setTodo] = useState(""); //state to handle todo change
  // const [priority, setPriority] = useState("urgent"); //state to handle priority change, initial value=>value='urgent'
  // collapse two states into one
  const [data, setData] = useState({
    todo: "",
    priority: "urgent",
  });
  //event handler, to handle form submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    //send to the callback from parent the todo and priority to update todos array with the new objects
    onSubmit({
      ...data,
    });
    //clear input value after submitting form
    // setTodo("");
    setData({
      ...data,
      todo: "",
    });
  };
  //event handler, to handle input change
  const onInputChange = (e) => {
    //update state
    // setTodo(e.target.value);
    setData({
      ...data,
      todo: e.target.value,
    });
  };
  //event handler, to handle select priority
  const onSelectPriority = (e) => {
    // console.log(e.target.value);
    //update state
    // setPriority(e.target.value);
    setData({
      ...data,
      priority: e.target.value,
    });
  };
  return (
    <form className="todo__form" onSubmit={onFormSubmit}>
      <Input
        onChange={onInputChange}
        value={data.todo}
        htmlSize={20}
        width="40%"
        placeholder="Basic usage"
      />
      <Select
        onChange={onSelectPriority}
        size="md"
        width="20%"
        value={data.priority}
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
