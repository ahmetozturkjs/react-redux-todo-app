import { useSelector } from "react-redux";
import SingleUser from "./SingleUser";

const UsersList = () => {
  const { UsersState } = useSelector((state) => state);

  return (
    <div>
      {UsersState.users.map((user) => {
        return <SingleUser key={user.id} user={user} />;
      })}
    </div>
  );
};
export default UsersList;
