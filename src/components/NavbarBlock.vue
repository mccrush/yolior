<template>
  <nav
    class="
      navbar
      fixed-top
      navbar-expand-md navbar-light
      bg-white
      shadow-sm
      pt-0
      pb-1
    "
  >
    <div class="max-width-780 container">
      <div class="navbar-brand d-flex justify-content-center">
        <img
          src="/logo.svg"
          height="41"
          class="d-inline-block align-top me-2"
          alt="Logo"
        />
        <div class="lh-07 pt-2">
          <strong>Yolior</strong><br />
          <small class="text-muted"
            ><small>доставка еды в Славгороде</small></small
          >
        </div>
      </div>
      <!-- <div v-if="pathname === '/admin'">
        <span v-if="userId" class="navbar-brand badge bg-success text-white"
          >Вы авторизованы</span
        ><a v-else class="navbar-brand pb-2" href="/login">Войти</a>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    pathname() {
      return window.location.pathname
    }
  }
}
</script>

<style scoped>
.lh-07 {
  line-height: 0.7 !important;
}
</style>