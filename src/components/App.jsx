import React from "react";
import "./app.css";
import AddCompany from "./addPopup/AddCompany";
import { useState } from "react";
import AddUser from "./addPopup/AddUser";
import Company from "./company/Company";
import User from "./users/User";

function App() {
  const [isAddCompany, setIsAddCompany] = useState(false);
  const [isAddEmploy, setIsAddEmploy] = useState(false);


  const toggleAddPopup = () => {
    setIsAddCompany(prev => !prev)
  }
  const toggleAddUserPopup = () => {
    setIsAddEmploy(prev => !prev)
  }

  return (
    <div className="App">
        <Company toggleAddPopup={toggleAddPopup}/>
        <User toggleAddUserPopup={toggleAddUserPopup}/>
        <AddCompany isAddCompany={isAddCompany} toggleAddPopup={toggleAddPopup}/>
        <AddUser isAddEmploy={isAddEmploy} toggleAddUserPopup={toggleAddUserPopup}/>
    </div>
  );
}

export default App;
