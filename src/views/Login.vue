<template>
  <div class="form-login">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Typing Race</h5>
        <form @submit.prevent="add">
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
            </div>
            <input v-model="username" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
          </div>
          <button class="btn btn-primary mt-2 p-1 start">Submit</button>
        </form>
        <h3 style="font-family: 'Nerko One', cursive;">How to play :</h3>
        <p>Masukkan Username <br> Create / Join Room <br> Persiapkan diri anda <br> Game Start!!! <br> Ketik kata yang tersedia secepat mungkin <br> Pemenang adalah yang berhasil mengetikkan kata tercepat</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    add () {
      localStorage.setItem('username', this.username)
      this.$socket.emit('login', this.username)
      setTimeout(() => {
        if (this.$store.state.status) {
          this.$router.push('/rooms')
        } else {
          this.$swal('Username is already exist')
        }
      }, 2000)
    }
  },
  sockets: {
  }
}
</script>

<style>
.login {
  min-width: 500px;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(215, 220, 250);
  padding: 3rem 3rem;
}
</style>
