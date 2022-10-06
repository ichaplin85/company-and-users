import { createSlice } from '@reduxjs/toolkit'

const userSlices = createSlice({
  name: 'users',
  initialState: [{
    "id": 1,
    "name": "Leanne Graham",
    "surname": "Bret",
    "position": "new",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "surname": "Antonette",
    "position": "last",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "surname": "Samantha",
    "position": "first",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 4,
    "name": "Leanne Graham",
    "surname": "Bret",
    "position": "ceo",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 5,
    "name": "Ervin Howell",
    "surname": "Antonette",
    "position": "cto",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 6,
    "name": "Clementine Bauch",
    "surname": "Samantha",
    "position": "back",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 7,
    "name": "Patricia Lebsack",
    "surname": "Karianne",
    "position": "Julianne.OConner@kory.org",
    "companyId": 3,
    "checked": false
  },
  {
    "id": 8,
    "name": "Chelsey Dietrich",
    "surname": "Kamren",
    "position": "Lucio_Hettinger@annie.ca",
    "companyId": 3,
    "checked": false
  },
  {
    "id": 17,
    "name": "Leanne Graham",
    "surname": "Bret",
    "position": "new",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 18,
    "name": "Ervin Howell",
    "surname": "Antonette",
    "position": "last",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 19,
    "name": "Clementine Bauch",
    "surname": "Samantha",
    "position": "first",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 20,
    "name": "Leanne Graham",
    "surname": "Bret",
    "position": "ceo",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 21,
    "name": "Ervin Howell",
    "surname": "Antonette",
    "position": "cto",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 22,
    "name": "Clementine Bauch",
    "surname": "Samantha",
    "position": "back",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 23,
    "name": "Patricia Lebsack",
    "surname": "Karianne",
    "position": "Julianne.OConner@kory.org",
    "companyId": 3,
    "checked": false
  },
  {
    "id": 24,
    "name": "Chelsey Dietrich",
    "surname": "Kamren",
    "position": "Lucio_Hettinger@annie.ca",
    "companyId": 3,
    "checked": false
  }, {
    "id": 25,
    "name": "Leanne Graham",
    "surname": "Bret",
    "position": "new",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 10,
    "name": "Ervin Howell",
    "surname": "Antonette",
    "position": "last",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 11,
    "name": "Clementine Bauch",
    "surname": "Samantha",
    "position": "first",
    "companyId": 1,
    "checked": false
  },
  {
    "id": 12,
    "name": "Leanne Graham",
    "surname": "Bret",
    "position": "ceo",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 13,
    "name": "Ervin Howell",
    "surname": "Antonette",
    "position": "cto",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 14,
    "name": "Clementine Bauch",
    "surname": "Samantha",
    "position": "back",
    "companyId": 2,
    "checked": false
  },
  {
    "id": 15,
    "name": "Patricia Lebsack",
    "surname": "Karianne",
    "position": "Julianne.OConner@kory.org",
    "companyId": 3,
    "checked": false
  },
  {
    "id": 16,
    "name": "Chelsey Dietrich",
    "surname": "Kamren",
    "position": "Lucio_Hettinger@annie.ca",
    "companyId": 3,
    "checked": false
  },
  ],
  reducers: {
    deleteUser(state, { payload }) {
      return state.filter(user => user.id !== payload)
    },
    addUser(state, { payload }) {
      state.push(payload)
    },
    getUsersSlice(state, { payload }) {
      return state.filter(user => user.companyId === payload)
    },
    checkAllUsers(state, { payload }) {
      const usersId = payload.users.map(el => el.id)

      state.forEach((user) => {
        if (usersId.includes(user.id)) {
          user.checked = payload.flag
        }
      })
    },
    checkUser(state, { payload }) {
      state.forEach((user) => {
        if (user.id === payload) {
          user.checked = !user.checked
        }
      })
    },
    changeUser(state, { payload }) {
      const { field, user, input } = payload;
      state.forEach((u) => {
        if (u.id === user.id) {
          u[field] = input
        }
      })
    },
    deleteSecondUsers(state, { payload }) {
      return state.filter(({ checked }) => Boolean(!checked))
    },
    deleteUsersWithCompany(state, { payload }) {
      const mapCompany = {}
      for (const num of payload) {
        if (!mapCompany[num.id]) {
          mapCompany[num.id] = true;
        }
      }
      state.forEach((user, i) => {
        if (user.companyId in mapCompany) {
          state.splice(i, 1)
        }
      })
    }
  }
})

export const {
  deleteUser,
  addUser,
  getUsersSlice,
  checkAllUsers,
  checkUser,
  deleteSecondUsers,
  deleteUsersWithCompany,
  changeUser
} = userSlices.actions
export default userSlices.reducer
