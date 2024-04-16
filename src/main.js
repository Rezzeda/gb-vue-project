import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/styles.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  // router: require('./router').default,
  render: h => h(App)
}).$mount('#app')
