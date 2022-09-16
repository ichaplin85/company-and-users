import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMassUsers } from '../redux/companySlice';
import { checkAllUsers, deleteSecondUsers } from '../redux/userSlice';
import Userrow from './Userrow';


const User = ({users, isAllCheckedUsers, toggleAddUserPopup}) => {

  const dispatch = useDispatch();


  const toggle = (e) => {
    const payload = {
      flag: e.target.checked,
      users: [...users]
    }
    dispatch(checkAllUsers(payload))
  }

  const addHandler = (e) => {
    e.preventDefault()
    toggleAddUserPopup()
  }


  const deleteHandler = (e) => {
    e.preventDefault()
    const checkedUsers = users.filter(({checked})=> Boolean(checked));

    dispatch(deleteMassUsers(checkedUsers))
    dispatch(deleteSecondUsers())
  }

  return (
    <div>
      <button className='btn' onClick={addHandler}>Добавить сотрудника</button>
      <button className='btn' onClick={deleteHandler}>Удалить сотрудника</button>
      <table>
      <thead>
        <tr>
          <th>
            <div>
            Выбрать все
            </div>
            <div>
              <input
              type="checkbox"
              onChange={toggle}
              checked={isAllCheckedUsers}
              value={isAllCheckedUsers}
               />
            </div>
          </th>
          <th>Имя сотрдуника</th>
          <th>Фамилия сотрудникоа</th>
          <th>Позиция</th>
          <th>Удалить сотрудника</th>
        </tr>
      </thead>
      <tbody>
        {users.map(el => <Userrow key={el.id} user={el}/>)}
      </tbody>
    </table>
    </div>

  );
};

export default User;
