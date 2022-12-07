import TodoShow from "../TodoShow/TodoShow";
import "./TodoCard.scss";
const TodoCard = ({ priority }) => {
  return (
    <div className="todo__card">
      <h1>{priority}</h1>
      {/* <TodoShow /> */}
    </div>
  );
};
export default TodoCard;
