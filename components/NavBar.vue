<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <h4>Messenger</h4>
      <span>
        В сети: {{ users }}
      </span>
      <h4 v-if="user.name !== ''">
         <b-icon icon="person-fill"></b-icon>
        {{ user.name }}
        <button class="btn btn-outline-secondary ml-2" @click="logout">Выйти</button>
      </h4>
    </div>
  </nav>
</template>

<script>
  export default {
    mounted() {
      setInterval(() => {
        this.$store.dispatch('user/loadUsers')
      },100)
    },
    computed: {
      user() {
        const user = this.$store.getters['user/user']
        return user
      },
      users() {
        const users = this.$store.getters['user/users']
        return users.length
      },
    },
    methods: {
      logout() {
        this.$store.dispatch('user/deleteUser', this.user)
        this.$store.commit('localStorage/clearStorage')
        this.$store.commit('user/logout')
        this.$router.push('/')
      }
    }
  }
</script>