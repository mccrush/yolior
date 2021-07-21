<template>
  <div v-if="kafe" class="mt-3 mb-4">
    <div class="d-flex justify-content-between align-items-end">
      <!-- <h5>{{ kafeId }}</h5> -->
      <h5 class="m-0">{{ kafe.title }}</h5>
      <a
        :href="'tel:' + kafe.phone"
        class="btn btn-warning text-white lh-1 p-2 pt-3 pb-3"
        ><strong>Позвонить и заказать</strong></a
      >
    </div>
    <div class="list-group mt-2">
      <div
        v-for="item in products"
        :key="item.id"
        class="list-group-item lh-1 ps-2 pe-2"
      >
        <div class="d-flex justify-content-between align-items-center">
          <span
            class="
              badge
              bg-white
              text-danger
              border border-danger
              me-2
              mb-1
              p-1
            "
          >
            {{ item.categoryTitle }}
          </span>

          <div>
            <span v-if="item.weight" class="badge bg-light text-dark me-2 p-1">
              {{ item.weight }} г</span
            >
            <span v-if="item.amount" class="badge bg-light text-dark me-2 p-1">
              {{ item.amount }} шт</span
            >
            <span v-if="item.volume" class="badge bg-light text-dark me-2 p-1">
              {{ item.volume }} л</span
            >
            <span
              class="badge bg-white text-success border border-success me-2 p-1"
              >{{ item.price }} ₽</span
            >
            <button
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
              @click="$emit('remove-product-from-basket', item.id)"
            >
              &#215;
            </button>
          </div>
        </div>
        <div class="pt-1">
          {{ item.title }}
        </div>
      </div>
      <div
        v-if="sumProd < kafe.delsum"
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
          <small class="text-muted"
            >(бесплатно при заказе от {{ kafe.delsum }} ₽)</small
          ></span
        >
        <span class="badge bg-white text-success border border-success p-1"
          >{{ kafe.delprice }} ₽</span
        >
      </div>
    </div>
    <div class="d-flex justify-content-end pt-1 pe-2">
      <div>
        Общая сумма заказа
        <span class="badge bg-success ms-1 me-2">{{ totalSum }} ₽</span>
        <button
          @click="$emit('remove-all-prod-in-kafe', kafeId)"
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
export default {
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
      return this.products.reduce((accum, current) => accum + current.price, 0)
    },
    totalSum() {
      if (this.sumProd >= this.kafe.delsum) {
        return this.sumProd
      } else {
        return this.sumProd + this.kafe.delprice
      }
    }
  }
}
</script>