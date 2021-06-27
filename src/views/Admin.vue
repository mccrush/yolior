<template>
  <h1>Admin</h1>
  <p>
    Здесь должен быть список кафе<br />
    Возможность добавлять новое кафе
  </p>
  <hr />
  <div v-for="kafe in kafes" :key="kafe.id">{{ kafe.title }}</div>
</template>

<script>
export default {
  computed: {
    kafes() {
      return this.$store.getters.kafes
    }
  }
}
</script>