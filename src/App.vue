<template>
  <div>
    <Navbar-block />
    <div
      class="
        max-width-780
        container
        bg-white
        shadow-sm
        rounded-bottom
        mt-5
        pt-4
      "
    >
      <transition name="fade" mode="out-in">
        <component :is="myComponent" />
      </transition>

      <Footer-block @show-modal="showModal" />
    </div>
    <ModalWindow id="descriptionModal" />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'bootstrap/js/dist/modal'
import ModalWindow from '@/components/ModalWindow'
import NavbarBlock from '@/components/NavbarBlock'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import FooterBlock from '@/components/FooterBlock'

export default {
  components: {
    ModalWindow,
    NavbarBlock,
    Index,
    Login,
    Admin,
    FooterBlock
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    myComponent() {
      if (window.location.pathname === '/admin') {
        if (this.userId) {
          return 'Admin'
        } else {
          return 'Login'
        }
      } else {
        return 'Index'
      }
    }
  },
  methods: {
    showModal() {
      const myModal = new Modal(document.getElementById('descriptionModal'))
      myModal.show()
    }
  },
  watch: {
    userId(newValue) {
      if (newValue) {
        if (window.location.pathname === '/admin') {
          this.myComponent = 'Admin'
        }
      } else {
        this.myComponent = 'Login'
      }
    }
  }
}
</script>

<style>
body {
  /* font-family: 'Roboto', sans-serif;
  font-weight: 400; */
  background: #f8f9fa;
  background-image: url(/img/food.png);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>