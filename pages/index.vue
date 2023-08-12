<template>
  <nav-bar/>
    <home-page/>
  <footer-div/>
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import HomePage from '../components/HomePage.vue'
import "@/styles/magnific-popup.css";
import '@/styles/tooplate-clean-work.css'
//import {} from '@nuxt/devtools'


 export default{
  components:{
    'header-nav': Header,
    'nav-bar': Navbar,
    'footer-div': Footer,
    'home-page' : HomePage
  },
 }
</script>
