import Vue from 'vue'
import Router from 'vue-router'
import war3 from '@/index.js'
import App from './app.vue'
import '@/theme/index.scss'
Vue.use(war3)
Vue.use(Router)
const router = new Router({
  esModule: false,
    routes: [
      {
        path: '/alert',
        component: (resolve) => require(['./router/alert.vue'], resolve)
      },
      {
        path: '/icon',
        component: (resolve) => require(['./router/icon.vue'], resolve)
      },
      {
        path: '/row',
        component: (resolve) => require(['./router/row.vue'], resolve)
      }
    ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')