import TodoShow from "../TodoShow/TodoShow";
import "./TodoList.scss";
const TodoList = ({ todosList, onDelete }) => {
  const renderedTodos = todosList.map((todo, i) => {
    return <TodoShow onDelete={onDelete} todo={todo} key={i} />;
  });
  return <div className="todo__list">{renderedTodos}</div>;
};
export default TodoList;
