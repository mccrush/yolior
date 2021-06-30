<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="item in list" :key="item.id" class="col">
      <div class="card shadow-sm border-0 h-100">
        <img
          v-if="type === 'kafeId'"
          :src="'/img/' + item.alias + '/main.jpg'"
          class="card-img-top"
          :alt="item.title"
        />
        <img
          v-else-if="type === 'categoryId'"
          :src="
            '/img/' + $route.params.kafe[0] + '/' + item.alias + '/main.jpg'
          "
          class="card-img-top"
          :alt="item.title"
        />
        <img
          v-if="type === 'productId'"
          :src="'/img/' + item.alias + '/main.jpg'"
          class="card-img-top"
          :alt="item.title"
        />
        <div class="card-body">
          <h5 class="card-title">
            <router-link
              v-if="type === 'kafeId'"
              :to="'/' + item.alias"
              class="stretched-link"
              >{{ item.title }}</router-link
            >
            <router-link
              v-if="type === 'categoryId'"
              :to="'/' + $route.params.kafe[0] + '/' + item.alias"
              class="stretched-link"
              >{{ item.title }}</router-link
            >
            <span v-if="type === 'productId'">{{ item.title }}</span>
          </h5>
          <div v-if="type === 'productId'">
            <p class="card-text">
              <small>Описание для Продуктов</small><br />
              <span class="badge bg-light text-dark"> {{ item.price }} ₽</span>
            </p>
            <router-link
              :to="
                '/' +
                $route.params.kafe[0] +
                '/' +
                $route.params.kafe[1] +
                '/' +
                item.alias
              "
              class="btn btn-light w-100"
              >Подробнее</router-link
            >
            <button class="btn btn-success w-100 mt-2">В корзину</button>
          </div>
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
  }
}
</script>


<style scoped>
.card {
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