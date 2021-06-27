<template>
  <div class="row border-top mt-1 ps-2 pt-3 pe-2">
    <div class="col-3">
      Yolior
      <small class="d-block mb-3 text-muted"
        >&copy; {{ new Date().getFullYear() }}</small
      >
      <small class="d-block mb-3 text-muted">
        Разработка сайта
        <br />
        <a
          class="link"
          href="https://mccrush.ru"
          target="_blank"
          title="Перейти на сайт mccrush.ru"
          >«mccrush.ru»</a
        >
      </small>
    </div>
    <div class="col-3"></div>
    <div class="col-3"></div>
    <div class="col-3"></div>
  </div>
</template>
<script>
export default {
  data() {}
}
</script>
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