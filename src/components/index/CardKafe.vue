<template>
  <div class="col-6 col-md-4">
    <div class="card shadow-sm border-0 h-100">
      <img
        v-if="item.image"
        :src="item.image"
        class="card-img-top"
        :alt="item.title"
      />
      <img
        v-else
        src="/img/index/noimage.jpg"
        class="card-img-top"
        :alt="item.title"
      />
      <div class="card-body p-2 p-sm-3">
        <h6 class="d-sm-none card-title lh-1 mb-0">
          {{ item.title }}
        </h6>
        <h5 class="d-none d-sm-block card-title lh-1 mb-0">
          {{ item.title }}
        </h5>
        <div v-if="type === 'productId'" class="card-text">
          <div class="truncate-text lh-1 small mt-1 mt-sm-2 mb-1 mb-sm-2">
            {{ item.description }}
          </div>
          <span v-if="item.weight" class="badge bg-light text-dark me-2 p-1">
            {{ item.weight }} г</span
          >
          <span v-if="item.amount" class="badge bg-light text-dark me-2 p-1">
            {{ item.amount }} шт</span
          >
          <span v-if="item.volume" class="badge bg-light text-dark me-2 p-1">
            {{ item.volume }} л</span
          >
          <span class="badge bg-white text-success border border-success p-1">
            {{ item.price }} ₽</span
          >
        </div>
      </div>
      <div v-if="type === 'productId'">
        <ButtonAddToBasket :item="item" :roundBottom="true" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAddToBasket from '@/components/index/ButtonAddToBasket'

export default {
  components: {
    ButtonAddToBasket
  },
  props: {
    item: Object,
    type: String
  },
  methods: {}
}
</script>

<style scoped>
.card {
  cursor: pointer;
  transition: 0.3s ease;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.stretched-link {
  color: #212529;
  text-decoration: none;
}

.opacity-06 {
  opacity: 0.6;
}

.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>