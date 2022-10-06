import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [['@storyblok/nuxt', { accessToken: 'LHaH8jGzj53JbuJOwTLQdQtt' }]],
  meta: {
    link: [
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/fonts/ionicons/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/fonts/fontawesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/fonts/flaticon/font/flaticon.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
    ],
    script: [
      {type: 'text/javascript', src: '/js/jquery-3.2.1.min.js'},
      {type: 'text/javascript', src: '/js/jquery-migrate-3.0.0.js'},
      {type: 'text/javascript', src: '/js/popper.min.js'},
      {type: 'text/javascript', src: '/js/bootstrap.min.js'},
      {type: 'text/javascript', src: '/js/owl.carousel.min.js'},
      {type: 'text/javascript', src: '/js/jquery.waypoints.min.js'},
      {type: 'text/javascript', src: '/js/jquery.stellar.min.js'},
      {type: 'text/javascript', src: '/js/main.js'},
      {type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/vue@3'},
      {type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/vue-demi'},
      {type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/@vuelidate/core'},
      {type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/@vuelidate/validators'},

    ]
  }
})
