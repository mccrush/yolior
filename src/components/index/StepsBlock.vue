<template>
  <div class="d-flex justify-content-between mt-2">
    <button
      class="btn shadow-sm p-0"
      @click="showKafes"
      :class="{
        active: type === 'kafeId'
      }"
    >
      <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">1. Выберите кафе</h5>
    </button>
    <h2 class="">&#8250;</h2>
    <button
      class="btn shadow-sm p-0"
      @click="showCategorys"
      :class="{
        active: type === 'categoryId'
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
        active: type === 'productId'
      }"
      :disabled="!categoryId"
    >
      <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">3. Блюдо</h5>
    </button>
    <h2 class="">&#8250;</h2>
    <button
      class="btn shadow-sm p-0 position-relative"
      @click="showBasket"
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
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    kafeId: String,
    categoryId: String,
    productId: String
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
    },
    showCategorys() {
      this.$store.commit('setValue', { type: 'categoryId', id: '' })
      this.$store.commit('setValue', { type: 'productId', id: '' })
    },
    showProducts() {
      this.$store.commit('setValue', { type: 'productId', id: '' })
    }
  }
}
</script>

<style scoped>
.btn.active {
  border: 1px solid #ffc107;
}
</style>