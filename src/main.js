import Vue from 'vue'
import App from './App.vue'
// import './assets/sass/main.scss'
require('@/assets/sass/main.scss')
Vue.mixin({
  created () {
    console.log('Global Mixing - Created Hook')
  }
})
Vue.config.productionTip = false
Vue.filter('toLowercase', function (value) {
  return value.toLowerCase()
})
new Vue({
  render: h => h(App)
}).$mount('#app')
