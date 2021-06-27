<template>
  <div class="list-group">
    <button
      v-for="item in list"
      :key="item.id"
      type="button"
      class="
        list-group-item list-group-item-action
        d-flex
        justify-content-between
        align-items-center
        lh-1
      "
      @click="setItem(type, item.alias)"
    >
      {{ item.title }}
      <div class="btns btn-group">
        <button
          class="btn btn-sm btn-outline-secondary p-0 ps-1 pe-1"
          @click.self="$emit('edit-item', item.id)"
        >
          Edit
        </button>
        <button
          class="btn btn-sm btn-outline-secondary p-0 ps-1 pe-1"
          @click="removeKafe(item.id)"
        >
          Del
        </button>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    type: String
  },
  methods: {
    async removeKafe(id) {
      this.$store.commit('removeKafe', id)
      const res = await this.$store.dispatch('removeKafe', id)
      if (res) {
        this.$store.commit('addMessage', 'ris')
      } else {
        this.$store.commit('addMessage', 'rie')
      }
    },
    setItem(type, alias) {
      // if (type === 'kafe') {
      //   this.$store.commit('setKafe', { type, alias })
      // } else if (type === 'category') {
      //   this.$store.commit('setCategory', { type, alias })
      // } else if (type === 'product') {
      //   this.$store.commit('setProduct', { type, alias })
      // }

      this.$store.commit('setValue', { type, alias })
    }
  }
}
</script>

<style scoped>
.btns {
  opacity: 0;
  transition: 0.2s;
}

.list-group-item:hover .btns {
  opacity: 1;
}
</style>