import { Button, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import "./TodoEdit.scss";
const TodoEdit = ({ todo, onSubmit }) => {
  // const [newTerm, setNewTerm] = useState(todo.todo);
  // const [newPriority, setNewPriority] = useState(todo.priority);
  const [newData, setNewData] = useState({
    newTerm: todo.todo,
    newPriority: todo.priority,
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    // onEdit(todo.id, newTerm, newpriority);
    // onSubmit(todo.id, newTerm, newPriority); //send to the method id,newTerm,newPriority
    console.log(todo);
    onSubmit({
      id: todo.id,
      todo: newData.newTerm,
      priority: newData.newPriority,
      completed: todo.completed,
    });
  };
  const onInputChange = (e) => {
    // setNewTerm(e.target.value);
    setNewData({
      ...newData,
      newTerm: e.target.value,
    });
  };
  const onSelectPriority = (e) => {
    console.log(e.target.value);
    // setNewPriority(e.target.value);
    setNewData({
      ...newData,
      newPriority: e.target.value,
    });
  };
  return (
    <form className="todo__edit" onSubmit={onFormSubmit}>
      <Input value={newData.newTerm} onChange={onInputChange} />
      <Select
        onChange={onSelectPriority}
        size="md"
        width="100%"
        value={newData.newPriority}
        style={{ backgroundColor: "white" }}
      >
        <option value="low">Low</option>
        <option value="urgent">Urgent</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </Select>
      <Button onClick={onFormSubmit} colorScheme="blue">
        Update
      </Button>
    </form>
  );
};
export default TodoEdit;
