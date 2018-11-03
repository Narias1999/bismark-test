import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faTimes,
  faTrash,
  faExclamationTriangle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faTimes)
library.add(faTrash)
library.add(faExclamationCircle)
library.add(faExclamationTriangle)

Vue.component('f-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
