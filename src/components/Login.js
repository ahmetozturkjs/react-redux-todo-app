import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

import actionTypes from "../redux/actions/actionTypes";

const Login = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {UsersState}=useSelector(state=>state)
    

    const [inputTextValue,setInputTextValue]=useState({
        "username":"",
        "password":""
    })
   

const LoginHandle=(e)=>{
    e.preventDefault()
    if(!inputTextValue.username||!inputTextValue.password){
        alert("All fields must be filled")
        return
    }
    const loginUser=UsersState.users.find(user=>user.username===inputTextValue.username)
    if(!loginUser){
        alert("No registered user found")
        return
    }
    if(loginUser.password!==inputTextValue.password){
        alert("Wrong password")
        return
    }
    dispatch({type:actionTypes.FETCH_LOGIN_SUCCESS,payload:{id:loginUser.id,username:loginUser.username,password:loginUser.password,role:loginUser.role,isLogin:true}})
    window.localStorage.setItem("loginUser",JSON.stringify({id:loginUser.id,username:loginUser.username,password:loginUser.password,role:loginUser.role,isLogin:true}))
    navigate("/")

}

  return (
    <div
      style={{ height: "67vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form onSubmit={LoginHandle} className="w-25">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            value={inputTextValue.username}
            onChange={(e)=>setInputTextValue({...inputTextValue,username:e.target.value})}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your information with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
           value={inputTextValue.password}
           onChange={(e)=>setInputTextValue({...inputTextValue,password:e.target.value})}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary w-50">
            Login
          </button>
          <Link to="/register" type="submit" className="btn btn-info w-50">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
