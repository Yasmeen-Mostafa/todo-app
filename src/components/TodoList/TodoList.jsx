import TodoShow from "../TodoShow/TodoShow";
import "./TodoList.scss";
const TodoList = ({ todosList, onDelete, onEdit }) => {
  const renderedTodos = todosList.map((todo, i) => {
    return <TodoShow onEdit={onEdit} onDelete={onDelete} todo={todo} key={i} />;
  });
  return <div className="todo__list">{renderedTodos}</div>;
};
export default TodoList;
