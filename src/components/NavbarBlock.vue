<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="max-width-780 container">
      <div class="navbar-brand d-flex justify-content-center pb-2">
        <img
          src="/logo.svg"
          height="44"
          class="d-inline-block align-top me-2"
          alt="Logo"
        />
        <div class="pt-1 lh-1">
          <strong>Yolior</strong><br />
          <small class="text-muted">доставка еды в Славгороде</small>
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