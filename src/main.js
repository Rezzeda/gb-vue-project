import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/styles.css'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
