<template>
  <div class="row">
    <div class="col-12">
      <div class="list-group">
        <button
          v-for="item in basket"
          :key="item.id"
          type="button"
          class="
            list-group-item list-group-item-action
            d-flex
            justify-content-between
            align-items-center
            lh-1
          "
        >
          {{ item.title }}
          <span class="badge bg-success">{{ item.price }} ₽</span>
        </button>
      </div>
      <span>Сумма: {{ sumCafe }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    basket() {
      return this.$store.getters.basket
    },
    sumCafe() {
      return 250
    }
  }
}
</script>