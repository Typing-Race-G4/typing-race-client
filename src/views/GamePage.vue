<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div v-for="(player, i) in detail.users" :key= "i" class="card" style="width: 20rem;">
          <div class="card-body">
            <div class="card pmd-card shadow p-3 mb-2 bg-white rounded">
              <div class="card-body d-flex flex-row">
                  <div class="media-body">
                    <h4 class="card-title"><span class="badge badge-pill badge-success">{{player.username}}</span></h4>
                    <h5 class="card-subtitle text-disabled"><span class="badge badge-pill badge-info">Score: <span class="badge badge-pill badge-light">{{player.score}}</span></span></h5>
                  </div>
                  <img class="ml-3" src="https://w1.pngwing.com/pngs/238/504/png-transparent-account-icon-avatar-icon-person-icon-profile-icon-user-icon-orange-line-material-property-circle-symbol-logo.png"  width="50" height="50">
              </div>
          </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="card" style="width: 40rem;">
          <div class="card-body">
             <h4 class="card-title" style="font-family: 'Nerko One', cursive; font-size: 5rem">Let's Play</h4>
             <button class="btn btn-success btn-large" @click.prevent="changeStatus" v-if="!status && user === detail.admin">Start Game</button><br>
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
export default {
  name: 'GamePage',
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
  sockets: {
    fetchPlayers (payload) {
      this.detail = payload
      console.log(this.detail)
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
