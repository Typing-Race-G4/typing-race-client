<template>
  <div class="createRoom">
      <h3>Create Room</h3>
      <form @submit.prevent="createRoom">
        <div class="form-group">
          <label>Room Name</label>
          <input v-model="roomname" type="text" class="form-control" />
          <button class="btn btn-primary mt-3">Submit</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      roomname: ''
    }
  },
  methods: {
    createRoom () {
      const payload = {
        roomname: this.roomname,
        admin: localStorage.getItem('username')
      }
      this.$socket.emit('createRoom', payload)
      this.roomname = ''
      this.$router.push('/rooms')
    }
  }
}
</script>

<style>
  .createRoom{
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
