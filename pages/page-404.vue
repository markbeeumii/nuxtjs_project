<template>
  <nav-bar/>
    <page-404/>
  <footer-div/>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import Page404 from '../components/404.vue'
import "@/styles/magnific-popup.css";
import '@/styles/tooplate-clean-work.css'

// import Nuxt from 'nuxt'

export default {
  components:{
    'header-nav': Header,
    'footer-div': Footer,
    'nav-bar': Navbar,
    'page-404': Page404
  },
  
}
</script>