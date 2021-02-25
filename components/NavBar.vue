<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <h4>Messenger</h4>
      <h4 v-if="user.name !== ''">
         <b-icon icon="person-fill"></b-icon>
        {{ user.name }}
        <button class="btn btn-outline-secondary" @click="logout">Выйти</button>
      </h4>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      user() {
        const user = this.$store.getters['user/user']
        return user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('user/deleteUser', this.user)
        this.$store.commit('user/logout')
        this.$router.push('/')
      }
    }
  }
</script>