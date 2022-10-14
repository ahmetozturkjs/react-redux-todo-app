import { useSelector } from "react-redux"

import UsersList from "./UsersList"
import TodosList from "./TodosList"
import { useState } from "react"

const AdminHome=()=>{

  

    const[button,setButton]=useState("users")

  

    return(
        <div className="m-4">
            <button value={"users"} onClick={(e)=>setButton(e.target.value)}>users</button>
            <button value={"todos"} onClick={(e)=>setButton(e.target.value)}>todos</button>

            {
                    button==="users"&&<UsersList/>
            }

            {
                    button==="todos"&&<TodosList/>
            }
        </div>
    )
}
export default AdminHome