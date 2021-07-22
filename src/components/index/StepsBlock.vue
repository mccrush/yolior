<template>
  <div class="row">
    <div class="col-6 col-sm-6 col-md-3">
      <button
        class="
          btn-1 btn
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
        <h5 class="m-0 pt-2 pb-2">Кафе</h5>
      </button>
    </div>
    <div class="col-6 col-sm-6 col-md-3 mt-sm-0">
      <button
        class="
          btn-2 btn
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
        <h5 class="m-0 pt-2 pb-2">Категория</h5>
      </button>
    </div>
    <div class="col-6 col-sm-6 col-md-3 mt-3 mt-md-0">
      <button
        class="
          btn-3 btn
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
        <h5 class="m-0 pt-2 pb-2">Блюдо</h5>
      </button>
    </div>
    <div class="col-6 col-sm-6 col-md-3 mt-3 mt-md-0">
      <button
        class="
          btn-4 btn
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
        <h5 class="m-0 pt-2 pb-2">Заказ</h5>
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

.btn-1 {
  background: url(/img/index/steps/1.svg) 3% center no-repeat;
}
.btn-2 {
  background: url(/img/index/steps/2.svg) 3% center no-repeat;
}
.btn-3 {
  background: url(/img/index/steps/3.svg) 3% center no-repeat;
}
.btn-4 {
  background: url(/img/index/steps/4.svg) 3% center no-repeat;
}
</style>