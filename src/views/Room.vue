<template>
  <div class="room">
    <RoomCard></RoomCard>
    <br>
    <button class="btn btn-danger" @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
import RoomCard from '../components/RoomCard.vue'
export default {
  components: { RoomCard },
  methods: {
    logout () {
      this.$socket.emit('logout', localStorage.getItem('username'))
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
