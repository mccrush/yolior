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
    >
      {{ item.title }}
      <div class="btns btn-group">
        <button class="btn btn-sm btn-outline-secondary p-0 ps-1 pe-1">
          Edit
        </button>
        <button class="btn btn-sm btn-outline-secondary p-0 ps-1 pe-1">
          Del
        </button>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
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