<template>
  <div class="card" style="width: 20rem">
    <div class="card-body">
      <div class="card pmd-card shadow p-3 mb-2 bg-white rounded">
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
          <img
            class="ml-3"
            src="https://w1.pngwing.com/pngs/238/504/png-transparent-account-icon-avatar-icon-person-icon-profile-icon-user-icon-orange-line-material-property-circle-symbol-logo.png"
            width="50"
            height="50"
          />
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
