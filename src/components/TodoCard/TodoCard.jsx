import TodoShow from "../TodoShow/TodoShow";
import "./TodoCard.scss";
const TodoCard = ({ onEdit, onDelete, priority, todos }) => {
  return (
    <div className="todo__card">
      <h1>{priority}</h1>
      {todos
        .filter((todo) => todo.priority === priority.toLowerCase())
        .map((todo, i) => (
          <TodoShow key={i} onEdit={onEdit} onDelete={onDelete} todo={todo} />
        ))}
      {/* <TodoShow /> */}
    </div>
  );
};
export default TodoCard;
