import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAllCompanies, deleteSecondCompany } from '../../redux/companySlice';
import { deleteUsersWithCompany } from '../../redux/userSlice';
import CompanyRow from './CompanyRow';
import * as selectors from '../../redux/selectors'



const Company = ({toggleCompany, toggleAddPopup}) => {

  const dispatch = useDispatch();
  const companies  = useSelector(selectors.companies);
  const isAllChecked = useSelector(selectors.isAllChecked);


  const toggle = (e) => {
    dispatch(checkAllCompanies(Boolean(e.target.checked)))
  }

  const addHandler = (e) => {
    e.preventDefault();
    toggleAddPopup()
  }


  const deleteHandler = (e) => {
    e.preventDefault()
    const checkedCompanies = companies.filter(({checked}) => Boolean(checked));
    dispatch(deleteUsersWithCompany(checkedCompanies))
    dispatch(deleteSecondCompany())
  }

  return (

    <div>
      <button className='btn' onClick={addHandler}>Добавить компанию</button>
      <button className='btn' onClick={deleteHandler}>Удалить компании</button>
      <table>
        <thead>
          <tr>
            <th>
              <div>Выбрать все</div>
            <div>
              <input
                type="checkbox"
                name="main_checkbox"
                onChange={toggle}
                value={isAllChecked}
                checked={isAllChecked}
              />
            </div>
            </th>
            <th>Название компании</th>
            <th>Кол-во сотрудников</th>
            <th>Адресс</th>
            <th>Удалить компанию</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(el =>
          <CompanyRow
            key={el.id}
            company={el}
            toggleCompany={toggleCompany}
          />)}
        </tbody>
      </table>
    </div>
  );
};

export default Company;
