import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMassUsers } from '../../redux/companySlice';
import { checkAllUsers, deleteSecondUsers } from '../../redux/userSlice';
import Userrow from './UserRow';
import * as selectors from '../../redux/selectors'


const User = ({toggleAddUserPopup}) => {

  const dispatch = useDispatch();
  const users = useSelector(selectors.users);
  const usersForCompanies = useSelector(selectors.usersForCompanies)
  const isAllCheckedUsers = useSelector(selectors.isAllCheckedUsers)
  const checkedUsers = useSelector(selectors.checkedUsers)


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
        {usersForCompanies.map(el => <Userrow key={el.id} user={el}/>)}
      </tbody>
    </table>
    </div>

  );
};

export default User;
