import React from "react";
import { useDispatch } from "react-redux";
import { deleteCompany, check } from "../redux/companySlice";

const Companyrow = ({ company }) => {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteCompany(company.id));
  };

  const changeHandler = () => {
    dispatch(check(company.id))
  }

  return (
    <tr className={company.checked ? "active": ""}>
      <td>
        <input
          onChange={changeHandler}
          type="checkbox"
          checked={company.checked}
        />
      </td>
      <td contentEditable suppressContentEditableWarning>{company.name}</td>
      <td>{company.employyees}</td>
      <td contentEditable suppressContentEditableWarning>
        {company.address}
        </td>
      <td>
        <button className="btn" onClick={deleteHandler}>Удалить</button>
      </td>
    </tr>
  );
};

export default Companyrow;
