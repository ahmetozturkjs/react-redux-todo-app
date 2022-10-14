import actionTypes from "../actions/actionTypes";

const initialState = {
  start: false,
  success: false,
  todos: [],
  fail: false,
  errorMassage: "",
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODO_START:
      return {
        ...state,
        start: true,
      };
    case actionTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        start: false,
        success: true,
        todos: action.payload,
      };
    case actionTypes.FETCH_TODO_ERROR:
      return {
        ...state,
        fail: false,
        errorMassage: action.payload,
      };

    default:
      return state;
  }
};
export default TodosReducer;
