import { useSelector } from "react-redux";

const TodosList = () => {
  const { TodosState } = useSelector((state) => state);
  
  return (
    <div>
      {TodosState.todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h5>todo no:{todo.id}</h5>
            <h5>{todo.text}</h5>
            <h5>user id:{todo.userID}</h5>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default TodosList;
