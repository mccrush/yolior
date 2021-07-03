<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-3">
      <button
        class="
          btn
          shadow-sm
          d-flex
          justify-content-center
          align-items-center
          w-100
          p-0
        "
        @click="showKafes"
        :class="{
          active: type === 'kafeId' && !showBasket
        }"
      >
        <h5 class="m-0 pt-2 pb-2">Выберите кафе</h5>
      </button>
    </div>
    <div class="col-12 col-sm-6 col-md-3 mt-2 mt-sm-0">
      <button
        class="
          btn
          shadow-sm
          d-flex
          justify-content-center
          align-items-center
          w-100
          p-0
        "
        @click="showCategorys"
        :class="{
          active: type === 'categoryId' && !showBasket
        }"
        :disabled="!kafeId"
      >
        <h2 class="me-2">&#8250;</h2>
        <h5 class="m-0 pt-2 pb-2">Категорию</h5>
      </button>
    </div>
    <div class="col-12 col-sm-6 col-md-3 mt-2 mt-md-0">
      <button
        class="
          btn
          shadow-sm
          d-flex
          justify-content-center
          align-items-center
          w-100
          p-0
        "
        @click="showProducts"
        :class="{
          active: type === 'productId' && !showBasket
        }"
        :disabled="!categoryId"
      >
        <h2 class="me-2">&#8250;</h2>
        <h5 class="m-0 pt-2 pb-2">Блюдо</h5>
      </button>
    </div>
    <div class="col-12 col-sm-6 col-md-3 mt-2 mt-md-0">
      <button
        class="
          btn
          shadow-sm
          d-flex
          justify-content-center
          align-items-center
          w-100
          p-0
          position-relative
        "
        @click="setShowBasket"
        :class="{
          active: showBasket
        }"
        :disabled="!basket.length"
      >
        <h2 class="me-2">&#8250;</h2>
        <h5 class="m-0 pt-2 pb-2">Сделайте заказ</h5>
        <span
          v-if="basket.length"
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
      </button>
    </div>
  </div>
  <!-- <div class="d-flex justify-content-between mt-2">
    <button
      class="btn shadow-sm p-0"
      @click="showKafes"
      :class="{
        active: type === 'kafeId' && !showBasket
      }"
    >
      <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">1. Выберите кафе</h5>
    </button>
    <h2 class="">&#8250;</h2>
    <button
      class="btn shadow-sm p-0"
      @click="showCategorys"
      :class="{
        active: type === 'categoryId' && !showBasket
      }"
      :disabled="!kafeId"
    >
      <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">2. Категорию</h5>
    </button>
    <h2 class="">&#8250;</h2>
    <button
      class="btn shadow-sm p-0"
      @click="showProducts"
      :class="{
        active: type === 'productId' && !showBasket
      }"
      :disabled="!categoryId"
    >
      <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">3. Блюдо</h5>
    </button>
    <h2 class="">&#8250;</h2>
    <button
      class="btn shadow-sm p-0 position-relative"
      @click="setShowBasket"
      :class="{
        active: showBasket
      }"
      :disabled="!basket.length"
    >
      <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">4. Сделайте заказ</h5>
      <span
        v-if="basket.length"
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
    </button>
  </div> -->
</template>

<script>
export default {
  props: {
    type: String,
    kafeId: String,
    categoryId: String,
    productId: String,
    showBasket: String
  },
  computed: {
    basket() {
      return this.$store.getters.basket
    }
  },
  methods: {
    showKafes() {
      this.$store.commit('setValue', { type: 'kafeId', id: '' })
      this.$store.commit('setValue', { type: 'categoryId', id: '' })
      this.$store.commit('setValue', { type: 'productId', id: '' })
      this.$store.commit('setShowBasket', '')
    },
    showCategorys() {
      this.$store.commit('setValue', { type: 'categoryId', id: '' })
      this.$store.commit('setValue', { type: 'productId', id: '' })
      this.$store.commit('setShowBasket', '')
    },
    showProducts() {
      this.$store.commit('setValue', { type: 'productId', id: '' })
      this.$store.commit('setShowBasket', '')
    },
    setShowBasket() {
      this.$store.commit('setShowBasket', 'show')
    }
  }
}
</script>

<style scoped>
.btn.active {
  border: 1px solid #ffc107;
}
</style>