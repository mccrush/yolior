<template>
  <div>
    <Navbar-block />

    <div class="max-width-780 container bg-white rounded-bottom pt-3">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>

      <Footer-block />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarBlock from '@/components/NavbarBlock'
import FooterBlock from '@/components/FooterBlock'

export default {
  components: {
    NavbarBlock,
    FooterBlock
  },
  data() {
    return {
      razdels: ['reshens', 'napravs', 'napravs_vid', 'abouts']
    }
  }
}
</script>

<style>
body {
  background: #f8f9fa;
}

/* p {
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
} */

.max-width-960 {
  max-width: 960px;
}

.max-width-780 {
  max-width: 840px;
}

.btn:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  box-shadow: none !important;
}
</style>