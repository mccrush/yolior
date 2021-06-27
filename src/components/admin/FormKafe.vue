<template>
  <div v-if="kafe === null" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="title"
        class="form-control"
        placeholder="Title"
        @input="toTranslit"
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="alias"
        class="form-control"
        placeholder="Alias"
      />
    </div>
    <div class="col-12 mt-1">
      <button
        type="button"
        class="btn btn-sm btn-success w-100"
        @click="addKafe"
      >
        Add
      </button>
    </div>
  </div>
  <div v-if="kafe" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="kafe.title"
        class="form-control"
        placeholder="Title"
        @input="toTranslit"
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="kafe.alias"
        class="form-control"
        placeholder="Alias"
      />
    </div>
    <div class="col-12 mt-1">
      <div class="btn-group btn-group-sm w-100">
        <button
          type="button"
          class="btn btn-outline-secondary w-25"
          @click="$emit('clear-kafe')"
        >
          CLR
        </button>
        <button type="button" class="btn btn-success w-75" @click="updateKafe">
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
    kafe: Object
  },
  emits: ['clear-kafe'],
  data() {
    return {
      title: '',
      alias: ''
    }
  },
  methods: {
    async addKafe() {
      if (this.title && this.alias) {
        const kafe = {
          id: Date.now().toString(),
          title: this.title,
          alias: this.alias
        }

        this.$store.commit('addKafe', kafe)
        this.title = ''
        this.alias = ''
        const res = await this.$store.dispatch('addKafe', kafe)
      }
    },
    async updateKafe() {
      if (this.kafe.title && this.kafe.alias) {
        const res = await this.$store.dispatch('updateKafe', this.kafe.id)
      }
    },
    toTranslit() {
      this.alias = translit(this.title)
    }
  }
}
</script>