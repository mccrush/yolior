<template>
  <div class="row ps-2 pe-2">
    <div class="col-12">
      <h1>Admin</h1>
      <p>
        Здесь должен быть список кафе<br />
        Возможность добавлять новое кафе
      </p>
      <hr />
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Добавить кафе"
          aria-label="Добавить кафе"
          aria-describedby="button-addon2"
          v-model.trim="kafeTitle"
          @keypress.enter="addKafe"
        />
        <button
          class="btn btn-success"
          type="button"
          id="button-addon2"
          @click="addKafe"
        >
          &nbsp;Add&nbsp;
        </button>
      </div>
      <div v-for="kafe in kafes" :key="kafe.id">{{ kafe.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kafeTitle: ''
    }
  },
  computed: {
    kafes() {
      return this.$store.getters.kafes
    }
  },
  methods: {
    async addKafe() {
      if (this.kafeTitle) {
        const kafe = {
          id: Date.now().toString(),
          title: this.kafeTitle
        }

        this.$store.commit('addKafe', kafe)
        this.kafeTitle = '' // Очищаем до Dispatch
        const res = await this.$store.dispatch('addKafe', kafe)
      }
    }
  }
}
</script>