import {createStore,combineReducers} from "redux"

import LoginReducer from "./reducers/LoginReducer"
import UsersReducer from "./reducers/UsersReducer"
import TodosReducer from "./reducers/TodosReducer"

const rootReducer=combineReducers({
    LoginState:LoginReducer,
    UsersState:UsersReducer,
    TodosState:TodosReducer
})

const store=createStore(rootReducer)

export default store