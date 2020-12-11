<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="card" style="width: 20rem;">
          <div class="card-body">
            <Players></Players>
            <Players></Players>
            <Players></Players>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="card" style="width: 40rem;">
          <div class="card-body">
             <h4 class="card-title" style="font-family: 'Nerko One', cursive; font-size: 5rem">Let's Play</h4>
             <button class="btn btn-success btn-large" @click.prevent="changeStatus" v-if="!status">Start Game</button><br>
             <h4 style="font-size: 3rem;" v-if="status">
               <span class="badge badge-pill badge-success mr-1">A</span>
             </h4><br>
             <form v-if="status">
               <input class="form-control form-control-lg" type="text" placeholder="Guess here" v-model="guessedWord"><br>
               <button type="submit" class="btn btn-primary" @click.prevent="sendWord">Submit</button>
             </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Players from '../components/Players.vue'
export default {
  name: 'GamePage',
  components: {
    Players
  },
  data () {
    return {
      status: false,
      guessedWord: ''
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
