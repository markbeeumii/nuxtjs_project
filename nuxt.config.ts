// https://nuxt.com/docs/api/configuration/nuxt-config
export default{

  //Header 
  head: {
    title: 'Mark bee',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type:"image/png",href: "/bubbles.png"},
      // { rel: "icon", type:"image/png",href: "/logo.png"},
    ],
  },

//Check  middleware
  middleware: {
    error: (err:any, req:any, res:any) => {
      if (err.statusCode === 404) {
        res.status(404).render('404.vue', {
          error: err,
        });
      }
    },
  },
  
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // plugins: [
  //   '@/plugins/bootstrap-vue',
  // ],
  modules: [
    //'@nuxt/cdn',
  ],
  css:[
    {
      src: "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
      global: true
    },
    {
      src: '~/node_modules/bootstrap-icons/font/bootstrap-icons.css',
      global:true
    },
    {
      src: '~/styles/tooplate-clean-work.css',
      global: true,
    },
    {
      src: '~/styles/magnific-popup.css',
      global: true,
    },
  ]
}
