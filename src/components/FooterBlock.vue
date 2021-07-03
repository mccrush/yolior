<template>
  <div class="row border-top text-center mt-1 ps-2 pt-2 pe-2 pb-2">
    <div class="col-12">
      <small class="mb-3 text-muted"
        >&copy; {{ new Date().getFullYear() }} Yolior&nbsp;</small
      >
      <small class="mb-3 text-muted">
        |&nbsp;&nbsp;
        <!-- Разработка<a
          class="link"
          href="https://mccrush.ru"
          target="_blank"
          title="Перейти на сайт mccrush.ru"
          >«mccrush apps»</a
        > -->
      </small>
      <button
        class="btn btn-sm btn-outline-dark lh-1 m-0 p-0 pt-1 pb-1 ps-2 pe-2"
        @click="$emit('show-modal')"
      >
        О проекте
      </button>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}

a:hover,
a:active {
  text-decoration: underline;
}

a.link,
a.link:hover,
a.link:visited,
a.link:active {
  color: #6c757d !important;
}
</style>