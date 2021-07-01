<template>
  <div class="row ps-2 pe-2 pb-3">
    <div class="col-12">
      <div class="d-flex justify-content-between mt-2">
        <h5 class="shadow-sm ps-3 pt-2 pe-3 pb-2 rounded-3">
          1. Выберите кафе
        </h5>
        <h2 class="">&#8250;</h2>
        <h5 class="shadow-sm ps-3 pt-2 pe-3 pb-2 rounded-3">2. Категорию</h5>
        <h2 class="">&#8250;</h2>
        <h5 class="shadow-sm ps-3 pt-2 pe-3 pb-2 rounded-3">3. Блюдо</h5>
        <h2 class="">&#8250;</h2>
        <h5 class="shadow-sm ps-3 pt-2 pe-3 pb-2 rounded-3">
          4. Сделайте заказ
        </h5>
      </div>
      <hr />
      <LoadingAnimate v-if="loadingKafes" />
      <LoadingAnimate v-if="loadingCategorys" />
      <LoadingAnimate v-if="loadingProducts" />

      <ListKafes v-else :list="list" :type="type" />
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
    },
    kafeId() {
      if (this.$route.params.kafe) {
        return this.kafes.find(
          item => item.alias === this.$route.params.kafe[0]
        ).id
      } else {
        return ''
      }
    },
    categoryId() {
      if (this.$route.params.kafe) {
        return this.category.find(
          item => item.alias === this.$route.params.kafe[1]
        ).id
      } else {
        return ''
      }
    },
    list() {
      if (this.$route.params.kafe) {
        if (this.$route.params.kafe.length === 1) {
          return this.categorys
        } else if (this.$route.params.kafe.length === 2) {
          return this.products
        }
      } else {
        return this.kafes
      }
    },
    type() {
      if (this.$route.params.kafe) {
        if (this.$route.params.kafe.length === 1) {
          return 'categoryId'
        } else if (this.$route.params.kafe.length === 2) {
          return 'productId'
        }
      } else {
        return 'kafeId'
      }
    }
  },
  created() {
    if (this.$route.params.kafe) {
      if (this.$route.params.kafe.length === 1) {
        this.$store.dispatch('getCategorys', this.kafeId)
      }

      if (this.$route.params.kafe.length === 2) {
        this.$store.dispatch('getProducts', {
          kafeId: this.kafeId,
          categoryId: this.categoryId
        })
      }
    }

    this.$watch(
      () => this.$route.params,
      (newParams, previousParams) => {
        // react to route changes...
        if (newParams.kafe) {
          let kafeId = this.kafes.find(
            item => item.alias === newParams.kafe[0]
          ).id

          if (newParams.kafe.length === 1) {
            this.$store.dispatch('getCategorys', kafeId)
          }

          if (newParams.kafe.length === 2) {
            let categoryId = this.categorys.find(
              item => item.alias === newParams.kafe[1]
            ).id
            this.$store.dispatch('getProducts', {
              kafeId,
              categoryId
            })
          }
        }
      }
    )
  }
  // watch: {
  //   kafes() {
  //     if (this.$route.params) {
  //       if (this.$route.params.kafe.length === 1) {
  //         let kafeId = this.kafes.find(
  //           item => item.alias === this.$route.params.kafe[0]
  //         ).id
  //         console.log('wc2[0] kafeId:', kafeId)
  //         this.$store.dispatch('getCategorys', kafeId)
  //       }
  //     }
  //   },
  //   categorys() {
  //     if (this.$route.params.kafe.length === 2) {
  //       let kafeId = this.kafes.find(
  //         item => item.alias === this.$route.params.kafe[0]
  //       ).id
  //       let categoryId = this.categorys.find(
  //         item => item.alias === this.$route.params.kafe[1]
  //       ).id
  //       console.log('wc2[1] kafeId:', kafeId)
  //       console.log('wc2[1] categoryId:', categoryId)
  //       this.$store.dispatch('getProducts', {
  //         kafeId,
  //         categoryId
  //       })
  //     }
  //   }
  // }
}
</script>
