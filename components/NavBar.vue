<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <h4>Messenger</h4>
      <h4 v-if="name !== ''">
         <b-icon icon="person-fill"></b-icon>
        {{ name }}
        <button class="btn btn-outline-secondary" @click="logout">Выйти</button>
      </h4>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      name() {
        const user = this.$store.getters['user/user']
        return user.name
      }
    },
    methods: {
      logout() {
        this.$store.commit('user/logout')
        this.$router.push('/')
      }
    }
  }
</script>