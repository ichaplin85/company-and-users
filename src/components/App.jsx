import React, { useMemo } from "react";
import "./app.css";
import { useSelector } from "react-redux";
import Addcompanies from "./addPopup//Addcompanies";
import { useState } from "react";
import Adduser from "./addPopup/Adduser";
import Company from "./Company";
import User from "./User";

function App() {
  const users = useSelector((state) => state.users);
  const companies = useSelector((state) => state.companies);
  const [isAddCompany, setIsAddCompany] = useState(false);
  const [isAddEmploy, setIsAddEmploy] = useState(false);

  const checkedCompanies = useMemo(() => {
    return companies.filter(({ checked }) => Boolean(checked));
  }, [companies])


  const usersForCompanies = useMemo(() => {
    return checkedCompanies.reduce(
      (acc, { id }) => [
        ...acc,
        ...users.filter(({ companyId }) => companyId === id),
      ],
      [])
  }, [checkedCompanies, users]);


  const isAllCheckedCompany = useMemo(() => {
    return companies.length > 0 && companies.every(({checked}) => Boolean(checked))
  }, [companies])

  const isAllCheckedUsers = useMemo(() => {
    return usersForCompanies.length > 0 && usersForCompanies.every(({checked}) => Boolean(checked))
  }, [usersForCompanies])

  const toggleAddPopup = () => {
    setIsAddCompany(!isAddCompany)
  }
  const toggleAddUserPopup = () => {
    setIsAddEmploy(!isAddEmploy)
  }

  return (
    <div className="App">
        <Company isAllChecked={isAllCheckedCompany} toggleAddPopup={toggleAddPopup}/>
        <User users={usersForCompanies} isAllCheckedUsers={isAllCheckedUsers} toggleAddUserPopup={toggleAddUserPopup}/>
        <Addcompanies isAddCompany={isAddCompany} toggleAddPopup={toggleAddPopup}/>
        <Adduser isAddEmploy={isAddEmploy} toggleAddUserPopup={toggleAddUserPopup}/>
    </div>
  );
}

export default App;
