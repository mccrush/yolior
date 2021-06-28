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
      @click="setItemId(item.id)"
      :class="{ active: item.id === kafeId }"
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
          @click="removeItem(item.id)"
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
    type: String,
    kafeId: String
  },
  methods: {
    async removeItem(id) {
      let res = false
      if (this.type === 'kafeId') {
        this.$store.commit('removeKafe', id)
        res = await this.$store.dispatch('removeKafe', id)
      } else if (this.type === 'categoryId') {
        this.$store.commit('removeCategory', id)
        res = await this.$store.dispatch('removeCategory', {
          id,
          kafeId: this.kafeId
        })
      } else if (this.type === 'productId') {
        this.$store.commit('removeProduct', id)
        res = await this.$store.dispatch('removeProduct', id)
      }

      if (res) {
        this.$store.commit('addMessage', 'ris')
      } else {
        this.$store.commit('addMessage', 'rie')
      }
    },
    setItemId(id) {
      this.$store.commit('setValue', { type: this.type, id })
    }
  }
}
</script>

<style scoped>
.list-group-item.active {
  color: #212529;
  background-color: #e9ecef;
  border-color: #e9ecef;
}

.btns {
  opacity: 0;
  transition: 0.2s;
}

.list-group-item:hover .btns {
  opacity: 1;
}
</style>