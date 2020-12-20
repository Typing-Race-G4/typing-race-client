<template>
  <div class="card card-player" style="width: 15rem">
    <div class="card-body">
      <div class="card pmd-card shadow p-3 bg-white rounded">
        <div class="card-body d-flex flex-row">
          <div class="media-body">
            <h4 class="card-title">
              <span class="badge badge-pill badge-success">{{ player.username }}</span>
            </h4>
            <h5 class="card-subtitle text-disabled">
              <span class="badge badge-pill badge-info"
                >Score:
                <span class="badge badge-pill badge-light">{{ player.score }}</span></span
              >
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamePlayer',
  props: ['player']
}
</script>

<style>
</style>
