import { createSelector } from "@reduxjs/toolkit";

export const users = state => state.users;
export const companies = state => state.companies;


export const checkedCompanies = createSelector(
  companies,
  companies => companies.filter(({ checked }) => Boolean(checked))
);

export const usersForCompanies = createSelector(
  checkedCompanies,
  users,
  (checkedCompanies, users) => (checkedCompanies.reduce(
    (acc, { id }) => [
      ...acc,
      ...users.filter(({ companyId }) => companyId === id),
    ], []))
)

export const isAllCheckedUsers = createSelector(
  usersForCompanies,
  (usersForCompanies) => usersForCompanies.length > 0 && usersForCompanies.every(({ checked }) => Boolean(checked))
)

export const isAllChecked = createSelector(
  companies,
  companies => companies.length > 0 && companies.every(({ checked }) => Boolean(checked))
)

export const checkedUsers = createSelector(
  usersForCompanies,
  (usersForCompanies) => usersForCompanies.filter(({ checked }) => Boolean(checked))
) 
