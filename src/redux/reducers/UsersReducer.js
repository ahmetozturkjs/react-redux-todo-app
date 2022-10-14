import actionTypes from "../actions/actionTypes";

const initialState = {
  start: false,
  success: false,
  users: [],
  fail: false,
  errorMassage: "",
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_START:
      return {
        ...state,
        start: true,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        start: false,
        success: true,
        users: action.payload,
      };
      case actionTypes.FETCH_USER_EDIT:
        const editUser=state.users.filter(user=>user.id!==action.payload.id)
        return {
          ...state,          
          users:[...editUser,action.payload],
        };
        case actionTypes.FETCH_USER_REGISTER:
        
        return {
          ...state,          
          users:[...state.users,action.payload]
        };
    case actionTypes.FETCH_USER_ERROR:
      return {
        ...state,
        fail: false,
        errorMassage: action.payload,
      };

    default:
      return state;
  }
};
export default UsersReducer;
