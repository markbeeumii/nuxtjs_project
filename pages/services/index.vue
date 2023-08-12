<template>
  <nav-bar/>
    <service-page/>
  <footer-div/>
</template>


<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Navbar from '../../components/Navbar.vue'
import ServicePage from '../../components/ServicePage.vue'
import "@/styles/magnific-popup.css";
import '@/styles/tooplate-clean-work.css'

// import Nuxt from 'nuxt'

export default {
  data () {
      return {
        users: []
      }
  },
  components:{
    'header-nav': Header,
    'footer-div': Footer,
    'nav-bar': Navbar,
    'service-page': ServicePage
  },
  
}
</script>