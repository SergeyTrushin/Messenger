export const state = () => ({
  user: {name: ''}
})

export const mutations = {
  updateStorage: (state, user) => state.user = user,
  clearStorage: (state) => state.user = {name: ''}
}