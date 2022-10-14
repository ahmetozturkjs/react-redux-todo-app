import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useEffect} from "react"

import UsersHome from "../Users/UsersHome";
import AdminHome from "../Admin/AdminHome";


const Home = () => {
  const { LoginState } = useSelector((state) => state);
  const navigate = useNavigate();


useEffect(()=>{
    if (!LoginState.isLogin) {
        navigate("/login");
      }
},[])

  

 
  return (
    <div className="container my-5 ">
    
     
      {LoginState.role === "user" && <UsersHome />}
      {LoginState.role === "admin" && <AdminHome />}
    </div>
  );
};

export default Home;
