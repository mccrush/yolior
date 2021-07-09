<template>
  <div class="row">
    <div class="col-12">
      <div>
        <div v-for="el in basketKafes" :key="el">
          <ListOrder
            :kafeId="el"
            :basket="basket"
            @remove-product="removeProduct"
            @remove-all-prod-in-kafe="removeAllProductsInKafe"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListOrder from '@/components/index/ListOrder'

export default {
  components: {
    ListOrder
  },
  computed: {
    basket() {
      return this.$store.getters.basket
    },
    basketKafes() {
      return [...new Set(this.basket.map(el => el.kafeId))]
    }
  },
  methods: {
    removeProductFromBasket(id) {
      this.$store.commit('removeProduct', id)
    },
    removeAllProductsInKafe(id) {
      this.$store.commit('removeAllProductsInKafe', id)
    }
  }
}
</script>