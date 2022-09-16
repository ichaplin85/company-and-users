import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserFromCompany } from "../redux/companySlice";
import { deleteUser, checkUser } from "../redux/userSlice";

const Userrow = ({ user }) => {
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
      <td contentEditable suppressContentEditableWarning>{user.name}</td>
      <td contentEditable suppressContentEditableWarning>{user.surname}</td>
      <td contentEditable suppressContentEditableWarning>{user.position}</td>
      <td>
        <button className="btn" onClick={deleteHandler}>Удалить</button>
      </td>
    </tr>
  );
};

export default Userrow;
