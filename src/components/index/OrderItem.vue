<template>
  <div class="list-group-item lh-1 p-0 ps-2 pt-2 pe-2 pb-2">
    <div class="pb-1">
      {{ item.title }}
    </div>

    <div class="d-flex justify-content-between align-items-start pt-1">
      <div class="w-50">
        <span
          class="badge bg-white text-secondary border border-secondary me-2 p-1"
        >
          {{ item.categoryTitle }}
        </span>
        <span v-if="item.weight" class="badge bg-light text-dark me-2 p-1">
          {{ item.weight }} г</span
        >
        <span v-if="item.amount" class="badge bg-light text-dark me-2 p-1">
          {{ item.amount }} шт</span
        >
        <span v-if="item.volume" class="badge bg-light text-dark me-2 p-1">
          {{ item.volume }} л</span
        >
      </div>
      <div class="d-flex justify-content-end align-items-center w-50 p-0">
        <div
          class="
            width-120
            d-flex
            justify-content-center
            align-items-center
            me-2
          "
        >
          <button
            class="btn btn-outline-secondary lh-1 p-0 ps-3 pt-2 pb-2 pe-3"
            type="button"
            @click="count--"
            :disabled="count < 2"
          >
            -
          </button>

          <input
            type="text"
            class="form-control text-center lh-1 p-0 ps-2 pt-1 pb-1 pe-2"
            aria-label="Counts"
            v-model="count"
          />
          <button
            class="btn btn-outline-secondary lh-1 p-0 ps-3 pt-2 pb-2 pe-3"
            type="button"
            @click="count++"
          >
            +
          </button>
        </div>

        <button
          class="btn btn-outline-danger rounded-1 lh-1 p-0 ps-3 pt-2 pb-2 pe-3"
          @click="removeProductFromBasket()"
        >
          &#215;
        </button>
      </div>
    </div>
    <div class="text-end pt-1">
      <span class="badge bg-white text-success border border-success me-1 p-1"
        >{{ item.price }} ₽</span
      >
      <small> x {{ count }} = </small>
      <span class="badge bg-white text-success border border-success p-1"
        >{{ itogSum }} ₽</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      count: 1
    }
  },
  computed: {
    itogSum() {
      return this.item.price * this.count
    }
  },
  methods: {
    removeProductFromBasket() {
      this.$store.commit('removeProductFromBasket', this.item.id)
    }
  }
}
</script>

<style scoped>
.width-120 {
  width: 120px;
}
</style>