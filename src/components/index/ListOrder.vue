<template>
  <div>
    <LoadingAnimate v-if="loadingKafes" />
    <div v-else class="d-flex justify-content-between align-items-center">
      <h5>{{ kafeId }}</h5>
      <!-- <h5>{{ kafe.title }}</h5>
      <a :href="'tel:' + kafe.phone" class="btn btn-sm btn-warning"
        >Позвонить в кафе</a
      > -->
    </div>
    <div class="list-group mt-2">
      <button
        v-for="item in products"
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
        <div>
          <span class="badge bg-light text-dark me-2">{{ item.kafeId }}</span>
          <span class="badge bg-success">{{ item.price }} ₽</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import LoadingAnimate from '@/components/LoadingAnimate'

export default {
  components: {
    LoadingAnimate
  },
  props: {
    kafeId: String,
    basket: Array
  },
  computed: {
    products() {
      return this.basket.filter(item => item.kafeId === this.kafeId)
    },
    kafes() {
      return this.$store.getters.kafes
    },
    kafe() {
      return this.kafes.find(item => item.id === this.kafeId)
    }
  }
}
</script>