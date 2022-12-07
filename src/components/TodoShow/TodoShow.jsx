import "./TodoShow.scss";
const TodoShow = ({ todo, onDelete }) => {
  const onDeleteClick = () => {
    onDelete(todo.id);
  };
  const onEditClick = () => {};

  //object with todo,priority
  return (
    <div className="todo__show">
      <div className="todo__container">
        {todo.priority == "low"
          ? "🟡"
          : todo.priority == "high"
          ? "🔴"
          : todo.priority == "medium"
          ? "🟠"
          : "❗"}

        <h3>{todo.todo}</h3>
      </div>
      <button onClick={onDeleteClick} className="delete">
        X
      </button>
      <button onClick={onEditClick} className="edit">
        📝
      </button>
    </div>
  );
};
export default TodoShow;
