<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <CardKafe
      v-for="item in sortList"
      :key="item.id"
      :item="item"
      :type="type"
      @click="setItemId(item.id)"
    />
    <ModalCard v-if="itemForModal" id="modalProduct" :item="itemForModal" />
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import CardKafe from '@/components/index/CardKafe'
import ModalCard from '@/components/index/ModalCard'
import sortMethod from '@/scripts/sortMethod'

export default {
  components: {
    CardKafe,
    ModalCard
  },
  props: {
    list: Array,
    type: String
  },
  computed: {
    sortList() {
      return sortMethod(this.list, 'asc', 'position')
    },
    productId() {
      return this.$store.getters.productId
    },
    itemForModal() {
      return this.list.find(item => item.id === this.productId) || {}
    }
  },
  methods: {
    setItemId(id) {
      this.$store.commit('setValue', { type: this.type, id })

      if (this.type === 'productId') {
        this.showModal()
      }
    },
    showModal() {
      const myModal = new Modal(document.getElementById('modalProduct'))
      myModal.show()
    }
  }
}
</script>


