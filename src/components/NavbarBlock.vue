<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="max-width-780 container">
      <router-link class="navbar-brand pb-2" to="/">
        <img
          src="/logo.svg"
          height="30"
          class="d-inline-block align-top me-2"
          alt="Logo"
        />
        <strong>Yolior - заказ доставки в Славгороде</strong>
      </router-link>
      <div v-if="pathname === '/admin'">
        <span v-if="userId" class="navbar-brand badge bg-success text-white"
          >Вы авторизованы</span
        ><a v-else class="navbar-brand pb-2" href="/login">Войти</a>
      </div>
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