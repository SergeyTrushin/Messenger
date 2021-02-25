export const state = () => ({
  user: {
    name: ''
  },
  users: []
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
  } 
}

export const actions = {
  async deleteUser(ctx, user) {
    const resp = await fetch(`http://localhost:3001/users/${user.id}`, {
      method: "DELETE"
    })
  },
  async login(ctx, name) {
    const response = await fetch('http://localhost:3001/users')
    const users = await response.json()

    ctx.commit('setUsers', users)

    if (!users.find(u => u.name == name)) {
      const resp = await fetch('http://localhost:3001/users/', {
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
  }
}

export const getters = {
  user: s => s.user,
  users: s => s.users
}