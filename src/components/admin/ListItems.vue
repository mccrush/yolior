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
      :class="{
        active:
          (type === 'kafeId' && item.id === kafeId) ||
          (type === 'categoryId' && item.id === categoryId) ||
          (type === 'productId' && item.id === productId)
      }"
    >
      {{ item.title }}
      <div class="d-flex align-items-center">
        <div class="btns btn-group">
          <button
            class="btn btn-sm btn-outline-secondary p-0 ps-1 pe-1"
            @click.self="$emit('edit-item', item.id)"
          >
            Edit
          </button>
          <button
            class="btn btn-sm btn-outline-danger p-0 ps-1 pe-1"
            @click="removeItem(item.id)"
          >
            Del
          </button>
        </div>
        <div class="price d-inline ms-1" v-if="type === 'productId'">
          <span class="badge bg-success p-1">{{ item.price }} ₽</span>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    type: String,
    kafeId: String,
    categoryId: String,
    productId: String
  },
  methods: {
    async removeItem(id) {
      if (confirm('Действительно удалить?')) {
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
          res = await this.$store.dispatch('removeProduct', {
            id,
            kafeId: this.kafeId,
            categoryId: this.categoryId
          })
        }

        if (res) {
          this.$store.commit('addMessage', 'ris')
        } else {
          this.$store.commit('addMessage', 'rie')
        }
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