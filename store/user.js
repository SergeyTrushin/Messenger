export const state = () => ({
  user: {
    name: ''
  }
})

export const mutations =  {
  updateUser(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = {name: ''}
  }
}

export const actions = {
  async setUser(ctx, id) {
    const user = users.find(user => user.id == id)
    ctx.commit('updateUser', user)
  },
  async deleteUser(ctx, user) {
    const resp = await fetch(`http://localhost:3001/users/${user.id}`, {
      method: "DELETE"
    })
  },
  async login(ctx, name) {
    const response = await fetch('http://localhost:3001/users')
    const users = await response.json()

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
  user: s => s.user
}