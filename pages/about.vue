<template>
  <div>
    <nav-bar/>
      <about-page/>
    <footer-div/>
  </div>
  <!-- <footer-div/> -->
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import AboutPage from '../components/AboutPage.vue'
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
    'about-page': AboutPage
  },
  async mounted(){
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME');
    if (response.ok) {
      const data = await response.json()
      // Set the users property to the fetched users
      //console.log(data)
      this.users = data
    } else {
      //return new Error('fail to fetch users');
      console.log('Fail to fetch users')
    }
  }
}
</script>


<style scoped>
body{
  margin: 0px;
  padding: 0px;
  height: 100vh !important;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.card {
  width: 20.47%;
  margin: 0.8rem 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
}

.card img {
  width: 100%;
}

.card-content {
  padding: 0px 5px;
}

.card-title {
  font-size: 1.2rem;
}




</style>