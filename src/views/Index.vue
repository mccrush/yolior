<template>
  <div class="row ps-2 pe-2 pb-3">
    <div class="col-12">
      <StepsBlock
        :type="type"
        :kafeId="kafeId"
        :categoryId="categoryId"
        :productId="productId"
      />
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
import StepsBlock from '@/components/index/StepsBlock'

export default {
  components: {
    ListKafes,
    LoadingAnimate,
    StepsBlock
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

