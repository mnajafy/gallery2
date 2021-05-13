import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/fontawesome-free-brands'
import { faBars, faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/scss/app.scss'

library.add(
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faGithub, 
  faBars, 
  faLinkedinIn, 
  faEnvelope, 
  faPhone
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
