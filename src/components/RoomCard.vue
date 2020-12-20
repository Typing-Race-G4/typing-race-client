<template>
  <div class="row justify-content-center m-0 room-card">
    <button @click="add" class="btn btn-primary">+ Add Room</button>
    <RoomList
      v-for="(room, i) in rooms"
      :key="i"
      :room="room"></RoomList>
  </div>
</template>

<script>
import RoomList from './RoomList.vue'
export default {
  name: 'RoomCard',
  components: { RoomList },
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  methods: {
    add () {
      this.$router.push('/addroom')
    }
  },
  created () {
    this.$socket.emit('updatedRoom')
  }
}
</script>

<style>
</style>
