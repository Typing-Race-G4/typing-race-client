<template>
  <div class="login">
    <h3>Typing Race</h3>
    <form @submit.prevent="add">
      <div class="form-group">
        <label>Name</label>
        <input v-model="username" type="text" class="form-control" />
        <button class="btn btn-primary mt-3">Submit</button>
      </div>
    </form>
    <br>
    <h3 style="font-family: 'Nerko One', cursive;">How to play :</h3>
    <ul style="list-style: none">
      <li>Masukkan Username</li>
      <li>Create / Join Room</li>
      <li>Persiapkan diri anda</li>
      <li>Game Start!!!</li>
      <li>Ketik kata yang tersedia secepat mungkin</li>
      <li>Pemenang adalah yang berhasil mengetikkan kata tercepat</li>
    </ul>
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
      this.$router.push('/rooms')
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
