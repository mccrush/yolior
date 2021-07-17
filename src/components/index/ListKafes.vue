<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      class="col-12 col-sm-6 col-md-4"
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
          <h5 class="card-title lh-1 mb-0">
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
          <button
            v-if="basket.find(el => el.id === item.id)"
            class="
              btn btn-success
              rounded-0 rounded-bottom
              text-white
              w-100
              pt-3
              pb-3
            "
            @click="removeProductFromBasket(item.id)"
          >
            Добавлено
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart-check"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
              <path
                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
          </button>

          <button
            v-else
            class="
              btn btn-warning
              rounded-0 rounded-bottom
              text-white
              w-100
              pt-3
              pb-3
            "
            @click="addToBasket(item)"
          >
            В корзину
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart-plus-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    type: String
  },
  computed: {
    basket() {
      return this.$store.getters.basket
    }
  },
  methods: {
    setItemId(id) {
      this.$store.commit('setValue', { type: this.type, id })
    },
    addToBasket(item) {
      this.$store.commit('addToBasket', item)
    },
    removeProductFromBasket(id) {
      this.$store.commit('removeProductFromBasket', id)
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