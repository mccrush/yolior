<template>
  <div class="row ps-2 pe-2 pb-3">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <h4 class="text-center">Kafe</h4>
          <FormKafe :item="kafe" @clear-item="kafe = null" />
          <hr />
          <ListItems :list="kafes" type="kafeId" @edit-item="editKafe" />
        </div>
        <div class="col-4">
          <h4 class="text-center">Category</h4>
          <FormCategory
            :item="category"
            :kafeId="kafeId"
            @clear-item="category = null"
          />
          <hr />
          <ListItems
            :list="categorys"
            type="categoryId"
            :kafeId="kafeId"
            @edit-item="editCategory"
          />
        </div>
        <div class="col-4"></div>
      </div>
    </div>
    <transition name="slide-fade">
      <Message
        v-if="showMessage"
        :message="message.text"
        :class="message.type"
      />
    </transition>
  </div>
</template>

<script>
import FormKafe from '@/components/admin/FormKafe'
import FormCategory from '@/components/admin/FormCategory'
import ListItems from '@/components/admin/ListItems'
import Message from '@/components/Message'
export default {
  components: {
    FormKafe,
    FormCategory,
    ListItems,
    Message
  },
  data() {
    return {
      showMessage: false,
      kafe: null,
      category: null
    }
  },
  computed: {
    kafes() {
      return this.$store.getters.kafes
    },
    kafeId() {
      return this.$store.getters.kafeId
    },
    categorys() {
      return this.$store.getters.categorys
    },
    message() {
      return this.$store.getters.getMessage || ''
    }
  },
  methods: {
    editKafe(id) {
      this.kafe = this.kafes.find(item => item.id === id)
    },
    editCategory(id) {
      this.category = this.categorys.find(item => item.id === id)
    }
  },
  watch: {
    message() {
      if (this.message) {
        this.showMessage = true
        setTimeout(() => {
          this.showMessage = false
          this.$store.commit('addMessage', 'null')
        }, 3600)
      }
    },
    kafeId(newId) {
      this.$store.dispatch('getCategorys', newId)
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>