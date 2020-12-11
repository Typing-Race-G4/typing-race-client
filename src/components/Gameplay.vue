<template>
  <div class="card" style="width: 40rem">
    <div class="card-body">
      <h4
        class="card-title"
        style="font-family: 'Nerko One', cursive; font-size: 5rem"
      >
        Let's Play
      </h4>
      <button
        class="btn btn-success btn-large"
        @click.prevent="getWord"
        v-if="!status && user === detail.admin"
      >
        Start Game</button
      ><br />
      <h4 style="font-size: 3rem">
        <span class="badge badge-pill badge-success mr-1" v-for="(letter, i) in word" :key="i">{{letter}}</span>
      </h4>
      <br />
      <form>
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Guess here"
          v-model="guessedWord"
        /><br />
        <button type="submit" class="btn btn-primary" @click.prevent="sendWord">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: false,
      guessedWord: '',
      detailPage: '',
      user: localStorage.getItem('username'),
      word: '',
      counter: 0
    }
  },
  props: ['detail'],
  methods: {
    getWord () {
      this.status = true
      this.$socket.emit('startGame', this.detail)
    },
    sendWord () {
      if (this.counter < 5) {
        this.$socket.emit('newAnswer', {
          counter: this.counter,
          username: localStorage.getItem('username'),
          answer: this.guessedWord,
          roomname: this.detail.roomname,
          word: this.word
        })
        this.guessedWord = ''
      }
    }
  },
  created () {
    if (localStorage.getItem('status')) {
      this.status = true
    }
  },
  sockets: {
    init (payload) {
      this.word = payload
      console.log(payload)
      this.counter++
    },
    finalScore (payload) {
      console.log(payload)
      // Swal.fire(`the winner is ${payload[0].username}`)
    }
  }
}
</script>

<style>
</style>
