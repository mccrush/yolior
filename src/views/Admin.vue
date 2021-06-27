<template>
  <div class="row ps-2 pe-2 pb-3">
    <div class="col-12">
      <h4>Admin panel</h4>
      <div class="row">
        <div class="col-4">
          <h5>Kafe</h5>
          <FormKafe :kafe="kafe" @clear-kafe="kafe = null" />
          <hr />
          <ListItems :list="kafes" @edit-item="editItem" />
        </div>
        <div class="col-4"></div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import FormKafe from '@/components/admin/FormKafe'
import ListItems from '@/components/admin/ListItems'
export default {
  components: {
    FormKafe,
    ListItems
  },
  data() {
    return {
      kafe: null
    }
  },
  computed: {
    kafes() {
      return this.$store.getters.kafes
    }
  },
  methods: {
    editItem(id) {
      this.kafe = this.kafes.find(item => item.id === id)
    }
  }
}
</script>