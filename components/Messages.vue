<template>
  <div class="px-4 py-5 chat-box bg-white overflow-auto" ref="msg-box">
    <div v-for="(msg, id) in arrMsg" :key="id" class="media w-50 mb-3" :class="{ 'ml-auto': name===msg.name }">
      <div class="media-body">
        <div class="mb-2"
        :class="{'text-right': name===msg.name}">
          {{ msg.name }}
        </div>
        <div class="rounded py-2 px-3 mb-2"
             :class="{'bg-primary': name===msg.name, 'bg-light': name!==msg.name}">
          <p class="text-small mb-0 text-white"
             :class="{'text-white': name===msg.name, 'text-muted': name!==msg.name}">
            {{ msg.msg }}
          </p>
        </div>
        <p class="small text-muted">{{ new Date(msg.date).toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        inputNick: ''
      }
    },
    beforeCreate() {
      if (!this.$store.getters['user/user'].name) {
        this.$router.push('/')
      }
    },
    mounted() {
      this.name = this.$store.getters['user/user'].name
      this.getAllMsg()
      this.showChat()
    },
    computed: {
      arrMsg() {
        return this.$store.getters['user/getAllMsg']
      }
    },
    methods: {
      showChat() {
        setInterval(() => {
          this.getAllMsg()
        }, 1000)
      },
      getAllMsg() {
        this.$store.dispatch('user/getAllMsg')
      },
    }
  }
</script>

<style>
  .chat-box{
    max-height: 400px;
  }
</style>
