import { useSelector } from "react-redux";

const UsersHome = () => {
  const { TodosState, LoginState } = useSelector((state) => state);

  const LoginuserTodos = TodosState.todos.filter(
    (todo) => todo.userID === LoginState.id
  );
  return (
    <div>
      {LoginuserTodos.map((todo) => {
        return (
          <div key={todo.id}>
            <div className="row">
              <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
                <h5>user no:{todo.userID}</h5>
                <h5>todo no:{todo.id}</h5>
              </div>
              <div className="col-md-8 d-flex justify-content-center align-items-center">
                <h5>{todo.text}</h5>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center">
                {todo.isDone && "Done"} {"undone"}
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  ></label>
                </div>
              </div>
            </div>

            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default UsersHome;
