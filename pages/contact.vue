<template>
  <nav-bar/>
    <contact-page/>
  <footer-div/>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import ContactPage from '../components/ContactPage.vue'
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
    'contact-page': ContactPage
  },
  
}
</script>