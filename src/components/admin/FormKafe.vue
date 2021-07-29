<template>
  <div v-if="item === null" class="row">
    <div class="col-12">
      <input
        type="text"
        v-model.trim="title"
        class="form-control"
        placeholder="Название кафе"
        @input="toTranslit"
        @keypress.enter="addItem"
      />
    </div>
    <div class="col-8 mt-1 pe-0">
      <input
        type="text"
        v-model.trim="alias"
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
        v-model.number="position"
        class="form-control"
      />
    </div>
    <div class="col-12 mt-1">
      <input
        type="text"
        v-model.trim="phone"
        class="form-control"
        placeholder="Телефон доставки"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="number"
        min="0"
        max="9990"
        step="10"
        v-model.number="delprice"
        class="form-control"
        placeholder="Стоим. доставки"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="number"
        min="0"
        max="9990"
        step="10"
        v-model.number="delsum"
        class="form-control"
        placeholder="Беспл. доставка"
      />
    </div>
    <div class="col-12 mt-1">
      <button type="button" class="btn btn-success w-100" @click="addItem">
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
        placeholder="Название кафе"
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
        type="text"
        v-model.trim="item.phone"
        class="form-control"
        placeholder="Телефон доставки"
      />
    </div>
    <div class="col-6 mt-1 pe-0">
      <input
        type="number"
        min="0"
        max="9990"
        step="10"
        v-model.number="item.delprice"
        class="form-control"
        placeholder="Стоим. доставки"
      />
    </div>
    <div class="col-6 mt-1 ps-1">
      <input
        type="number"
        min="0"
        max="9990"
        step="10"
        v-model.number="item.delsum"
        class="form-control"
        placeholder="Беспл. доставка"
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
    item: Object
  },
  emits: ['clear-item'],
  data() {
    return {
      title: '',
      alias: '',
      position: '',
      phone: '',
      delprice: '',
      delsum: ''
    }
  },
  methods: {
    async deleteImage() {
      const res = await this.$store.dispatch('deleteKafeImage', {
        kafeId: this.item.id
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
          const res = await this.$store.dispatch('uploadKafeImage', {
            kafeId: this.item.id,
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
          phone: this.phone,
          delprice: this.delprice,
          delsum: this.delsum,
          image: ''
        }

        this.$store.commit('addKafe', item)
        this.title = ''
        this.alias = ''
        this.position = ''
        this.phone = ''
        this.delprice = ''
        this.delsum = ''
        const res = await this.$store.dispatch('addKafe', item)
        if (res) {
          this.$store.commit('addMessage', 'das')
        } else {
          this.$store.commit('addMessage', 'dae')
        }
      }
    },
    async updateItem() {
      if (this.item.title && this.item.alias) {
        const res = await this.$store.dispatch('updateKafe', this.item.id)
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