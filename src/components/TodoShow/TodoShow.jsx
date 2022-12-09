import { useState } from "react";
import TodoEdit from "../TodoEdit/TodoEdit";
import "./TodoShow.scss";
const TodoShow = ({ todo, onDelete, onEdit }) => {
  const [completed, setCompleted] = useState(todo.completed);
  const [edit, setEdit] = useState(false);
  const onDeleteClick = () => {
    onDelete(todo.id);
  };
  const onEditClick = () => {
    setEdit(!edit);
  };
  const onTodoClick = () => {
    setCompleted(!completed);
    onEdit({ ...todo, completed: !completed });
  };
  //callback to close the form in edit after submitting it
  //bad solution
  {
    //because now we have two methods called when we submit form, onEdit & handleSubmitFromEdit
    /*const handleSubmitFromEdit = () => {
    setEdit(false); //close the form
  };*/
  }

  // better solution, collapse two handlers methods ,called when we submit the form
  const handleSubmitFromEdit = (todo) => {
    console.log(todo);
    setEdit(false); //close the form
    onEdit(todo); //edit with new term and new priority
  };
  //object with todo,priority
  return (
    <div className="todo__show">
      <div className="todo__container">
        {/* Priority emoji */}
        {completed
          ? "✔"
          : todo.priority == "low"
          ? "🟡"
          : todo.priority == "high"
          ? "🔴"
          : todo.priority == "medium"
          ? "🟠"
          : "❗"}
        {/* Show Edit component or todo name if edit clicked */}
        {edit ? (
          <TodoEdit onSubmit={handleSubmitFromEdit} todo={todo} />
        ) : (
          <h3
            onClick={onTodoClick}
            style={{
              textDecoration: completed ? "line-through" : "",
              opacity: completed ? "0.6" : "1",
              cursor: "pointer",
              width: "90%",
            }}
          >
            {todo.todo}
          </h3>
        )}
      </div>
      <div className="edit__delete">
        <button onClick={onEditClick} className="edit">
          📝
        </button>
        <button onClick={onDeleteClick} className="delete">
          X
        </button>
      </div>
    </div>
  );
};
export default TodoShow;
