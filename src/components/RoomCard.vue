<template>
<div class="row justify-content-center">
  <button
    @click="addForm"
    class="btn btn-primary">+ Add Room</button>
  <div class="card col-md-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Room-1</h5>
      <p class="card-text">Host: Ronal</p>
      <p class="card-text">0 Joined</p>
      <a href="#" class="btn btn-primary">Start</a>
    </div>
  </div>
  <div class="card col-md-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Room-2</h5>
      <p class="card-text">Host: Ronal</p>
      <p class="card-text">0 Joined</p>
      <a href="#" class="btn btn-primary">Start</a>
    </div>
  </div>
  <div class="card col-md-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Room-3</h5>
      <p class="card-text">Host: Ronal</p>
      <p class="card-text">0 Joined</p>
      <a href="#" class="btn btn-primary">Start</a>
    </div>
  </div>
  <div class="card col-md-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Room-4</h5>
      <p class="card-text">Host: Ronal</p>
      <p class="card-text">0 Joined</p>
      <a href="#" class="btn btn-primary">Start</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    addForm () {
      this.$router.push('/addroom')
    }
  }
}
</script>

<style>
</style>
