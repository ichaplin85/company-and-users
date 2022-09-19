import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import vuid from 'vuid';
import { addUserToCompany } from '../../redux/companySlice';
import { addUser } from '../../redux/userSlice';
import * as selectors from '../../redux/selectors'


const initialValues = {
  name: "",
  surname: "",
  position: "",
};

const AddUser = ({ isAddEmploy, toggleAddUserPopup}) => {

  const companies = useSelector(selectors.companies)

  const dispatch = useDispatch();

  
  const [values, setValues] = useState(initialValues)
  const [company, setCompany] = useState(0)

  const handleInputChange = (e) => {
    const {value, name} = e.target;
    setValues({...values, [name]: value})
  }

  const optionHandler = (e) => {
    const {value, name} = e.target;
    setCompany(value)
    if (!isNaN(Number(value))) {
      setValues({...values, [name]: parseInt(value)})
    } else {
      setValues({...values, [name]: value})
    }
  }

  const addUserHandler = (e) => {
    e.preventDefault()
    const user = {...values, id: vuid(), checked: false}
    dispatch(addUser(user))
    dispatch(addUserToCompany(user.companyId))
    setValues(initialValues)
    setCompany(0)
  }
  const closeHandler = (e) => {
    e.preventDefault()
    toggleAddUserPopup()
  }
  
  return (
    <div className='popup' style={{display: isAddEmploy ? 'block': 'none'}}>
      <form >
        <p>Имя</p>
        <input required type="text" value={values.name} name="name" onChange={handleInputChange}/>
        <p>Фамилия</p>
        <input required type="text" value={values.surname} name="surname" onChange={handleInputChange}/>
        <p>Позиия</p>
        <input required type="text" value={values.position} name="position" onChange={handleInputChange}/>
        <p>Название компании</p>
        <select onChange={optionHandler} name='companyId' value={company} required>
          <option >выберите компанию</option>
          {companies.map((company) => <option key={company.id} value={company.id} >{company.name}</option>)}
        </select>
        <div className='btns'>
          <button className='btn' onClick={addUserHandler}>Создать</button>
          <button className='btn' onClick={closeHandler}>Закрыть</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
