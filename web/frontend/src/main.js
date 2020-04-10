import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from '@/store'

import DefaultRecorder from './components/DefaultRecorder'
import VideoMain from './views/VideoMain'
import vuetify from './plugins/vuetify';


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    { path: '/default-recorder', component: DefaultRecorder },
    { path: '/', component: VideoMain },
]


const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  router: router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
