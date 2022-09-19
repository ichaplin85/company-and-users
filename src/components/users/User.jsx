import React, {useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMassUsers } from '../../redux/companySlice';
import { checkAllUsers, deleteSecondUsers } from '../../redux/userSlice';
import Userrow from './UserRow';
import * as selectors from '../../redux/selectors'


const User = ({toggleAddUserPopup}) => {

  const dispatch = useDispatch();
  const companies  = useSelector(selectors.companies);
  const users = useSelector(selectors.users);

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


  const isAllCheckedUsers = useMemo(() => {
    return usersForCompanies.length > 0 && usersForCompanies.every(({checked}) => Boolean(checked))
  }, [usersForCompanies])



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
    const checkedUsers = usersForCompanies.filter(({checked})=> Boolean(checked));

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
