<template>
  <div class="row ps-2 pe-2 pb-3">
    <div class="col-12">
      <div class="d-flex justify-content-between mt-2">
        <button
          class="btn shadow-sm p-0"
          @click="showKafes"
          :class="{
            active: type === 'kafeId'
          }"
        >
          <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">1. Выберите кафе</h5>
        </button>
        <h2 class="">&#8250;</h2>
        <button
          class="btn shadow-sm p-0"
          @click="showCategorys"
          :class="{
            active: type === 'categoryId'
          }"
        >
          <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">2. Категорию</h5>
        </button>
        <h2 class="">&#8250;</h2>
        <button
          class="btn shadow-sm p-0"
          @click="showProducts"
          :class="{
            active: type === 'productId'
          }"
        >
          <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">3. Блюдо</h5>
        </button>
        <h2 class="">&#8250;</h2>
        <button class="btn shadow-sm p-0" @click="showBasket">
          <h5 class="m-0 ps-3 pe-3 pt-2 pb-2">4. Сделайте заказ</h5>
        </button>
      </div>
      <hr />
      <LoadingAnimate
        v-if="loadingKafes || loadingCategorys || loadingProducts"
      />
      <ListKafes :list="list" :type="type" />
    </div>
  </div>
</template>

<script>
import ListKafes from '@/components/index/ListKafes'
import LoadingAnimate from '@/components/LoadingAnimate'

export default {
  components: {
    ListKafes,
    LoadingAnimate
  },
  computed: {
    kafes() {
      return this.$store.getters.kafes
    },
    kafeId() {
      return this.$store.getters.kafeId
    },
    categorys() {
      return this.$store.getters.categorys
    },
    categoryId() {
      return this.$store.getters.categoryId
    },
    products() {
      return this.$store.getters.products
    },
    productId() {
      return this.$store.getters.productId
    },
    loadingKafes() {
      return this.$store.getters.loadingKafes
    },
    loadingCategorys() {
      return this.$store.getters.loadingCategorys
    },
    loadingProducts() {
      return this.$store.getters.loadingProducts
    },

    list() {
      if (this.kafeId) {
        if (this.categoryId) {
          return this.products
        } else {
          return this.categorys
        }
      } else {
        return this.kafes
      }
    },
    type() {
      if (this.kafeId) {
        if (this.categoryId) {
          return 'productId'
        } else {
          return 'categoryId'
        }
      } else {
        return 'kafeId'
      }
    }
  },
  created() {
    if (this.kafeId) {
      this.$store.dispatch('getCategorys', this.kafeId)
    }
    if (this.categoryId) {
      this.$store.dispatch('getProducts', {
        kafeId: this.kafeId,
        categoryId: this.categoryId
      })
    }
  },
  methods: {
    showKafes() {
      this.$store.commit('setValue', { type: 'kafeId', id: '' })
      this.$store.commit('setValue', { type: 'categoryId', id: '' })
      this.$store.commit('setValue', { type: 'productId', id: '' })
    },
    showCategorys() {
      this.$store.commit('setValue', { type: 'categoryId', id: '' })
      this.$store.commit('setValue', { type: 'productId', id: '' })
    },
    showProducts() {
      this.$store.commit('setValue', { type: 'productId', id: '' })
    }
  },
  watch: {
    kafeId(newId) {
      if (newId) {
        this.$store.dispatch('getCategorys', newId)
        this.$store.commit('getProducts', [])
        this.$store.commit('setValue', { type: 'categoryId', id: '' })
        this.$store.commit('setValue', { type: 'productId', id: '' })
      }
    },
    categoryId(newId) {
      if (newId) {
        this.$store.dispatch('getProducts', {
          kafeId: this.kafeId,
          categoryId: newId
        })
        this.$store.commit('setValue', { type: 'productId', id: '' })
      }
    },
    categorys() {
      this.category = null
    },
    products() {
      this.product = null
    }
  }
}
</script>

<style scoped>
.btn.active {
  border: 1px solid #ffc107;
  /* background: #20c997; */
}
</style>
