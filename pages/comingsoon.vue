<template>
  <nav-bar/>
    <coming-soon-page/>
  <footer-div/>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import ComingSoonPage from '../components/ComingSoonPage.vue'
import "@/styles/magnific-popup.css";
import '@/styles/tooplate-clean-work.css'

// import Nuxt from 'nuxt'

export default {
  components:{
    'header-nav': Header,
    'footer-div': Footer,
    'nav-bar': Navbar,
    'coming-soon-page': ComingSoonPage
  },
  
}
</script>