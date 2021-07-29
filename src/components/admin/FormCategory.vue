<template>
  <div v-if="item === null" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="title"
        class="form-control"
        placeholder="Название категории"
        @input="toTranslit"
        @keypress.enter="addItem"
        :disabled="!kafeId"
      />
    </div>
    <div class="col-8 mt-1 pe-0">
      <input
        type="text"
        v-model.trim="alias"
        class="form-control"
        placeholder="Alias"
        :disabled="!kafeId"
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
        :disabled="!kafeId"
      />
    </div>
    <div class="col-12 mt-1">
      <button
        type="button"
        class="btn btn-success w-100"
        @click="addItem"
        :disabled="!kafeId"
      >
        Добавить
      </button>
    </div>
  </div>
  <div v-if="item" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="item.title"
        class="form-control"
        placeholder="Название категории"
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
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="file"
        ref="kafeImage"
        class="form-control"
        @change="uploadImage()"
      />
      <img v-if="item.image" :src="item.image" class="w-100 mt-1" />
      <button
        v-if="item.image"
        type="button"
        class="btn btn-outline-secondary w-100 mt-1"
        @click="deleteImage()"
      >
        Удалить изображение
      </button>
    </div>
    <div class="col-12 mt-1">
      <div class="btn-group w-100">
        <button
          type="button"
          class="btn btn-outline-secondary w-25"
          @click="$emit('clear-item')"
        >
          <small>Очист.</small>
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
    kafeId: String
  },
  emits: ['clear-item'],
  data() {
    return {
      title: '',
      alias: '',
      position: 0
    }
  },
  methods: {
    async deleteImage() {
      const res = await this.$store.dispatch('deleteCategoryImage', {
        categoryId: this.item.id,
        kafeId: this.kafeId
      })

      if (res) {
        this.item.image = ''
        this.$store.commit('addMessage', 'dds')
      } else {
        this.$store.commit('addMessage', 'dde')
      }
    },
    async uploadImage() {
      const fileList = this.$refs.kafeImage.files
      const file = fileList[0]
      if (file) {
        if (file.type.startsWith('image/')) {
          const res = await this.$store.dispatch('uploadCategoryImage', {
            categoryId: this.item.id,
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
          kafeId: this.kafeId
        }

        this.$store.commit('addCategory', item)
        this.title = ''
        this.alias = ''
        const res = await this.$store.dispatch('addCategory', {
          item,
          kafeId: this.kafeId
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
        const res = await this.$store.dispatch('updateCategory', {
          id: this.item.id,
          kafeId: this.kafeId
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