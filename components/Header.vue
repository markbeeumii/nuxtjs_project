<template>
    <header>
      <nav class="container">
        <figure id="logo">
            <img src="../public/beach.jpg" alt="insure-logo" width="90" class="logo-img">
        </figure>
        <div class="rigth-bar">
            <nav class="desktop-navbar">
            <ul class="header-nav">
                <li>
                    <NuxtLink to="/" class="a">HOW WE WORK</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="a">ABOUT</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="a">BLOG</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="a">ACCOUNT</NuxtLink>
                </li>
            </ul>
        </nav>
        <button class="header-cta">VIEW PLANS</button>
        <!-- <button class="mobile-nav">
            <img src="../10.png">
            <input type="checkbox" id="nav-checkbox" name="nav-checkbox">
        </button> -->
        </div>
      </nav>
    </header>
</template>

<script>
  export default{}
</script>


<style scoped>
header {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    background-color: var(--verylightgray);
    padding: 0px;
    /* height: 70px;
    display: flex;
    flex-direction: row; */
    z-index: 99;
    margin: 0;
    background-color: #ddd;
}

header .container{
    width: 80%;
    margin: 0 auto !important;
    display: flex;
    justify-content: space-between;
    padding: 0px 5px;
}
header .container .rigth-bar{
    display: flex;
}
#logo {
    display: flex;
    margin-left: 0px;
}

#logo .logo-img {
    margin: auto;
}

.desktop-navbar {
    flex: 1;
    display: flex;
}

.header-nav {
    list-style: none;
    padding: 0;
    margin: auto;
    margin-right: 0;
}

.header-nav li {
    display: inline;
    margin: auto 10px;
}

.header-nav .a {
    text-decoration: none;
    color: var(--grayishblue);
}

.header-nav .a:hover {
    color: red;
    /* color: var(--darkviolet) */
}

.header-nav .a:focus{
    color: blue;
}

.header-cta {
    width: 150px;
    height: 40px;
    margin: auto;
    margin-left: 10px;
    border-radius: 0px;
    border-color: var(--verydarkviolet);
    background-color: transparent;
    color: var(--verydarkviolet);
    /* border: 1px solid rebeccapurple; */

}

.header-cta:hover {
    background-color: var(--verydarkviolet);
    color: var(--verylightgray);
    cursor: pointer;
}

.mobile-nav {
    position: absolute;
    visibility: hidden;
    border: none;
    background-color: transparent;
}

#nav-checkbox {
    position: absolute;
    visibility: hidden;
}

.mobile-navbar {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -700px;
    left: 0px;
    height: 700px;
    width: 100vw;
    background-color: var(--darkviolet);
    z-index: 98;
    padding-top: 100px;
}

.header-nav-mobile {
    list-style: none;
    margin: 10px auto;
    padding: 0;
}

.header-nav-mobile li {
    margin: 50px 10px;
    text-align: center;
}

.header-nav-mobile a {
    text-decoration: none;
    color: var(--verylightgray);
}

.header-cta-mobile {
    width: 150px;
    height: 40px;
    margin: 0 auto;
    border-radius: 0px;
    border-color: var(--verylightgray);
    background-color: transparent;
    color: var(--verylightgray);
}

.pattern-5 {
    padding-top: 84px;
}

</style>