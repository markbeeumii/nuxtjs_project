<template>
  <nav-bar/>
    <detail-page/>
  <footer-div/>
</template>


<script>
import Header from '../../../components/Footer.vue'
import Footer from '../../../components/Footer.vue'
import Navbar from '../../../components/Navbar.vue'
import Detail from '../../../components/DetailServicePage.vue'


// import Nuxt from 'nuxt'

export default {
  components:{
    'header-nav': Header,
    'footer-div': Footer,
    'nav-bar': Navbar,
    'detail-page': Detail
  },
  
}
</script>