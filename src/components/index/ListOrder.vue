<template>
  <div v-if="kafe" class="mt-3 mb-4">
    <div class="d-flex justify-content-between align-items-end">
      <h5 class="m-0">{{ kafe.title }}</h5>
      <a
        :href="'tel:' + kafe.phone"
        class="btn btn-warning text-white lh-1 p-2 pt-3 pb-3"
        ><strong>Позвонить и заказать</strong></a
      >
    </div>
    <div class="list-group mt-2">
      <OrderItem
        v-for="item in products"
        :key="item.id"
        :item="item"
        @change-itog-summ="changeItogSumm"
      />
      <div
        v-if="sumProd < kafe.delsum || kafe.delsum === 0"
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
          lh-1
          ps-2
          pe-2
        "
      >
        <span
          >Доставка<br />
          <small v-if="kafe.delsum > 0" class="text-muted"
            >(бесплатно при заказе от {{ kafe.delsum }} ₽)</small
          ></span
        >
        <span class="badge bg-white text-success border border-success p-1"
          >{{ kafe.delprice }} ₽</span
        >
      </div>
      <div
        v-else
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
          lh-1
          ps-2
          pe-2
        "
      >
        <span>Доставка </span>
        <span class="badge bg-white text-success border border-success p-1"
          >бесплатно</span
        >
      </div>
    </div>
    <div class="d-flex justify-content-end pt-1 pe-2">
      <div>
        Общая сумма заказа
        <span class="badge bg-success ms-1 me-2">{{ totalSum }} ₽</span>
        <button
          @click="removeAllProductsInKafe()"
          class="
            btn btn-sm btn-outline-danger
            lh-1
            mt-1
            p-0
            ps-3
            pt-2
            pb-2
            pe-3
          "
        >
          &#215;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from '@/components/index/OrderItem'

export default {
  components: {
    OrderItem
  },
  props: {
    kafeId: String,
    basket: Array
  },
  computed: {
    kafes() {
      return this.$store.getters.kafes
    },
    kafe() {
      return this.kafes.find(item => item.id === this.kafeId)
    },
    products() {
      return this.basket.filter(item => item.kafeId === this.kafeId)
    },
    sumProd() {
      return this.products.reduce(
        (accum, current) => accum + current.price * current.count,
        0
      )
    },
    totalSum() {
      if (this.sumProd >= this.kafe.delsum && this.kafe.delsum !== 0) {
        return this.sumProd
      } else {
        return this.sumProd + this.kafe.delprice
      }
    }
  }
}
</script>