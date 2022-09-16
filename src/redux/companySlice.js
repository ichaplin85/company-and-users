import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
  "id": 1,
  "name": "Romaguera-Crona",
  "employyees": 9,
  "address": "harness real-time e-markets",
  "checked": false
},
{
  "id": 2,
  "name": "Deckow-Crist",
  "employyees": 9,
  "address": "synergize scalable supply-chains",
  "checked": false
},
{
  "id": 3,
  "name": "Robel-Corkery",
  "employyees": 6,
  "address": "transition cutting-edge web services",
  "checked": false
}];

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany(state, { payload }) {
      state.push(payload)
    },
    deleteCompany(state, { payload }) {
      return state.filter(item => item.id !== payload)
    },
    deleteSecondCompany(state, { payload }) {
      return state.filter(({ checked }) => Boolean(!checked))
    },
    deleteUserFromCompany(state, { payload }) {
      state.map((company) => {
        if (company.id === payload) {
          company.employyees -= 1;
          return company;
        }
        return company
      })
    },
    addUserToCompany(state, { payload }) {
      state.map((company) => {
        if (company.id === payload) {
          company.employyees += 1;
          return company;
        }
        return company
      })
    },
    check(state, { payload }) {
      state.forEach((company) => {
        if (company.id === payload) {
          company.checked = !company.checked
        }
      })
    },
    checkAllCompanies(state, { payload }) {
      state.forEach((company) => {
        company.checked = payload
      })
    },
    deleteMassUsers(state, { payload }) {
      const mapUsers = {}
      for (const num of payload) {
        if (!mapUsers[num.companyId]) {
          mapUsers[num.companyId] = 1;
        } else {
          mapUsers[num.companyId] += 1;
        }
      }
      state.forEach((company) => {
        if (company.id in mapUsers) {
          company.employyees -= mapUsers[company.id]
        }
      })
    }
  }
})


export const {
  addCompany,
  deleteCompany,
  deleteUserFromCompany,
  addUserToCompany,
  check,
  checkAllCompanies,
  deleteSecondCompany,
  deleteMassUsers
} = companySlice.actions

export default companySlice.reducer
