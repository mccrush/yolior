<template>
  <div
    class="modal fade m-0 p-0"
    tabindex="-1"
    aria-labelledby="cardModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content border-0">
        <div class="modal-header border-bottom-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0">
          <img
            v-if="item.image"
            :src="item.image"
            class="card-img-top rounded-0"
            :alt="item.title"
          />
          <img
            v-else
            src="/img/index/noimage.jpg"
            class="card-img-top rounded-0"
            :alt="item.title"
          />
          <h5 class="card-title lh-1 m-3 mb-0" id="cardModalLabel">
            {{ item.title }}
          </h5>
          <div class="card-text m-3 mt-2">
            <div class="lh-1 small mt-2 mb-2">{{ item.description }}</div>
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
          <div class="d-sm-none modal-footer fixed-bottom border-top-0 p-0">
            <ButtonAddToBasket :item="item" />
          </div>
          <div class="d-none d-sm-block modal-footer border-top-0 p-0">
            <ButtonAddToBasket :item="item" :roundBottom="true" />
          </div>
        </div>
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
    item: Object
  }
}
</script>