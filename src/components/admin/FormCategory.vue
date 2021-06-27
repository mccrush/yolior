<template>
  <div v-if="item === null" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="title"
        class="form-control"
        placeholder="Title"
        @input="toTranslit"
        :disabled="!kafeId"
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="alias"
        class="form-control"
        placeholder="Alias"
        :disabled="!kafeId"
      />
    </div>
    <div class="col-12 mt-1">
      <button
        type="button"
        class="btn btn-sm btn-success w-100"
        @click="addItem"
        :disabled="!kafeId"
      >
        Add
      </button>
    </div>
  </div>
  <div v-if="item" class="row">
    <div class="col-12">
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
    kafeId: String
  },
  emits: ['clear-item'],
  data() {
    return {
      title: '',
      alias: ''
    }
  },
  methods: {
    async addItem() {
      if (this.title && this.alias) {
        const item = {
          id: Date.now().toString(),
          title: this.title,
          alias: this.alias,
          kafeId: this.kafeId
        }

        this.$store.commit('addCategory', item)
        this.title = ''
        this.alias = ''
        const res = await this.$store.dispatch('addCategory', {
          item,
          kafeId: this.kafeId
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
        const res = await this.$store.dispatch('updateCategory', this.item.id)
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