<template>
  <form @submit.prevent="login" class="input-group mt-2">
    <input type="text" class="form-control" placeholder="Введите ваше имя" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="name">
    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Войти</button>
    <div class="alert alert-danger col-12 mt-2" v-if="invalid">
      Пользователь с таким именем уже в сети! Введите другое имя, пожалуйста.
    </div>
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
    beforeMount() {
      let user = this.$store.state.localStorage.user
      if (user.name !== '') {
        this.$router.push('/messenger')
      }
    },
    methods: {
      async login() {
        if (this.name.trim()) {
          const user = await this.$store.dispatch('user/login', this.name.trim())
          if (user !== '0') {
            await this.$store.commit('user/updateUser', user)
            await this.$store.commit('localStorage/updateStorage', user)
            this.$router.push('/messenger')
          } else {
            this.invalid = true
            this.name = ''
          }
        }
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
