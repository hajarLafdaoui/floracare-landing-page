import Vue from 'vue'
import App from './App.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Properly register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Make GSAP available globally
Vue.prototype.$gsap = gsap;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')