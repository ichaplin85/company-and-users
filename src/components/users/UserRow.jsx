import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserFromCompany } from "../../redux/companySlice";
import { deleteUser, checkUser } from "../../redux/userSlice";
import RowInput from "../ui/RowInput";

const UserRow = ({ user }) => {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteUserFromCompany(user.companyId));
    dispatch(deleteUser(user.id));
  };

  const changeHandler = () => {
    dispatch(checkUser(user.id))
  }


  return (
    <tr className={user.checked ? "active": ""}>
      <td>
        <input
          onChange={changeHandler}
          type="checkbox"
          checked={user.checked}
         />
      </td>
      <RowInput user={user} field={'name'}>{user.name}</RowInput>
      <RowInput user={user} field={'surname'}>{user.surname}</RowInput>
      <RowInput user={user} field={'position'}>{user.position}</RowInput>
      <td>
        <button className="btn" onClick={deleteHandler}>Удалить</button>
      </td>
    </tr>
  );
};

export default UserRow;
