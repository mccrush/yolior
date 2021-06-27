<template>
  <div class="row">
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
      <button type="button" class="btn btn-success w-100" @click="addKafe">
        Add
      </button>
    </div>
  </div>
</template>

<script>
import translit from '@/script/translit'
export default {
  data() {
    return {
      title: '',
      alias: ''
    }
  },
  methods: {
    async addKafe() {
      if (this.title) {
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
    toTranslit() {
      this.alias = translit(this.title)
    }
  }
}
</script>