<template>
  <form action="#" class="bg-light my-5" @submit.prevent="sendMessage">
    <div class="input-group">
      <input type="text" placeholder="Введите сообщение" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light" v-model="inputVal">
      <div class="input-group-append">
        <button id="button-addon2" type="submit" class="btn btn-link">
          <b-icon icon="reply-fill"></b-icon>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        inputVal: '',
        inputNick: ''
      }
    },
    computed: {
      name() {
        return this.$store.getters['user/user'].name
      }
    },
    methods: {
      sendMessage: function () {
        if (this.inputVal.trim()) {
          this.$axios.$post('http://localhost:3001/msgs', {
          name: this.name,
          msg: this.inputVal,
          date: new Date()
        }, {
          header: {
            "Content-Type": "application/json"
          }
        }).then((response) => {
          this.inputVal = ''
          this.scrollBottom()
          this.arrMsg.push(response)
        })
        .catch((error) => {
          console.log(error)
        })
        }
      },
    }
  }
</script>