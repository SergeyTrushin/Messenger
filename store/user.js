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
    const resp = await fetch('http://localhost:3001/users/')
    const users = await resp.json()

    const user = users.find(user => user.id == id)
    ctx.commit('updateUser', user)
  }
}

export const getters = {
  user: s => s.user,
  name: s => s.user.name
}