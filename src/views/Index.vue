<template>
  <div class="row ps-2 pe-2 pb-3">
    <div class="col-12">
      <div class="d-flex justify-content-between">
        <h5 class="shadow-sm ps-4 pt-2 pe-4 pb-2 rounded-3">
          1. Выберите кафе
        </h5>
        <h2 class="">&#8250;</h2>
        <h5 class="shadow-sm ps-4 pt-2 pe-4 pb-2 rounded-3">
          2. Выбериет блюдо
        </h5>
        <h2 class="">&#8250;</h2>
        <h5 class="shadow-sm ps-4 pt-2 pe-4 pb-2 rounded-3">
          3. Сделайте заказ
        </h5>
      </div>
      <hr />
      <LoadingAnimate v-if="loadingKafes" />
      <div v-else class="row row-cols-1 row-cols-md-3 g-4">
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
import LoadingAnimate from '@/components/LoadingAnimate'

export default {
  components: {
    LoadingAnimate
  },
  beforeMount() {
    if (this.$route.params.kafe) {
      let kafeId = this.kafes.find(
        item => item.alias === this.$route.params.kafe
      )
      console.log('bm kafeId:', kafeId)
      // this.$store.dispatch('getCategorys', kafeId)
      // this.list = this.categorys
    } else {
      this.list = this.kafes
    }
    //this.$store.dispatch('getCategorys', newId)
  },
  data() {
    return {
      list: []
    }
  },
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
    loadingKafes() {
      return this.$store.getters.loadingKafes
    },
    loadingCategorys() {
      return this.$store.getters.loadingCategorys
    },
    loadingProducts() {
      return this.$store.getters.loadingProducts
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (newParams, previousParams) => {
        // react to route changes...
        console.log('wc newParams:', newParams)
        let kafeId = this.kafes.find(item => item.alias === newParams.kafe).id
        console.log('wc kafeId:', kafeId)
        this.$store.dispatch('getCategorys', kafeId)
        this.list = this.categorys
      }
    )
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