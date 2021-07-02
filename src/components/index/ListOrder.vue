<template>
  <div class="mt-3 mb-4">
    <div class="d-flex justify-content-between align-items-center">
      <!-- <h5>{{ kafeId }}</h5> -->
      <h5 class="m-0">{{ kafe.title }}</h5>
      <a :href="'tel:' + kafe.phone" class="btn btn-warning text-white"
        ><strong>Позвонить и заказать</strong></a
      >
    </div>
    <div class="list-group mt-2">
      <div
        v-for="item in products"
        :key="item.id"
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
          lh-1
        "
      >
        <div>
          <span class="badge bg-white text-danger border border-danger me-2">
            Пицца
          </span>
          {{ item.title }}
        </div>
        <div>
          <span class="badge bg-light text-dark me-2">{{ item.kafeId }}</span>
          <span v-if="item.weight" class="badge bg-light text-dark me-2">
            {{ item.weight }} г</span
          >
          <span v-if="item.amount" class="badge bg-light text-dark me-2">
            {{ item.amount }} шт</span
          >
          <span v-if="item.volume" class="badge bg-light text-dark me-2">
            {{ item.volume }} л</span
          >
          <span class="badge bg-white text-success border border-success"
            >{{ item.price }} ₽</span
          >
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end pt-1 pe-3">
      <div>
        Общая сумма заказа
        <span class="badge bg-success ms-1">{{ totalSum }} ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    kafeId: String,
    basket: Array
  },
  computed: {
    kafes() {
      return this.$store.getters.kafes
    },
    kafe() {
      return this.kafes.find(item => item.id === this.kafeId)
    },
    products() {
      return this.basket.filter(item => item.kafeId === this.kafeId)
    },
    totalSum() {
      return this.products.reduce((accum, current) => accum + current.price, 0)
    }
  }
}
</script>