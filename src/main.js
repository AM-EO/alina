import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Buefy from 'buefy'
import '../node_modules/buefy/dist/buefy.css'


Vue.use(Buefy);

new Vue({
  render: h => h(App),
}).$mount('#app')
