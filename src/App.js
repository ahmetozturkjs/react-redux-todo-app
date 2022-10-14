import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import HomePage from "./pages/HomePages";
import LoginPage from "./pages/Loginpage";
import actionTypes from "./redux/actions/actionTypes";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const dispatch = useDispatch();
  const [info,setInfo]=useState(false)
  useEffect(() => {
    const loginUser = window.localStorage.getItem("loginUser");
    if (!loginUser) {
      const newLoginUser = {
        id: "",
        username: "",
        isLogin: false,
        role: "",
      };
      window.localStorage.setItem("loginUser", JSON.stringify(newLoginUser));
    } else {
      const loginUserobje = JSON.parse(loginUser);
      dispatch({ type: actionTypes.FETCH_LOGIN_START, payload: loginUserobje });
    }
    dispatch({ type: actionTypes.FETCH_USER_START });
    axios
      .get("http://localhost:3004/users")
      .then((res) => {
        dispatch({ type: actionTypes.FETCH_USER_SUCCESS, payload: res.data });
      })
      .catch((err) =>
        dispatch({
          type: actionTypes.FETCH_USER_ERROR,
          payload: "AXIS USERS ERROR",
        })
      );

    dispatch({ type: actionTypes.FETCH_TODO_START })
    axios.get("http://localhost:3004/todos")
    .then((res)=>{
      dispatch({ type: actionTypes.FETCH_TODO_SUCCESS,payload:res.data })
    })
    .catch((err)=>dispatch({type:actionTypes.FETCH_TODO_ERROR,payload:"AXIS TODOS ERROR"}))
      setInfo(true)
  }, []);


  if (!info) return null
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
