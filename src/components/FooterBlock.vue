<template>
  <div class="row border-top mt-1 ps-2 pt-3 pe-2">
    <div class="col-3">
      Полный контроль
      <small class="d-block mb-3 text-muted"
        >&copy; 2008 – {{ new Date().getFullYear() }}</small
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
    <div class="col-3">
      О компании
      <ul class="list-unstyled text-small">
        <li v-for="item in abouts" :key="item.id">
          <small>
            <router-link
              class="text-muted"
              :to="'/abouts/' + item.alias"
              :aria-label="item.title"
              >{{ item.title }}</router-link
            >
          </small>
        </li>
      </ul>
    </div>
    <div class="col-3">
      Режим работы
      <ul class="list-unstyled text-small text-muted">
        <li>
          <small>Пн-пт: 9:00 – 18:00</small>
        </li>
        <li>
          <small>Сб: 9:00 – 15:00</small>
        </li>
        <li>
          <small>Вс: выходной</small>
        </li>
      </ul>
    </div>
    <div class="col-3">
      Контакты
      <ul class="list-unstyled text-small">
        <li class="text-muted">
          <small
            >Телефон:
            <a class="link" href="tel:+73856854483">8 385-68 5-44-83</a></small
          >
        </li>
        <li class="text-muted">
          <small
            >Моб./WA:
            <a class="link" href="tel:+79237483148">8 923 748 3148</a></small
          >
        </li>
        <li class="text-muted">
          <small
            >E-mail:
            <a class="link" href="mailto:info@ctrl22.ru"
              >info@ctrl22.ru</a
            ></small
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import abouts from '@/data/abouts'
export default {
  data() {
    return {
      abouts
    }
  }
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