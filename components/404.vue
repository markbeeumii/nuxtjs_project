<template>
   <main>

            <section class="banner-section d-flex justify-content-center align-items-end">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">

                        <div class="col-lg-7 col-12">
                            <h1 class="text-white mb-lg-0">Page 404</h1>
                        </div>

                        <div class="col-lg-4 col-12 d-flex justify-content-lg-end align-items-center ms-auto">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>

                                    <li class="breadcrumb-item active" aria-current="page">Page 404</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </section>
         

            <section class="section-padding">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 text-center mx-auto">
                            <h2 class="page-404-title">404</h2>

                            <h3>Page Not Found</h3>

                            <p>The page you are looking for doesn't exist or has been moved.</p>

                            <NuxtLink class="custom-btn btn button button--atlas mt-4" to="/">
                                <span>Back to Home</span>

                                <div class="marquee" aria-hidden="true">
                                    <div class="marquee__inner">
                                        <span>Back to Home</span>
                                        <span>Back to Home</span>
                                        <span>Back to Home</span>
                                        <span>Back to Home</span>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>

                    </div>
                </div>
            </section>
        </main>

</template>

<script>
// import "@/styles/magnific-popup.css";
// import '@/styles/tooplate-clean-work.css'
export default{
    name: '404'
}
</script>
