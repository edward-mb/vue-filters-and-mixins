import Vue from 'vue'
import App from './App.vue'

require('@/assets/main.scss')
Vue.config.productionTip = false

Vue.filter('countAppend', value => {
  return `${value} (${value.length})`
})
new Vue({
  render: h => h(App)
}).$mount('#app')
