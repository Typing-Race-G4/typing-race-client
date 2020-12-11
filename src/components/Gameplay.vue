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
        @click.prevent="changeStatus"
        v-if="!status && user === detail.admin"
      >
        Start Game</button
      ><br />
      <h4 style="font-size: 3rem" v-if="status">
        <span class="badge badge-pill badge-success mr-1">A</span>
      </h4>
      <br />
      <form v-if="status">
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
      detail: '',
      user: localStorage.getItem('username')
    }
  },
  methods: {
    changeStatus () {
      this.status = true
      localStorage.setItem('status', true)
    },
    sendWord () {
      this.$store.commit('getAnswer', {
        username: localStorage.getItem('username'),
        answer: this.guessedWord,
        score: 0 // akan diganti
      })
    }
  },
  created () {
    if (localStorage.getItem('status')) {
      this.status = true
    }
  }
}
</script>

<style>
</style>
