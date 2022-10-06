import React from "react";
import { useDispatch } from "react-redux";
import { deleteCompany, check } from "../../redux/companySlice";
import RowInput from "../ui/RowInput";

const CompanyRow = ({ company }) => {
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
      <RowInput company={company} field={'name'}>{company.name}</RowInput>
      <td>{company.employyees}</td>
      <RowInput company={company} field={'address'}>{company.address}</RowInput>
      <td>
        <button className="btn" onClick={deleteHandler}>Удалить</button>
      </td>
    </tr>
  );
};

export default CompanyRow;
