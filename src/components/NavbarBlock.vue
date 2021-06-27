<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="max-width-780 container">
      <router-link class="navbar-brand pb-2" to="/">
        <img
          src="/logo.png"
          height="30"
          class="d-inline-block align-top me-2"
          alt="Logo"
        />
        <strong>Полный контроль</strong>
      </router-link>
      <div class="navbar-nav me-auto">
        <div class="dropdown">
          <a
            class="nav-link nav-item"
            href="#"
            role="button"
            id="dropdownMenuNapravs"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
            data-bs-reference="parent"
            aria-label="Направления работы"
          >
            Направления работы
          </a>

          <div
            class="dropdown-menu border-0 shadow-sm"
            aria-labelledby="dropdownMenuNapravs"
          >
            <router-link
              v-for="item in napravs"
              :key="item.id"
              :to="'/napravs/' + item.alias"
              class="dropdown-item"
              >{{ item.title }}</router-link
            >
          </div>
        </div>

        <div class="dropdown">
          <a
            class="nav-link nav-item"
            href="#"
            role="button"
            id="dropdownMenuAbouts"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
            data-bs-reference="parent"
            aria-label="О компании"
          >
            О компании
          </a>

          <div
            class="dropdown-menu border-0 shadow-sm"
            aria-labelledby="dropdownMenuAbouts"
          >
            <router-link
              v-for="item in abouts"
              :key="item.id"
              :to="'/abouts/' + item.alias"
              class="dropdown-item"
              >{{ item.title }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Dropdown } from 'bootstrap'
import napravs from '@/data/napravs'
import abouts from '@/data/abouts'
export default {
  data() {
    return {
      napravs,
      abouts
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  margin-top: -5px;
}

.dropdown:hover div.dropdown-menu {
  display: block;
}

.dropdown-item:visited,
.dropdown-item:active,
.dropdown-item:hover {
  color: #212529;
  background-color: #f8f9fa;
}
</style>