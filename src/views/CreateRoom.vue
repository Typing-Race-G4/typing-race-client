<template>
  <div class="form-login">
    <div class="card card-add-room">
      <div class="card-body">
        <h5 class="card-title">Create Room</h5>
        <form @submit.prevent="createRoom">
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Room Name</span>
            </div>
            <input v-model="roomname" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
          </div>
          <button class="btn btn-primary mt-2 p-1 start">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      roomname: ''
    }
  },
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  methods: {
    createRoom () {
      let flag = false
      for (let i = 0; i < this.rooms.length; i++) {
        if (this.roomname === this.rooms[i].roomname) {
          flag = true
        }
      }
      if (!flag) {
        const payload = {
          roomname: this.roomname,
          admin: localStorage.getItem('username'),
          status: 'open'
        }
        this.$socket.emit('createRoom', payload)
        this.roomname = ''
        this.$router.push('/rooms')
      } else {
        this.$alert('Room name is already exist', null, 'error')
        this.$router.push('/rooms')
      }
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
