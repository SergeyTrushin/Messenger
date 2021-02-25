<template>
  <form @submit.prevent="login" class="input-group mt-2">
    <input type="text" class="form-control" placeholder="Введите ваше имя" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="name">
    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Войти</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      async login() {
        const resp = await fetch('http://localhost:3001/users/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "name": this.name,
          }
          )
        })
        const user = await resp.json()
        await this.$store.dispatch('user/setUser', user.id)
        this.$router.push('/messenger')
      }
    },
    
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
