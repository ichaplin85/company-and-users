import React, { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeCompany } from '../../redux/companySlice';
import { changeUser } from '../../redux/userSlice';

const RowInput = ({ children, ...props}) => {

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(children)
  const [input, setInput] = useState(false)

  // Использовать реф на инпуте???
  const inputRef = useRef(null)

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const saveHandler = () => {
    if ('user' in props) {
      dispatch(changeUser({field: props.field, user: props.user, input: inputValue}))
    }
    if ('company' in props) {
      dispatch(changeCompany({field: props.field, company: props.company, input: inputValue}))
    }
    setInput(false)
  }

  const changeShow = () => {
    setInput(true)
  }

  return (
    <>
      {
      input ? 
        <td>
            <input type={'text'} value={inputValue} onChange={changeHandler} ref={inputRef}/>
            <button onClick={saveHandler}>Сохранить</button>
        </td>
        : <td onClick={changeShow}>{children}</td> 
      }
    </>

  );
};

export default RowInput;
