<template>
  <div class="row ps-2 pe-2 pb-3">
    <div class="col-12">
      <h4>
        1. Выберите кафе &#8250; 2. Выберите категорию &#8250; 3. Выбериет блюдо
      </h4>
      <hr />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="item in list" :key="item.id" class="col">
          <div class="card shadow-sm border-0 h-100">
            <img
              :src="'/img/' + item.alias + '/main.jpg'"
              class="card-img-top"
              :alt="item.title"
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <router-link :to="'/' + item.alias" class="stretched-link">{{
                  item.title
                }}</router-link>
              </h5>
              <!-- <p class="card-text">
                
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    kafes() {
      return this.$store.getters.kafes
    },
    categorys() {
      return this.$store.getters.categorys
    },
    products() {
      return this.$store.getters.products
    },
    list() {
      if (this.$route.params.kafe) {
        return this.categorys
      } else if (this.$route.params.kafe.category) {
        return this.products
      } else {
        return this.kafes
      }
    }
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