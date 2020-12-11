<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ room.roomname }}</h5>
        <p class="card-text">Host: {{ room.admin }}</p>
        <p class="card-text">{{ room.users.length }} Joined</p>
        <button class="btn btn-primary" @click="joinRoom(room.roomname)">
          Start
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomList',
  props: ['room'],
  methods: {
    joinRoom (name) {
      const payload = {
        username: localStorage.getItem('username'),
        roomname: name,
        score: 0
      }
      this.$socket.emit('joinRoom', payload)
      this.$router.push(`/game/${name}`)
    }
  }
}
</script>

<style>
</style>
