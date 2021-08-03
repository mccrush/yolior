<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="cardModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content border-0">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="exampleModalLabel">О проекте</h5> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
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
          <h6 class="d-sm-none card-title lh-1 mb-0" id="cardModalLabel">
            {{ item.title }}
          </h6>
          <h5 class="d-none d-sm-block card-title lh-1 mb-0">
            {{ item.title }}
          </h5>
          <div v-if="type === 'productId'" class="card-text">
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
          <div class="modal-footer">
            <ButtonAddToBasket :item="item" />
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