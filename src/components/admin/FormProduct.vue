<template>
  <div v-if="item === null" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="categoryTitle"
        class="form-control"
        placeholder="Category title"
        disabled
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="title"
        class="form-control"
        placeholder="Title"
        @input="toTranslit"
        @keypress.enter="addItem"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="alias"
        class="form-control"
        placeholder="Alias"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="number"
        min="0"
        max="9990"
        step="10"
        v-model.number="price"
        class="form-control"
        placeholder="Price"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="text"
        v-model.trim="weight"
        class="form-control"
        placeholder="Weight"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="text"
        v-model.trim="amount"
        class="form-control"
        placeholder="Amount"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="text"
        v-model.trim="volume"
        class="form-control"
        placeholder="Volume"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-12 mt-1">
      <button
        type="button"
        class="btn btn-sm btn-success w-100"
        @click="addItem"
        :disabled="!categoryId"
      >
        Add
      </button>
    </div>
  </div>
  <div v-if="item" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="item.categoryTitle"
        class="form-control"
        placeholder="Category title"
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="item.title"
        class="form-control"
        placeholder="Title"
        @input="toTranslit"
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="item.alias"
        class="form-control"
        placeholder="Alias"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="number"
        min="0"
        max="9990"
        step="10"
        v-model.number="item.price"
        class="form-control"
        placeholder="Price"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="text"
        v-model.trim="item.weight"
        class="form-control"
        placeholder="Weight"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="text"
        v-model.trim="item.amount"
        class="form-control"
        placeholder="Amount"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="text"
        v-model.trim="item.volume"
        class="form-control"
        placeholder="Volume"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-12 mt-1">
      <div class="btn-group btn-group-sm w-100">
        <button
          type="button"
          class="btn btn-outline-secondary w-25"
          @click="$emit('clear-item')"
        >
          CLR
        </button>
        <button type="button" class="btn btn-success w-75" @click="updateItem">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import translit from '@/scripts/translit'
export default {
  props: {
    item: Object,
    kafeId: String,
    categoryId: String,
    categoryTitle: String
  },
  emits: ['clear-item'],
  data() {
    return {
      title: '',
      alias: '',
      price: '',
      weight: '',
      amount: '',
      volume: ''
    }
  },
  methods: {
    async addItem() {
      if (this.title && this.alias) {
        const item = {
          id: Date.now().toString(),
          title: this.title,
          alias: this.alias,
          price: this.price,
          weight: this.weight,
          amount: this.amount,
          volume: this.volume,
          kafeId: this.kafeId,
          categoryId: this.categoryId,
          categoryTitle: this.categoryTitle
        }

        this.$store.commit('addProduct', item)
        this.title = ''
        this.alias = ''
        this.price = ''
        this.weight = ''
        this.amount = ''
        this.volume = ''
        const res = await this.$store.dispatch('addProduct', {
          item,
          kafeId: this.kafeId,
          categoryId: this.categoryId
        })
        if (res) {
          this.$store.commit('addMessage', 'das')
        } else {
          this.$store.commit('addMessage', 'dae')
        }
      }
    },
    async updateItem() {
      if (this.item.title && this.item.alias) {
        const res = await this.$store.dispatch('updateProduct', {
          id: this.item.id,
          kafeId: this.kafeId,
          categoryId: this.categoryId
        })
        if (res) {
          this.$store.commit('addMessage', 'dus')
        } else {
          this.$store.commit('addMessage', 'due')
        }
      }
    },
    toTranslit() {
      this.alias = translit(this.title)
    }
  }
}
</script>