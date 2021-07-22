<template>
  <nav
    class="
      navbar
      fixed-top
      navbar-expand-md navbar-light
      bg-white
      shadow-sm
      pt-1
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
      <button
        v-if="basket.length && !showBasket"
        @click="setShowBasket"
        class="btn btn-outline-warning"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-cart-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
          />
          <path
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          />
        </svg>
        <span
          v-if="basket.length"
          class="badge rounded-pill bg-warning text-white ms-2"
        >
          {{ basket.length }}
          <span class="visually-hidden">Количество выбранных блюд</span>
        </span>
      </button>
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
    },
    basket() {
      return this.$store.getters.basket
    },
    showBasket() {
      return this.$store.getters.showBasket
    }
  },
  methods: {
    setShowBasket() {
      this.$store.commit('setShowBasket', 'show')
    }
  }
}
</script>

<style scoped>
.lh-07 {
  line-height: 0.7 !important;
}

.btn-outline-warning:hover {
  color: #fff;
  background-color: #ffc107;
  /* border-color: #ffc107; */
}
</style>