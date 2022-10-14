
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const Register = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {UsersState,LoginState}=useSelector(state=>state)

    const [textınputValue,setTextInputValue]=useState({
        "username":"",
        "password":"",
        "repassword":""
    })

    if(LoginState.isRole!==""){
      
      navigate("/")
    }

    const RegisterHandle=(e)=>{
        e.preventDefault()

        

        if(!textınputValue.username||!textınputValue.password||!textınputValue.repassword){
            alert("All fields must be filled")
            return
        }
        const registerUser=UsersState.users.find(user=>user.username===textınputValue.username)

        if(registerUser){
            alert("you must take another username")
            return
        }
        if(textınputValue.password!==textınputValue.repassword){
            alert("Different password")
            return
        }
        const newUser={
            id:new Date().getTime(),
            username:textınputValue.username,
            password:textınputValue.password,
            role:"user"
        }
       
        axios
        .post("http://localhost:3004/users",newUser)
        .then(res=>{
            dispatch({type:actionTypes.FETCH_USER_REGISTER,payload:newUser})
        })
        .catch((err)=>console.log(err,"axios new user error"))
        navigate("/login")
    }

  return (
    <div style={{ height: "67vh" }}
    className="d-flex justify-content-center align-items-center">
      <form className="w-25" onSubmit={RegisterHandle}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
          value={textınputValue.username}
          onChange={(e)=>setTextInputValue({...textınputValue,username:e.target.value})}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your data with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          
          <input value={textınputValue.password}  onChange={(e)=>setTextInputValue({...textınputValue,password:e.target.value})}  type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="repassword" className="form-label">
            RePassword
          </label>
          <input  onChange={(e)=>setTextInputValue({...textınputValue,repassword:e.target.value})} value={textınputValue.repassword} type="password" className="form-control" id="repassword" />
        </div>
        <div className="text-center mt-4">
        <button type="submit" className="btn btn-primary w-50">
          Submit
        </button>
        <Link to="/" type="submit" className="btn btn-info w-50">
          Cancel
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
