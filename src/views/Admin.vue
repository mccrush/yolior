<template>
  <div class="row ps-2 pe-2 pb-3">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <h4 class="text-center">Кафе</h4>
          <FormKafe :item="kafe" @clear-item="kafe = null" />
          <hr />
          <LoadingAnimate v-if="loadingKafes" />
          <ListItems
            v-else
            :list="kafes"
            type="kafeId"
            :kafeId="kafeId"
            @edit-item="editKafe"
          />
        </div>
        <div class="col-4">
          <h4 class="text-center">Категория</h4>
          <FormCategory
            :item="category"
            :kafeId="kafeId"
            @clear-item="category = null"
          />
          <hr />
          <LoadingAnimate v-if="loadingCategorys" />
          <ListItems
            v-else
            :list="categorys"
            type="categoryId"
            :kafeId="kafeId"
            :categoryId="categoryId"
            @edit-item="editCategory"
          />
        </div>
        <div class="col-4">
          <h4 class="text-center">Блюдо</h4>
          <FormProduct
            :item="product"
            :kafeId="kafeId"
            :categoryId="categoryId"
            :categoryTitle="categoryTitle"
            @clear-item="product = null"
          />
          <hr />
          <LoadingAnimate v-if="loadingProducts" />
          <ListItems
            v-else
            :list="products"
            type="productId"
            :kafeId="kafeId"
            :categoryId="categoryId"
            :productId="productId"
            @edit-item="editProduct"
          />
        </div>
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
import FormProduct from '@/components/admin/FormProduct'
import ListItems from '@/components/admin/ListItems'
import Message from '@/components/Message'
import LoadingAnimate from '@/components/LoadingAnimate'

export default {
  components: {
    FormKafe,
    FormCategory,
    FormProduct,
    ListItems,
    Message,
    LoadingAnimate
  },
  data() {
    return {
      showMessage: false,
      kafe: null,
      category: null,
      product: null
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
    categoryId() {
      return this.$store.getters.categoryId
    },
    categoryTitle() {
      if (this.categoryId) {
        return this.categorys.find(item => item.id === this.categoryId).title
      } else {
        return ''
      }
    },
    products() {
      return this.$store.getters.products
    },
    productId() {
      return this.$store.getters.productId
    },
    message() {
      return this.$store.getters.getMessage || ''
    },
    loadingKafes() {
      return this.$store.getters.loadingKafes
    },
    loadingCategorys() {
      return this.$store.getters.loadingCategorys
    },
    loadingProducts() {
      return this.$store.getters.loadingProducts
    }
  },
  created() {
    if (this.kafeId) {
      this.$store.dispatch('getCategorys', this.kafeId)
    }
    if (this.categoryId) {
      this.$store.dispatch('getProducts', {
        kafeId: this.kafeId,
        categoryId: this.categoryId
      })
    }
  },
  methods: {
    editKafe(id) {
      this.kafe = this.kafes.find(item => item.id === id)
    },
    editCategory(id) {
      this.category = this.categorys.find(item => item.id === id)
    },
    editProduct(id) {
      this.product = this.products.find(item => item.id === id)
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
      this.$store.commit('getProducts', [])
      this.$store.commit('setValue', { type: 'categoryId', id: '' })
      this.$store.commit('setValue', { type: 'productId', id: '' })
    },
    categoryId(newId) {
      if (newId) {
        this.$store.dispatch('getProducts', {
          kafeId: this.kafeId,
          categoryId: newId
        })
        this.$store.commit('setValue', { type: 'productId', id: '' })
      }
    },
    categorys() {
      this.category = null
    },
    products() {
      this.product = null
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