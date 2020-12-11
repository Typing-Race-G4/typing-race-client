<template>
  <div>
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
      <div class="row justify-content-center" v-for="(room, i) in rooms" :key="i">
        <button
          @click="addForm"
          class="btn btn-primary">+ Add Room</button>
        <div class="card col-md-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{room.roomname}}</h5>
            <p class="card-text">Host: {{room.admin}}</p>
            <p class="card-text">{{room.users.length}} Joined</p>
            <button class="btn btn-primary" @click="joinRoom(room.roomname)">Start</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rooms: '',
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
    },
    joinRoom (name) {
      const payload = {
        username: localStorage.getItem('username'),
        roomname: name,
        score: 0
      }
      this.$socket.emit('joinRoom', payload)
      this.$router.push(`/game/${name}`)
    }
  },
  sockets: {
    fetchRooms (data) {
      this.rooms = data
    },
    updateRoom (data) {
      this.rooms = data
    }
  }
}
</script>

<style>

</style>
