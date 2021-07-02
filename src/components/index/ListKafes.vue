<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="item in list" :key="item.id" class="col">
      <div class="card shadow-sm border-0 h-100" @click="setItemId(item.id)">
        <img
          v-if="type === 'kafeId'"
          :src="'/img/' + item.alias + '/main.jpg'"
          class="card-img-top"
          :alt="item.title"
        />
        <div class="card-body">
          <h5 class="card-title">
            {{ item.title }}
          </h5>
          <div v-if="type === 'productId'">
            <p class="card-text">
              <!-- <small>Описание для Продуктов</small><br /> -->
              <span v-if="item.weight" class="badge bg-light text-dark me-1">
                {{ item.weight }} г</span
              >
              <span v-if="item.amount" class="badge bg-light text-dark me-1">
                {{ item.amount }} шт</span
              >
              <span v-if="item.volume" class="badge bg-light text-dark me-1">
                {{ item.volume }} л</span
              >
              <span class="badge bg-success"> {{ item.price }} ₽</span>
            </p>
          </div>
        </div>
        <button
          v-if="type === 'productId'"
          class="
            btn btn-warning
            rounded-0 rounded-bottom
            text-white
            w-100
            pt-3
            pb-3
          "
        >
          В корзину
        </button>
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
  methods: {
    setItemId(id) {
      this.$store.commit('setValue', { type: this.type, id })
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
</style>