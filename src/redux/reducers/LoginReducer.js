import actionTypes from "../actions/actionTypes";

const initialState = {
  id: "",
  isLogin: false,
  username: "",
  role: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOGIN_START:
      return {
        ...state,
        id: action.payload.id,
        isLogin: action.payload.isLogin,
        username: action.payload.username,
        role: action.payload.role,
      };

    case actionTypes.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        isLogin: action.payload.isLogin,
        username: action.payload.username,
        role: action.payload.role,
      };
    case actionTypes.FETCH_LOGIN_REMOVE:
      return {
        initialState,
      };

    default:
      return state;
  }
};

export default LoginReducer;
