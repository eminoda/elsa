import Vue from 'vue'
// element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Test from './Test.md'
import router from './router'
import Elsa from 'main'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(Elsa)

new Vue({
  render: h => h(Test)
  // router,
}).$mount('#app')
