const URL = 'http://localhost:3001'

export const state = () => ({
  user: {name: ''},
  users: [],
  msgs: []
})

export const mutations =  {
  updateUser(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = {name: ''}
  },
  setUsers(state, users) {
    state.users = users
  },
  updateMsgs(state, msgs) {
    state.msgs = msgs
  }
}

export const actions = {
  async deleteUser(ctx, user) {
    const resp = await fetch(`${URL}/users/${user.id}`, {
      method: "DELETE"
    })
  },
  async login(ctx, name) {
    const response = await fetch(`${URL}/users`)
    const users = await response.json()

    if (!users.find(u => u.name == name)) {
      const resp = await fetch(`${URL}/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": name,
        }
        )
      })
      var user = await resp.json()
    } else {
      var user = '0'
    }

    return user
  },
  async loadUsers(ctx) {
    const response = await fetch(`${URL}/users`)
    const users = await response.json()

    ctx.commit('setUsers', users)
  },
  async getAllMsg(ctx) {
    const response = await fetch(`${URL}/msgs`)
    const msgs = await response.json()

    ctx.commit('updateMsgs', msgs)
  }
}

export const getters = {
  user: s => s.user,
  users: s => s.users,
  getAllMsg: s => s.msgs
}
