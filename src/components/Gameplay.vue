<template>
  <div class="card">
    <div class="card-body">
      <h4
        class="card-title mb-0"
        style="font-family: 'Nerko One', cursive; font-size: 3rem"
      >
        Let's Play
      </h4>
      <label v-if="!status && user === detail.admin">Enter Count of Words</label>
      <input
          class="form-control form-control-lg"
          type="number"
          placeholder="Type here"
          v-model="sumWord"
          v-if="!status && user === detail.admin"
        /><br />
      <button
        class="btn btn-success btn-large"
        @click.prevent="getWord"
        v-if="!status && user === detail.admin"
      >
        Start Game</button
      >
      <h4 style="font-size: 2rem">
        <span class="badge badge-pill badge-success mr-1" v-for="(letter, i) in word" :key="i">{{letter}}</span>
      </h4>
      <br />
      <form>
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Type here"
          v-model="guessedWord"
          v-if="status"
        />
        <button type="submit" class="btn btn-primary mt-1" @click.prevent="sendWord" v-if="status">
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
      sumWord: '',
      room: {},
      counter: 0
    }
  },
  props: ['detail'],
  methods: {
    getWord () {
      this.room = this.detail
      this.room.sumWord = Number(this.sumWord)
      this.room.status = 'playing'
      this.$socket.emit('startGame', this.room)
    },
    sendWord () {
      this.$socket.emit('newAnswer', {
        username: localStorage.getItem('username'),
        answer: this.guessedWord,
        roomname: this.detail.roomname,
        word: this.word
      })
      this.guessedWord = ''
    }
  },
  created () {
    if (localStorage.getItem('status')) {
      this.status = true
    }
  },
  sockets: {
    init (payload) {
      console.log(payload)
      this.word = payload
      this.status = true
    },
    finalScore (payload) {
      if (payload.length > 1) {
        const temp = []
        for (let i = 0; i < payload.length; i++) {
          temp.push(' ' + payload[i].username)
        }
        this.$swal(`the winners are${temp} with score: ${payload[0].score}`)
        this.$router.push('/rooms')
      } else {
        this.$swal(`the winner is ${payload[0].username} with score: ${payload[0].score}`)
        this.$router.push('/rooms')
      }
    }
  }
}
</script>

<style>
</style>
