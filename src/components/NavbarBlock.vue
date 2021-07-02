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
      <!-- <button
        v-if="basket.length"
        type="button"
        class="btn btn-sm btn-light position-relative"
      >
        Корзина
        <span
          class="
            position-absolute
            top-0
            start-100
            translate-middle
            badge
            rounded-pill
            bg-warning
            text-white
          "
        >
          {{ basket.length }}
          <span class="visually-hidden">Количество выбранных блюд</span>
        </span>
      </button> -->
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
    // basket() {
    //   return this.$store.getters.basket
    // },
    pathname() {
      return window.location.pathname
    }
  }
}
</script>