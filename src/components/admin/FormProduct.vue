<template>
  <div v-if="item === null" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="categoryTitle"
        class="form-control"
        placeholder="Категория"
        disabled
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="title"
        class="form-control"
        placeholder="Название блюда"
        @input="toTranslit"
        @keypress.enter="addItem"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-8 mt-1 pe-0">
      <input
        type="text"
        v-model.trim="alias"
        class="form-control"
        placeholder="Alias"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-4 mt-1 ps-1">
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        v-model.number="position"
        class="form-control"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="number"
        min="0"
        max="9990"
        step="10"
        v-model.number="price"
        class="form-control"
        placeholder="Цена"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="text"
        v-model.trim="weight"
        class="form-control"
        placeholder="Вес, г"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="text"
        v-model.trim="amount"
        class="form-control"
        placeholder="Колич., шт"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="text"
        v-model.trim="volume"
        class="form-control"
        placeholder="Объем, л"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-12 mt-1">
      <textarea
        rows="3"
        v-model.trim="description"
        class="form-control lh-1"
        placeholder="Дополнительные сведения, состав"
        :disabled="!categoryId"
      ></textarea>
    </div>
    <div class="col-12 mt-1">
      <button
        type="button"
        class="btn btn-sm btn-success w-100"
        @click="addItem"
        :disabled="!categoryId"
      >
        Добавить
      </button>
    </div>
  </div>
  <div v-if="item" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="item.categoryTitle"
        class="form-control"
        placeholder="Категория"
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="item.title"
        class="form-control"
        placeholder="Название блюда"
        @input="toTranslit"
      />
    </div>
    <div class="col-8 mt-1 pe-0">
      <input
        type="text"
        v-model.trim="item.alias"
        class="form-control"
        placeholder="Alias"
      />
    </div>
    <div class="col-4 mt-1 ps-1">
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        v-model.number="item.position"
        class="form-control"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="number"
        min="0"
        max="9990"
        step="10"
        v-model.number="item.price"
        class="form-control"
        placeholder="Цена"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="text"
        v-model.trim="item.weight"
        class="form-control"
        placeholder="Вес, г"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="text"
        v-model.trim="item.amount"
        class="form-control"
        placeholder="Колич., шт"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="text"
        v-model.trim="item.volume"
        class="form-control"
        placeholder="Объем, л"
        :disabled="!categoryId"
      />
    </div>
    <div class="col-12 mt-1">
      <textarea
        rows="3"
        v-model.trim="item.description"
        class="form-control lh-1"
        placeholder="Дополнительные сведения, состав"
        :disabled="!categoryId"
      ></textarea>
    </div>
    <div class="col-12 mt-1">
      <input
        type="file"
        ref="kafeImage"
        class="form-control"
        @change="uploadImage()"
      />
      <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          v-model="item.image"
        />
        <button
          class="btn btn-sm btn-light border"
          @click="copyImageLinkInBuffer($event)"
        >
          Copy
        </button>
      </div>
      <img v-if="item.image" :src="item.image" class="w-100 mt-1" />
    </div>
    <div class="col-12 mt-1">
      <div class="btn-group btn-group-sm w-100">
        <button
          type="button"
          class="btn btn-outline-secondary w-25"
          @click="$emit('clear-item')"
        >
          Очист.
        </button>
        <button type="button" class="btn btn-success w-75" @click="updateItem">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import translit from '@/scripts/translit'
export default {
  props: {
    item: Object,
    kafeId: String,
    categoryId: String,
    categoryTitle: String
  },
  emits: ['clear-item'],
  data() {
    return {
      title: '',
      alias: '',
      position: 0,
      price: '',
      weight: '',
      amount: '',
      volume: '',
      description: ''
    }
  },
  methods: {
    copyImageLinkInBuffer(e) {
      const el = e.target.parentNode.firstChild
      el.select()
      if (document.execCommand('copy')) {
        console.log('Результат скопирован в буфер')
      }
    },
    async uploadImage() {
      const fileList = this.$refs.kafeImage.files
      const file = fileList[0]
      if (file) {
        if (file.type.startsWith('image/')) {
          const res = await this.$store.dispatch('uploadProductImage', {
            productId: this.item.id,
            categoryId: this.categoryId,
            kafeId: this.kafeId,
            file
          })

          if (res) {
            this.item.image = res
            this.$store.commit('addMessage', 'uds')
          } else {
            this.$store.commit('addMessage', 'ude')
          }
        } else {
          alert('Выберите для загрузки файл изображения')
        }
      }
    },
    async addItem() {
      if (this.title && this.alias) {
        const item = {
          id: Date.now().toString(),
          title: this.title,
          alias: this.alias,
          position: this.position,
          price: this.price,
          weight: this.weight,
          amount: this.amount,
          volume: this.volume,
          description: this.description,
          kafeId: this.kafeId,
          categoryId: this.categoryId,
          categoryTitle: this.categoryTitle
        }

        this.$store.commit('addProduct', item)
        this.title = ''
        this.alias = ''
        this.price = ''
        this.weight = ''
        this.amount = ''
        this.volume = ''
        this.description = ''
        const res = await this.$store.dispatch('addProduct', {
          item,
          kafeId: this.kafeId,
          categoryId: this.categoryId
        })
        if (res) {
          this.$store.commit('addMessage', 'das')
        } else {
          this.$store.commit('addMessage', 'dae')
        }
      }
    },
    async updateItem() {
      if (this.item.title && this.item.alias) {
        const res = await this.$store.dispatch('updateProduct', {
          id: this.item.id,
          kafeId: this.kafeId,
          categoryId: this.categoryId
        })
        if (res) {
          this.$store.commit('addMessage', 'dus')
        } else {
          this.$store.commit('addMessage', 'due')
        }
      }
    },
    toTranslit() {
      this.alias = translit(this.title)
    }
  }
}
</script>