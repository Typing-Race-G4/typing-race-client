<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <GamePlayer
          v-for="(player, i) in detail.users"
          :key= "i"
          :player="player"></GamePlayer>
      </div>
      <div class="col-md-8">
        <Gameplay :detail="detail"></Gameplay>
      </div>
    </div>
  </div>
</template>

<script>
import Gameplay from '../components/Gameplay.vue'
import GamePlayer from '../components/GamePlayer.vue'
export default {
  name: 'GamePage',
  components: { GamePlayer, Gameplay },
  computed: {
    detail () {
      return this.$store.state.detail
    }
  }
}
</script>

<style>

</style>
