import Vue from 'vue'
import App from './App.vue';
import './assets/styles/index.css';
import vueSmoothScroll from 'vue2-smooth-scroll';




import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faBolt, faBook, faEye, faChevronDown, faPencilAlt, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faLinkedin, faSun, faBolt, faBook, faEye, faGithub, faEye, faChevronDown, faPencilAlt, faMobile);



Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false;

Vue.use(vueSmoothScroll)



new Vue({
  render: h => h(App)
}).$mount('#app');

