<template>
  <div>
    <!-- <h1>Hello Layout Pages</h1> -->
    <!-- <nav-bar/>
     <nuxt/>
    <foot-er/> -->
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default{
  components:{
    'nav-bar':Navbar,
    'foot-er':Footer
  }
}
</script>

'nav-bar':Navbar,
    'foot-er':Footer