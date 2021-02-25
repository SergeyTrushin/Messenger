<template>
  <form @submit.prevent="login" class="input-group mt-2">
    <input type="text" class="form-control" placeholder="Введите ваше имя" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="name">
    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Войти</button>
    <span v-if="invalid">asdas</span>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        invalid: false
      }
    },
    methods: {
      async login() {
        const user = await this.$store.dispatch('user/login', this.name)
        if (user !== '0') {
          this.$store.commit('user/updateUser', user)
        } else {

        }
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
