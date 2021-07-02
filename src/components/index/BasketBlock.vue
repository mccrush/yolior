<template>
  <div class="row">
    <div class="col-12">
      <div>
        <div v-for="el in basketKafes" :key="el">
          <ListOrder
            :kafeId="el"
            :basket="basket"
            @remove-product="removeProduct"
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
    removeProduct(id) {
      this.$store.commit('removeProduct', id)
    }
  }
}
</script>