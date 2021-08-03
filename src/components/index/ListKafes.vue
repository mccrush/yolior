<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div
      v-for="item in sortList"
      :key="item.id"
      :id="item.id"
      class="col-6 col-md-4"
    >
      <div class="card shadow-sm border-0 h-100" @click="setItemId(item.id)">
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
        <div class="card-body">
          <h6 class="d-sm-none card-title lh-1 mb-0">
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
        </div>
        <div v-if="type === 'productId'">
          <ButtonAddToBasket :item="item" />
        </div>
      </div>
    </div>
    <ModalCard v-if="item" id="cardModal" :item="item" />
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import ModalCard from '@/components/index/ModalCard'
import ButtonAddToBasket from '@/components/index/ButtonAddToBasket'
import sortMethod from '@/scripts/sortMethod'

export default {
  components: {
    ModalCard,
    ButtonAddToBasket
  },
  props: {
    list: Array,
    type: String
  },
  computed: {
    sortList() {
      return sortMethod(this.list, 'asc', 'position')
    }
  },
  methods: {
    setItemId(id) {
      this.$store.commit('setValue', { type: this.type, id })
      if (this.type === 'productId') {
        this.showModal()
      }
    },
    showModal() {
      const myModal = new Modal(document.getElementById('cardModal'))
      myModal.show()
    }
  }
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
</style>