import roles from "../utulities/roles";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";



const SingleUser = (props) => {

    const dispatch=useDispatch()
  const { user } = props;
  const [updateUser, setUpdateUser] = useState(user);
  const SaveRole = () => {
    axios
    .put(`http://localhost:3004/users/${user.id}`,updateUser)
    .then((res)=>{
        dispatch({type:actionTypes.FETCH_USER_EDIT,payload:updateUser})
        window.localStorage.setItem("loginUser",JSON.stringify({id:updateUser.id,username:updateUser.username,password:updateUser.password,role:updateUser.role,isLogin:updateUser.isLogin}))
    })
    .catch((err)=>console.log(err))
  };

  return (
    <>
      <h5>{user.id}</h5>
      <h5>{user.text}</h5>
      <h5>
        <span>
          user role:
          <select onChange={(e)=>setUpdateUser({...updateUser,role:e.target.value})} defaultValue={updateUser.role}>
            {roles.map((role) => {
              return (
                <option key={role} value={role}>
                  {role}
                </option>
              );
            })}
          </select>
        </span>
        {
          user.role!== updateUser.role&&  <button  onClick={SaveRole}>Save</button>
        }
       
      </h5>
      <hr />
    </>
  );
};
export default SingleUser;
