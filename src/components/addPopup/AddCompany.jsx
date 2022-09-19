import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import vuid from 'vuid'
import { addCompany } from '../../redux/companySlice';


const initialValues = {
  name: "",
  address: "",
  employyees: 0,
};

const AddCompany = ({isAddCompany, toggleAddPopup}) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value})
  }

  const addCompanyHandler = (e) => {
    e.preventDefault()
    const company = {...values, id: vuid(), checked: false}
    dispatch(addCompany(company))
    setValues(initialValues)
  }

  const closeHandler = (e) => {
    e.preventDefault()
    toggleAddPopup()
  }


  return (
    <div className='popup' style={{display: isAddCompany ? 'block': 'none'}}>
      <form >
        <p>Название</p>
        <input required type="text" value={values.name} name="name" onChange={handleInputChange}/>
        <p>Адрес</p>
        <input required type="text" value={values.address} name="address" onChange={handleInputChange}/>
        <div className='btns'>
          <button className='btn' onClick={addCompanyHandler}>Создать</button>
          <button className='btn' onClick={closeHandler}>Закрыть</button>
        </div>
      </form>
    </div>
  );
};

export default AddCompany;